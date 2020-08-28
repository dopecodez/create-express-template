'use strict';

const router = require('express').Router();
const userService = require("./userService");

/* GET max no: of strings. */
router.get('/', async function (req, res) {
    try {
        //refirect to service
        const response = await userService.getUsers();
        res.send(response);
    } catch (error) {
        res.status(error.status || 500).send(error);
    }
});

module.exports = router;