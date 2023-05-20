const express = require("express");
const router = express.Router();
const passport = require('passport');


router.post("/", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user)   return res.status(404).send("Acest utilizator nu există");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Conectare cu succes");
                console.log(req.user);
            });
        }
    })(req, res, next);
});

module.exports = router    