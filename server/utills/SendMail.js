const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID)

const sendEmail = async (payload) => {
    let mailOptions = {
        from: payload.from, // sender address
        to: payload.emailTo, // list of receivers
        subject: payload.emailSubject, // Subject line
        html: null, // plain text body
        host: payload.host ? payload.host : "portal"
    };
    console.log(mailOptions);
    if (payload.cc && payload.cc != "") {
        mailOptions["cc"] = payload.cc
    }

    if (payload.bcc && payload.bcc != "") {
        mailOptions["bcc"] = payload.bcc
    }

    switch (payload.templateName) {
        default:
            mailOptions.html = payload.emailBody;
            break;
    }

    if (mailOptions.html) {
        return await nodemailersendMail(mailOptions)
    } else {
        return false;
    }
}

var nodemailersendMail = function (mailOptions) {
    return new Promise((resolve, reject) => {
    
        if (mailOptions.from == null) mailOptions["from"] = `WCS Property <` + process.env.SMTP_FROM + ">";
        const msg = {
            to:mailOptions.to, // Change to your recipient
            from: mailOptions.from, // Change to your verified sender
            subject: mailOptions.subject,
            html: mailOptions.html,
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log("Email Sent...");
                resolve({ status: true })
            })
            .catch((error) => {
                console.log("Email Failed..." + error.message);
                resolve({ status: false, message: error.message });
            })
    });
}


module.exports = {
    sendEmail
}