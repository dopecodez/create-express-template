const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  SERVER_PORT: process.env.PORT || '',
  NODE_ENV: process.env.NODE_ENV || '',
};
