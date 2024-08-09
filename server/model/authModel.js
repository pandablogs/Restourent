const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    adminName: {type:String,required:true, trim: true },
    email: {type:String,required:true, trim: true },
    password: {type:String,required:true, trim: true },
})

const authModel = mongoose.model('auth',authSchema)

module.exports = authModel