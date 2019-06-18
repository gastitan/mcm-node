const express = require('express')
const router = express.Router()
var mercadopago = require('mercadopago')

router.post('/payment/',(req, res) => {
	console.log("Te entra el pago");
	console.log(req.body);

	mercadopago.configure({
	    sandbox: true,
	    access_token: 'TEST-4949156402420360-061320-335ddaed6fb98da1cdb2ba7a2983a229-444030338'
	});

	const token = req.body.token;
	const payment_method_id = req.body.payment_method_id;
	const installments = req.body.installments;
	const issuer_id = req.body.issuer_id;

	var payment_data = {
	  token: token,
	  description: 'Compra MCM',
	  installments: parseInt(installments),
	  payment_method_id: payment_method_id,
	  issuer_id: issuer_id,
	  transaction_amount: 10,
	  payer: {
	    email: 'test_user_37070439@testuser.com'
	  }
	};

	// Guarda y postea el pago
	mercadopago.payment.save(payment_data)
	.then(function (data) {
	  // Imprime el estado del pago
	  console.log(data);
	}).catch(function (error) {
	  console.log(error);
	  res.send("error")
	});
	res.redirect("http://localhost:8080/#/thankyou");
	
	//console.log(mercadopago.payment);
	//res.send("OK");
});

router.post('/payment/notification', (req,res) => {
	console.log("Notification entry");
	console.log(req.body);
	res.send("OK");
})

module.exports = router;