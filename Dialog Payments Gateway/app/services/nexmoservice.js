const sms = require('../config/sms.js');
var https = require('https');

module.exports.sendSms = function(mobileNo,amount){
var data = JSON.stringify({
 api_key: sms.api_key,
 api_secret: sms.secret,
 to: mobileNo,
 from: sms.myNexmo,
 text: '=== You have been charged RS: '+ amount +' /= from your mobile number '+ mobileNo + " === "
});

var options = {
 host: 'rest.nexmo.com',
 path: '/sms/json',
 port: 443,
 method: 'POST',
 headers: {
   'Content-Type': 'application/json',
   'Content-Length': Buffer.byteLength(data)
 }
};

var req = https.request(options);

req.write(data);
req.end();

var responseData = '';
req.on('response', function(res){
 res.on('data', function(chunk){
   responseData += chunk;
 });

 res.on('end', function(){
   console.log(JSON.parse(responseData));
 });
});


}




