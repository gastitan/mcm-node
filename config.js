// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  clientServer: process.env.VUE_APP_BASE_URL
};