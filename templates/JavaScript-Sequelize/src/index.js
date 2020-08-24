'use strict';
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const routerConfig = require('./modules/route');
// TODO: add database configurations.
const config = require('./config/config');
const logger = require('./helpers/logger');
const port = config.PORT || 3000;
const sequelize = require('./models/index')

const init = () => {
  // *** express instance *** //
  const app = express();
  // Configuraing the standard middlewares.
  setupStandardMiddlewares(app);
  configureApiEndpoints(app);
  app.listen(port);
  console.log(`App listening in port : ${port}`);
  logger.info(`App listening in port : ${port}`);
};

const setupStandardMiddlewares = (app) => {
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  return;
};

const configureApiEndpoints = (app) => {
  //creates tables if it does not exist in database
  sequelize.sync();
  app.use("/api/v1/", routerConfig.init());
  // define a route handler for the default home page
  app.get( "/", (req, res) => {
    res.send( "Welcome to express-create application!" );
  });
};

init();