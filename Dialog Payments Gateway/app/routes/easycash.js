const express = require('express');
const route = express.Router();
const sms = require('../services/nexmoservice.js');

route.post('/',(req, res)=>{
	var mobileno = req.body.mob;
	var amt = req.body.amt;
	var totalAmount = amt+5;
	const creditLimit = 20000;

	if(amt > creditLimit){
		res.status(202).json({"msg":"You dont have enough credit to make this purchase"});
	}else{
		sms.sendSms(mobileno,totalAmount);
		res.status(200).json({"msg":"Your mobile number "+mobileno+" has been successfully charged "+ (totalAmount)});
	}
});

module.exports = route;