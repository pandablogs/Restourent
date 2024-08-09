const mongoose = require('mongoose')

const menuCategorySchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'users',required:true},
    categoryName:{type:String,required:true},
    isDeleted:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true}
},{timestamps:true})

const menuCategoryModel = mongoose.model('menu-category',menuCategorySchema)

module.exports = menuCategoryModel