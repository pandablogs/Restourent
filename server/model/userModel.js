const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    hotelLogo : {type:String,required:false},
    hotelName : {type:String,required:true},
    ownerFirstName : {type:String,required:true},
    ownerLastName : {type:String,required:true},
    email : {type:String,required:true},
    hotelPhoneNumber : {type:Number,required:true},
    hotelAddress1 : {type:String,required:true},
    hotelAddress2 : {type:String},
    role:{type:String,default:'RestaurantAdmin'},
    password:{type:String,required:true},
    isDeleted:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true}
},{timestamps:true})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel