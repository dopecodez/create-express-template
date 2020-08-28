const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  SERVER_PORT: process.env.PORT || '',
  NODE_ENV: process.env.NODE_ENV || '',
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql'
};
