const express = require('express')
const userController = require('../controller/userController')
const authController = require('../controller/authController')
const contact = require('../controller/contactController')
const router = express.Router()
const upload = require('../controller/upload')
const menuCategory = require('../controller/menuCategoryController')

//User Controller
router.post('/userRegistration', userController.userRegister)
router.get('/userDetails', userController.userDetailsGet)
router.delete('/userDetails/:_id', userController.deleteUser);
router.put('/userDetails/:_id', userController.updateUser);
router.put('/changeStatus/:_id', userController.changeStatus);
router.post('/changePassword',authController.authMiddelware, userController.changePassword);
router.get('/download', userController.download);
router.post('/upload', upload.single('file'), (req, res) => {
    const data = req.file;
    res.json({ data,message: 'File uploaded successfully!' });
});

//Auth Controller
router.post('/authRegistration', authController.authRegister);
router.post('/authlogin', authController.userLogin);

//Contact Controller
router.post('/contactUs', contact.Contact);
router.post('/getContactDetails', contact.getContactDetail);

//Menu Category
router.post('/addMenuCategory',authController.authMiddelware, menuCategory.AddMenuCategory);
router.get('/getAllMenuCategory',authController.authMiddelware, menuCategory.getAllMenuCategory);
router.post('/updateMenuCategory/:categoryId',authController.authMiddelware, menuCategory.updateMenuCategory);
router.post('/deleteMenuCategory/:categoryId',authController.authMiddelware, menuCategory.deleteMenuCategory);

//Customer Routes 
router.post('/customerRegistration',authController.authRegisterCustomer);
router.post('/customerLogin',authController.authCustomerLogin);
router.post('/addCart',authController.customerAuthMiddelware,(req,res)=>{
    res.send({status:true,message:"This is Valid User",data:req['_customer']});
});

module.exports = router