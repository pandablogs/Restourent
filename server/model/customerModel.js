const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    customer_name : {type:String,default:""},
    customer_email : {type:String,require:true},
    customer_phone : {type:String,default:""},
    customer_password : {type:String,require:true},
    customer_cart : {type:Array,default:[]}
});


const customerModel = mongoose.model('customers',customerSchema);

module.exports = customerModel;