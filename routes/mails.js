const express = require('express')
const router = express.Router()

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com',
  auth: {
    user: 'mcm.matafuegos@gmail.com',
    pass: '10fadc9f-2149-4274-a242-04410fa35652'
  }
});

router.post('/mail/',(req, res) => {
	var mailOptions = mailOptionsF(req);
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});
	res.send('Mail sent successfully');
});

function mailOptionsF(req){
	return {
	  	from: 'mcm.matafuegos@gmail.com',
	  	to: 'mcm.matafuegos@gmail.com',
	  	subject: 'Tienes un nuevo mensaje desde el sitio',
	  	text: req.body.additionalInfo
	};
}

module.exports = router;