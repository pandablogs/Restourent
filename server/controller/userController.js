const db = require('../model')
const fs = require('fs');
const path = require('path');
const userModel = db.userModel
const authModel = db.authModel
const bcrypt = require('bcrypt')
const emailService = require('../utills/emailService')

const userRegister = async (req, res) => {
  try {
    const { hotelLogo,hotelName, ownerFirstName, ownerLastName, email, hotelPhoneNumber, hotelAddress1,hotelAddress2 } = req.body
    if (!hotelName) { res.json({ status: false, message: 'Hotelname required' }) }
    else if (!ownerFirstName) { res.json({ status: false, message: 'Owner Firstname required' }) }
    else if (!ownerLastName) { res.json({ status: false, message: 'Owner Lastname required' }) }
    else if (!email) { res.json({ status: false, message: 'Email required' }) }
    else if (!hotelPhoneNumber) { res.json({ status: false, message: 'Hotel phone number required' }) }
    else if (!hotelAddress1) { res.json({ status: false, message: 'Hotel Address1 required' }) }
    else {
      const isEmail = await userModel.count({ email })
      if (isEmail) {
        res.json({ status: false, message: 'Email already exists' })
      } else {
        const password = generateRandomString(8);
        const hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({
          hotelLogo,
          hotelName,
          ownerFirstName,
          ownerLastName,
          email,
          hotelPhoneNumber,
          hotelAddress1,
          hotelAddress2,
          password:hashedPassword
        })
        await emailService.welcomeEmail({emailTo:email,password,ownerFirstName})
        res.json({ status: true, message: 'Data recorded successfully...' })
      }
    }
  } catch (err) {
    res.json({ status: false, message: err.message })
  }
}

const userDetailsGet = async (req, res) => {
  try {
    const users = await userModel.aggregate([
      {$sort:{createdAt:-1}},
      {$lookup : {from:'users',localField:'_id',foreignField:'_id',as:'users'}},
      {$match:{isDeleted:false}}
    ]);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const deleteUser = async (req, res) => {
  const { _id } = req.params;
  // console.log(_id);
  try {
    const user = await userModel.findById(_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.flag = false;
    await user.save();
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  const { _id } = req.params;
  const { hotelLogo,hotelName, ownerFirstName, ownerLastName, email, hotelPhoneNumber, hotelAddress1,hotelAddress2 } = req.body
  try {
    const user = await userModel.findById(_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await userModel.updateOne({_id},{
      $set :{
        hotelLogo,
        hotelName,
        ownerFirstName,
        ownerLastName,
        email,
        hotelPhoneNumber,
        hotelAddress1,
        hotelAddress2
      }
    })
    res.json({ status:true,message: 'User updated successfully', user });
  } catch (err) {
    res.status(500).json({ status:false,message: err.message });
  }
};

const changeStatus = async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await userModel.findById(_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await userModel.updateOne({_id},{
      $set :{
        isActive : !user.isActive
      }
    })
    res.json({ message: 'Status changed successfully',status:true});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const changePassword = async (req, res) => {
  const { _id } = req._user;
  const {oldPassword, newPassword} = req.body
  try {
    const user = await authModel.findOne({_id});
    if (user) {
      const isOldPasswordMatch = await bcrypt.compare(oldPassword,user.password)
      if(isOldPasswordMatch){
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await authModel.updateOne({_id},{$set:{password:hashedPassword}})
        res.json({status:true,message:'Password changed successfully'})
      }else{
        res.json({status:false,message:'Old Password not match'})
      }
    }else{
      res.json({status:false, message: 'User not found',_id });
    }
  } catch (err) {
    res.json({status:false, message: err.message });
  }
};

function generateRandomString(length) {
  const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += alphanumericCharacters.charAt(Math.floor(Math.random() * alphanumericCharacters.length));
  }
  return randomString;
}

const download = async (req, res) => {
  try {
    const filePath = "uploads/"+req.query.file;
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).send({ message: "File not found" });
    }
    
    const fileName = req.query.name || path.basename(filePath);
    res.writeHead(200, {
      'Content-disposition': `inline; filename=${fileName}`
    });
    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', function(err) {
      res.status(500).send({ message: "Error in reading file", error: err });
    });
    fileStream.on('end', function() {
      res.end();
    });
    fileStream.pipe(res);

  } catch (err) {
    res.status(500).send({
      message: "Could not download the file. " + err,
    });
  }
};


module.exports = {
  userRegister,
  userDetailsGet,
  deleteUser,
  updateUser,
  changeStatus,
  changePassword,
  download
}