const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');


router.get("/", (req, res) => {

    req.logout(err => {
        if (err) throw err;
        res.send("You are logged out!");
    });
});

module.exports = router    