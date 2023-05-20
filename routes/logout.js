const express = require("express");
const router = express.Router();
const passport = require('passport');



router.get("/", (req, res) => {

    req.logout(err => {
        if (err) throw err;
        res.send("Sunteti deconectat!");
    });
});

module.exports = router    