const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT,
  GOOGLE_APP_CLIENT_ID: process.env.GOOGLE_APP_CLIENT_ID,
  SSO_APP_BASE_URL: process.env.SSO_APP_BASE_URL,
  SSO_TOKEN_VERIFY_API: process.env.SSO_TOKEN_VERIFY_API,
};
