require('dotenv').config();
module.exports = {
    BASE_URL : process.env.BASE_URL || 'http://localhost:3003',
    MONGO_DB : process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hotel-management',
}