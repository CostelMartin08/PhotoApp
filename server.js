const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

// Passport.js configuration
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
// Mock database
const users = [
    { id: 1, username: 'admin', password: 'admin' },
];

passport.use(new LocalStrategy(
    (username, password, done) => {
        const user = users.find(u => u.username === username);
        if (!user) {

            return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password !== password) {

            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
});

const isAuthenticated = (req, res, next) => {

    if (req.isAuthenticated()) {
        // Utilizatorul este autentificat, permite accesul la următoarea rută
        return next();
    }
    // Utilizatorul nu este autentificat, redirecționează către pagina de login
    res.redirect("/")
    console.log("Nu esti conectat");

};

// Routes
app.post('/login', passport.authenticate('local'), (req, res) => {

    // Autentificare reușită, puteți face orice acțiune necesară aici
    res.sendStatus(200);

});




//Afla de ce nu merge verificarea conectatului:))))
app.get("/dashboard", isAuthenticated, (req, res) => {

    var number = [2, 4, 6, 9, 10];


    res.send(number);
})

app.get("/logout", (req, res) => {

    req.logout(err => {
        if (err) throw err;
        res.send("Sunteti deconectat!");
    });
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
