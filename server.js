/* -------------------------------------------------------------------------- */
/*                                  Iporturi                                  */
/* -------------------------------------------------------------------------- */
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const User = require("./user");
const Photo = require("./photoSchema");
const upload = require("./packages/multerConfig");
const port = 5000;

mongoose.connect("mongodb+srv://admin-costel:oXqtQIJUgVxkBguO@atlascluster.49fubwp.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectat la baza de date MongoDB');
    })
    .catch(error => {
        console.error('Eroare la conectarea la baza de date MongoDB:', error);
    });
/* -------------------------------------------------------------------------- */
/*                                 Middleware                                 */
/* -------------------------------------------------------------------------- */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("Acest utilizator nu exista");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Conectare cu succes");
                console.log(req.user);
            });
        }
    })(req, res, next);
});

app.post("/register", async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            res.send("Acest utilizator deja exista");
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("Utilizator creat cu succes");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

const checkAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.send("Nu este autentificat!");
};


//Ruta care necesita conectare pentru a putea adauga continut

app.post("/galerie", checkAuthenticated, upload.single("file"), (req, res) => {
    const value = req.file.filename;
    console.log(value);

})




//Ruta pentru a trimite date catre toti utilizatorii
app.get("/galerie", (req, res) => {

    //accesez photo colection din bd si triit date in front-end
    const photo = ['photo1', 'photo2', 'photo3', 'photo4'];

    res.send(photo);

})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
