//cong env
require('dotenv').config()
//Utils
const SendMail = require('./SendMail')

const welcomeEmail = async (payload) => {
    const emailBody = `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Our Platform!</title>
            <style>
                /* Add your custom styles here */
                body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                background-color: #f4f4f4;
                padding: 20px;
                }
                .container {
                max-width: 600px;
                margin: auto;
                background: #fff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h2 {
                color: #333;
                }
                p {
                margin-bottom: 20px;
                color: #666;
                }
                .btn {
                display: inline-block;
                background: #007bff;
                color: #fff;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
                }
                .btn:hover {
                background: #0056b3;
                }
            </style>
            </head>
            <body>
            <div class="container">
                <h2>Welcome to Hotel Management System!</h2>
                <p>Dear ${payload.ownerFirstName},</p>
                <p>We are thrilled to welcome you aboard! You've taken the first step towards hotel management system.</p>
                <p><b>Username : ${payload.emailTo}</b></p>
                <p><b>Password : ${payload.password}</b></p>
                <p>If you have any questions or need assistance, feel free to reply to this email. Our support team is here to help!</p>
                <p>Best regards,<br>Your Hotel Management System Team</p>
            </div>
            </body>
            </html>
            `
    const emailPayload = {
        from: `WCS Property < ${process.env.SMTP_FROM} >`,
        emailTo: payload.emailTo,
        cc: '',
        emailSubject: 'Welcome to Hotel Management System!',
        emailBody: emailBody
    }
    await SendMail.sendEmail(emailPayload)
    return true
}
module.exports = {
    welcomeEmail
};
