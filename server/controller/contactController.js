const db = require('../model')
const contactModel = db.contactModel

const Contact = async (req, res) => {
  try {
    const { hotelName, ownerFirstName, ownerLastName, email, hotelPhoneNumber, hotelAddress } = req.body
    if (!hotelName) { res.json({ status: false, message: 'Hotelname required' }) }
    else if (!ownerFirstName) { res.json({ status: false, message: 'Owner Firstname required' }) }
    else if (!ownerLastName) { res.json({ status: false, message: 'Owner Lastname required' }) }
    else if (!email) { res.json({ status: false, message: 'Email required' }) }
    else if (!hotelPhoneNumber) { res.json({ status: false, message: 'Hotel phone number required' }) }
    else if (!hotelAddress) { res.json({ status: false, message: 'Hotel Address required' }) }
    else {
      await userModel.create({
        hotelName,
        ownerFirstName,
        ownerLastName,
        email,
        hotelPhoneNumber,
        hotelAddress
      })
      res.json({ status: true, message: 'Details submitted successfully!. Admin member will contact shortly.' })
    }
  } catch (err) {
    res.json({ status: false, message: err.message })
  }
}

const getContactDetail = async(req,res) => {
  try{  
    const contactDetails = await contactModel.find();
    if(contactDetails){
      res.json({status:true,message:'Contact details fetched successfully', data:contactDetails})
    }else{
      res.json({status:false,message:'Something went wrong!', data:[]})
    }
  }catch(err){
    res.json({status:false,message:err.message})
  }
}
module.exports = {
  Contact,
  getContactDetail
}