'use strict';

const router = require('express').Router(),
    stringManager = require("./userRouter");

/* GET max no: of strings. */
router.get('/', async function (req, res) {
    try {
        //refirect to service
        const response = await stringManager.getUsers();
        res.send(response);
    } catch (error) {
        res.status(error.status || 500).send(error);
    }
});

module.exports = router;