const db = require('../model')
require('dotenv').config();
const authModel = db.authModel
const userModel = db.userModel
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authRegister = async (req, res) => {
    try {
        const { adminName, email, password } = req.body;
        if (!adminName) { res.json({ status: false, message: 'Name required' }); }
        else if (!email) { res.json({ status: false, message: 'Email required' }); }
        else if (!password) { res.json({ status: false, message: 'Password required' }); }
        else {
            const isEmail = await authModel.count({ email });
            if (isEmail) {
                res.json({ status: false, message: 'Email already exists' });
            } else {
                // Hash the password
                const hashedPassword = await bcrypt.hash(password, 10);
                await authModel.create({
                    adminName,
                    email,
                    password: hashedPassword
                });

                // Generate token
                const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                res.json({ status: true, message: 'Data recorded successfully...', token: token });
            }
        }
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        try {
            const auths = await authModel.findOne({ email: email });
            if (!auths) {
                const users = await userModel.findOne({ email: email });
                if (users) {
                    const passwordMatch = await bcrypt.compare(password, users.password);
                    if (passwordMatch) {
                        const data = {
                            hotelLogo: users.hotelLogo,
                            hotelName: users.hotelName,
                            ownerFirstName: users.ownerFirstName,
                            ownerLastName: users.ownerLastName,
                            email: users.email,
                            hotelPhoneNumber: users.hotelPhoneNumber,
                            hotelAddress1: users.hotelAddress1,
                            hotelAddress2: users.hotelAddress2,
                            role: users.role
                        }
                        const token = jwt.sign({ _id: users._id, email: users.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                        res.send({ status: true, token: token, data });
                    } else {
                        res.send({ status: false, message: "Incorrect password" });
                    }
                } else {
                    res.send({ status: false, message: "User does not exist" });
                }
            } else {
                const passwordMatch = await bcrypt.compare(password, auths.password);
                if (passwordMatch) {
                    const data = {
                        email: auths.email,
                        role: 'SuperAdmin'
                    }
                    const token = jwt.sign({ _id: auths._id, email: auths.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                    res.send({ status: true, token: token, data });
                } else {
                    res.send({ status: false, message: "Incorrect password" });
                }
            }
        } catch (err) {
            res.status(500).json({ status: false, message: err.message });
        }
    } else {
        res.send({ status: false, message: "All fields are required" });
    }
};

// Authmiddelware

const authMiddelware = async (req, res, next) => {
    try {
        if (!req.headers['authorization']) {
            res.json({ status: false, message: 'Please provide authorization detail' })
        } else {
            const header = req.headers['authorization'].split(' ')
            if (header[1] == null) {
                res.json({ status: false, message: 'Please provide access token' })
            } else {
                const Token = jwt.decode(header[1], process.env.JWT_SECRET_KEY)
                if (Token) {
                    if (new Date().getTime() / 1000 < Token.exp) {
                        req["_user"] = Token
                        next()
                    } else {
                        res.json({ status: false, message: 'Token expired! Please login again' })
                    }
                } else {
                    res.json({ status: false, message: 'Invalid token' })
                }
            }
        }
    } catch (err) {
        res.json({ status: false, message: err.message })
    }
}

module.exports = {
    authRegister,
    userLogin,
    authMiddelware
}

