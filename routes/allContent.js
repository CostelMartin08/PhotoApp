const express = require("express");
const router = express.Router();
const Nunti = require("../schema/photo1Schema");
const Botezuri = require("../schema/photo2Schema");
const Diverse = require("../schema/photo3Schema");


router.get('/', (req, res) => {
    Promise.all([
        Nunti.find({}).exec(),
        Botezuri.find({}).exec(),
        Diverse.find({}).exec()
    ])
        .then(([nunti, botezuri, diverse]) => {
            const colectii = [nunti, botezuri, diverse];
            const primulElement = colectii.map(oColectie => oColectie[0]);

            res.send(primulElement);
        })
        .catch((error) => {
            console.error('Eroare:', error);
            res.status(500).send('A apărut o eroare');
        });
});


module.exports = router    