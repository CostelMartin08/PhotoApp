/* -------------------------------------------------------------------------- */
/*                                  Iporturi                                  */
/* -------------------------------------------------------------------------- */
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
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
require('dotenv').config();
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
        secret: process.env.CODE,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cookieParser(process.env.CODE));
app.use(passport.initialize());
app.use(passport.session());
require('./packages/passportConfig')(passport);

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.use('/login', loginRouter);
app.use('/disconnection', logoutRouter);
app.use('/register', registerRouter);
app.use('/galerie/allContent', allContent);
app.use('/galerie', uploadRouter);

app.use('/delete', deleteRouter);

app.get('/user', (req, res) => {
    res.send(req.user);
});

app.post('/send-email', (req, res) => {

    const nume = req.body.nume;
    const email = req.body.email;
    const telefon = req.body.telefon;
    const subiect = req.body.subiect;
    const data = req.body.data;
    const mesaj = req.body.mesaj;


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_CODE,
            pass: process.env.EMAIL_SECRET,
        }
    });
 

    const mailOptions = {
        from: email,
        to: 'andreib3100@gmail.com',
        subject: `balanandrei.ro - ${subiect}`,
        text: `  Hei Andrei! Domnul/Doamna ${nume} cu numarul de telefon ${telefon} e interesat/iteresata de serviciile tale.
        Data solicitarii: ${data};
        Subiect: ${subiect};
        Mesaj: ${mesaj}`,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Eroare la trimiterea e-mailului.' });
        } else {
            res.json({ message: 'E-mail trimis cu succes!' });
        }
    });
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
