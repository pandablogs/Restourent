const mongoose = require('mongoose');

const customerTokenSchema = new mongoose.Schema({
    customer_id:{type:mongoose.Schema.Types.ObjectId,ref:'customers'},
    jwtAuthToken:{type:String,require:true,default:null}
});

const customerTokenModel = mongoose.model('customerAuthTokens',customerTokenSchema);

module.exports = customerTokenModel;

