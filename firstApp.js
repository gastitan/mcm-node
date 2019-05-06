const express = require('express');
const authApi = require('./routes/auth');
const productApi = require('./routes/products');
const userApi = require('./routes/users');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.use('/api', [authApi,productApi,userApi]);

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
