const nodemailer = require('nodemailer');
const config = require('../config/mail.js');



module.exports.sendMail = function(sender,amount){

var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: config.mailUser,
        pass: config.secret
    }
});

let helperOptions = {
	from:  config.mailUser,
	to : sender,
	subject : 'Movie Store purchase',
	text : 'Hi ' + sender +'; .Your Creditcard has been charged RS: '+amount+' /='
};
transporter.sendMail(helperOptions,(err, info)=>{
	if(err){
		return console.log(err);
	}

	console.log('The message was sent');
	console.log(info);
});


}