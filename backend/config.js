const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { getMaxListeners } = require('./model/userSchema');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    //user: user-email // your email address to send email from
    //pass: user-password  // your gmail account password
  }
});

module.exports = transporter;