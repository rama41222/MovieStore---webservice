const express = require('express');
const route = express.Router();
const mail = require('../services/stmp.js');

route.post('/',(req, res)=>{
	var ccno = req.body.ccno;
	var cvv = req.body.cvv;
	var amt = req.body.amt;
	var email = req.body.email;
	var totalAmount = amt+5;
	const creditLimit = 50000;

	if(amt > creditLimit){
		res.status(202).json({"msg":"You dont have enough credit to make this purchase"});
	}else{
		mail.sendMail(email, totalAmount);
		res.status(200).json({"msg":"Your creditcard "+ccno+" has been successfully charged "+ (totalAmount)});
	}
});

module.exports = route;