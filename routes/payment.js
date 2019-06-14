const express = require('express')
const router = express.Router()
var mercadopago = require('mercadopago')

mercadopago.configure({
  client_id: '8424770065337570',
  client_secret: '1HHgUYrfZ5AKtcQ6StcAP2DfHp3MXmak'
});

router.post('/payment/',(req, res) => {
	console.log("Te entra el pago");
	console.log(req.body);
});

module.exports = router;