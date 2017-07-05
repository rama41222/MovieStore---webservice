const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./app/config/db.js');

const app = express();
const PORT = 3002;

 

app.use(cors());
app.use(bodyParser.json());

const easycash = require("./app/routes/easycash.js");
app.use('/transaction',easycash);

app.get('/', (req,res)=>{
	res.status(200).json({ api: "Welcome to Dialog easycash api 1.0.0v"});
});

app.listen(PORT, (err)=>{
	if(err){
		console.log('Error occured : \n' + err)
		return;
	}

	console.log('Server Started Runnig at port' + PORT);
});

