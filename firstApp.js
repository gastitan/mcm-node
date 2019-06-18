const express = require('express');
const cors = require('cors');
const authApi = require('./routes/auth');
const productApi = require('./routes/products');
const mailApi = require('./routes/mails');
const userApi = require('./routes/users');
const paymentApi = require('./routes/payment');
const bodyParser = require('body-parser');
const static_data = require('./static/static_data.json');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use('/api', [authApi,productApi,userApi,mailApi,paymentApi]);

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://gastitan:mcm2019@mcmcluster-hvlx7.mongodb.net/mcm?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Initialize the app.
var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port
  console.log('App now running on port', port)
})

app.get('/', function (req, res) {
  res.render('index', static_data)
})
