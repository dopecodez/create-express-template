'use strict';
const { Router } = require('express');
const userRoute = require('./user/userRouter');
const router = Router();

const init = () => {
    // *** register routes here *** //
    router.use('/users', userRoute);
    return router;
};

module.exports = {init};