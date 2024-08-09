const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({
    hotelName : {type:String,required:true},
    ownerFirstName : {type:String,required:true},
    ownerLastName : {type:String,required:true},
    email : {type:String,required:true},
    hotelPhoneNumber : {type:Number,required:true},
    hotelAddress : {type:String,required:true},
    isDeleted:{type:Boolean,default:false}
},{timestamps:true})

const contactModel = mongoose.model('contact',contactSchema)

module.exports = contactModel