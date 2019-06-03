/******************************************************************************
 *  @Purpose        : For sending mail using nodemailer.
 *  @file           : sendMail.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
/**
 * 
 * @param {*} url
 * @param {*} email 
 */
exports.sendMailFunction = (url, email) => {
  try {
    /* 
    ** requiring node.js application for sending email
    */
    var nodemailer = require('nodemailer')
    /** 
    *@description:Nodemailer-smtp-transport -->main transport in Nodemailer for delivering messages.
    */
    var smtpTransport = require('nodemailer-smtp-transport');

    var transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.user,
        pass: process.env.pass
      }

    }));
    var mailOptions = {
      from: 'kelkardipali1@gmail.com', // sender address 
      to: email, // list of receivers 
      subject: 'Password Reset', // Subject line 
      text: 'please go through the email verification link provide in this mail:\n\n' + url
    };

    transporter.sendMail(mailOptions, function (error, info) {
      console.log(error, info);
    })
  } catch (err) {
    console.log("Error in sending mail");

  }
}