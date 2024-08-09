const express = require('express')
const app = express()
const cors = require('cors');
const router = require('./router/router')
require('dotenv').config()
const port = process.env.PORT
const db = require('./model')
app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTION');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

app.use('/api', router)
db.mongoose.connect(db.mongodb, {}).then(() => {
    console.log('Database connected!!!')
}).catch((err) => {
    console.log("Database not connected! ", err)
})
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})