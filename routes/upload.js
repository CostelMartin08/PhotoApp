const express = require("express");
const router = express.Router();
const upload = require('../packages/multerConfig');
const Nunti = require("../schema/photo1Schema");
const Botezuri = require("../schema/photo2Schema");
const Diverse = require("../schema/photo3Schema");



const checkAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.send("This action requires login!");
};



//Ruta pentru a trimite date catre toti utilizatorii
router.get("/:parametruURL", (req, res) => {

    const param = req.params.parametruURL;

    let collection;
    switch (param) {
        case 'Nunti':
            collection = Nunti;
            break;
        case 'Botezuri':
            collection = Botezuri;
            break;
        case 'Diverse':
            collection = Diverse;
            break;
        default:
            res.status(404).send({ error: 'Invalid category' });
            return;
    }

    collection.find()
        .then((gallery) => {
            if (gallery) {

                res.send(gallery);
            } else {
                res.status(404).send({ error: 'Not found' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ error: 'Error finding gallery' });
        });
});



router.post("/", checkAuthenticated, upload.fields([

    { name: 'nunti', maxCount: 100 },
    { name: 'botezuri', maxCount: 100 },
    { name: 'diverse', maxCount: 100 }
]), (req, res) => {

    const filtredData = [];


    const category = req.body.select;

    switch (category) {

        case 'Nunti':

            req.files['nunti'].forEach(element =>
                filtredData.push(element.originalname)
            );

            const newNunta = new Nunti({
                content: filtredData,
                title: req.body.text,
                description: req.body.textArea,
            });
            Nunti.create(newNunta)
                .then((createdNunta) => {
                    console.log("The wedding event has been added to the database:", createdNunta)
                })
                .catch((error) => {
                    console.error("Error loading event wedding:", error);
                });
            break;

        case 'Botezuri':

            req.files['botezuri'].forEach(element =>
                filtredData.push(element.originalname)
            );

            const newBotez = new Botezuri({
                content: filtredData,
                title: req.body.text,
                description: req.body.textArea,
            });
            Botezuri.create(newBotez)
                .then((createdBotez) => {
                    console.log("The baptism event was added to the database", createdBotez);
                })
                .catch((error) => {
                    console.error("Error loading event baptism:", error);
                });
            break;

        case 'Diverse':

            req.files['diverse'].forEach(element =>
                filtredData.push(element.originalname)
            );

            const newDiverse = new Diverse({
                content: filtredData,
                title: req.body.text,
                description: req.body.textArea,
            });
            Diverse.create(newDiverse)
                .then((createdDiverse) => {
                    console.log("The diverse event was added to the database", createdDiverse);
                })
                .catch((error) => {
                    console.error("Error loading event diverse:", error);
                });
            break;

        default:
            console.log(`This collection was not found:${req.body.select}.`);
    }

});


module.exports = router    