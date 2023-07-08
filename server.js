/* -------------------------------------------------------------------------- */
/*                                  Iporturi                                  */
/* -------------------------------------------------------------------------- */
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

const port = 5000;
/* -------------------------------------------------------------------------- */
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const registerRouter = require('./routes/register');
const uploadRouter = require('./routes/upload');
const allContent = require('./routes/allContent');
const deleteRouter = require('./routes/delete');
/* -------------------------------------------------------------------------- */
const database = require('./schema/mongoConnect');
/* -------------------------------------------------------------------------- */
/*                                 Middleware                                 */
/* -------------------------------------------------------------------------- */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);
app.use(
    session({
        secret: 'secretcode',
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
require('./packages/passportConfig')(passport);

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.use('/login', loginRouter);
app.use('/disconnection', logoutRouter);
app.use('/register', registerRouter);
app.use('/galerie', uploadRouter);
app.use('/allContent', allContent);
app.use('/delete', deleteRouter);

app.get('/user', (req, res) => {
    res.send(req.user);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
