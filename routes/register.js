const express = require("express");
const passport = require('passport');
const bcrypt = require("bcryptjs");
const User = require("../schema/userSchema");
const router = express.Router();
const mongoose = require('mongoose');

router.post("/", async (req, res) => {


    try {
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            res.send("This user already exists");
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User successfully created");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router    