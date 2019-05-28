// const nodemailer=require('nodemailer');
// exports.sendMailFunction=(url,email)=>{
//     console.log("@@@@@@@@@@@@",email);
    
//     const transporter=nodemailer.createTransport({
//         service:'Gmail',
//         auth:{
//             user:'ilovehitman45sharma@gmail.com',
//             pass:'Hitman@45'
//         },
//     });
//     const mailOptions={
//         from:'kelkardipali1@gmail.com',
//         to:email,
//         subject:'chat_app password reset link',
//         text:'please go through the email verification link provide in this mail:\n\n'+url
//     };
//     transporter.sendMail(mailOptions,(err,info)=>{

//         if(err){
//             console.log("it is invalid");
//             console.log("Error on sending mail",err)
//         }
//         else{
//             console.log('result of sending mail',info);
//         }
//     });
// }




// var nodemailer = require('nodemailer-smtp-transport');
// exports.sendMailFunction=(url,email)=>{
//                 // create reusable transporter object using SMTP transport 
//                 var transporter = nodemailer.createTransport({
//                     service: 'gmail',
//                     auth: {
//                         admin: 'kelkardipali1@gmail.com',
//                         pass: 'dipali@1234'
//                     },
//                     host: 'smtp.gmail.com',
//                     secure : true 
//                 });
//                 console.log(email)
//                 var mailOptions = {
//                     from: 'kelkardipali1@gmail.com', // sender address 
//                     to: 'email', // list of receivers 
//                     subject: 'Password Reset', // Subject line 
//                     text:'please go through the email verification link provide in this mail:\n\n'+url
//                 };

//                 transporter.sendMail(mailOptions, function (error, info) {
//                     console.log(error,info);
//               })
//             }

exports.sendMailFunction=(url,email)=>{
    var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'kelkardipali1@gmail.com',
    pass: 'dipali@1234'
  }

}));
var mailOptions = {
    from: 'kelkardipali1@gmail.com', // sender address 
    to: email, // list of receivers 
    subject: 'Password Reset', // Subject line 
    text:'please go through the email verification link provide in this mail:\n\n'+url
};

transporter.sendMail(mailOptions, function (error, info) {
    console.log(error,info);
})
}