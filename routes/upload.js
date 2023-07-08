const express = require("express");
const router = express.Router();
const upload = require('../packages/multerConfig');
const Nunti = require("../schema/photo1Schema");
const Botezuri = require("../schema/photo2Schema");
const Diverse = require("../schema/photo3Schema");
const Video = require("../schema/videoSchema");



const checkAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.send("This action requires login!");
};

router.get('/video', (req, res) => {

    Video.find({})
        .then(foundVideo => {
            if (foundVideo) {
                res.send(foundVideo);
                console.log(foundVideo)
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ error: 'Error finding video in the database.' });
        });


});

//Trimiterea datelor
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
            if (Array.isArray(req.files['nunti'])) {
                req.files['nunti'].forEach((element) => filtredData.push(element.originalname));
            } else if (req.files['nunti']) {
                filtredData.push(req.files['nunti'].originalname);
            }

            const newNunta = new Nunti({
                content: filtredData,
                title: req.body.text,
                description: req.body.textArea,
            });

            Nunti.create(newNunta)
                .then((createdNunta) => {
                    console.log("The wedding event has been added to the database:", createdNunta);
                    res.status(200).send("OK");
                })
                .catch((error) => {
                    console.error("Error loading event wedding:", error);
                    res.status(500).send("Ceva nu a mers bine");
                });
            break;

        case 'Botezuri':

            if (Array.isArray(req.files['botezuri'])) {
                req.files['botezuri'].forEach((element) => filtredData.push(element.originalname));
            } else if (req.files['botezuri']) {
                filtredData.push(req.files['botezuri'].originalname);
            }
            const newBotez = new Botezuri({
                content: filtredData,
                title: req.body.text,
                description: req.body.textArea,
            });
            Botezuri.create(newBotez)
                .then((createdBotez) => {
                    console.log("The baptism event was added to the database", createdBotez);
                    res.status(200).send("OK");
                })
                .catch((error) => {
                    console.error("Error loading event baptism:", error);
                    res.status(500).send("Ceva nu a mers bine");
                });
            break;

        case 'Diverse':

            if (Array.isArray(req.files['diverse'])) {
                req.files['diverse'].forEach((element) => filtredData.push(element.originalname));
            } else if (req.files['diverse']) {
                filtredData.push(req.files['diverse'].originalname);
            }

            const newDiverse = new Diverse({
                content: filtredData,
                title: req.body.text,
                description: req.body.textArea,
            });
            Diverse.create(newDiverse)
                .then((createdDiverse) => {
                    console.log("The diverse event was added to the database", createdDiverse);
                    res.status(200).send("OK");
                })
                .catch((error) => {
                    console.error("Error loading event diverse:", error);
                    res.status(500).send("Ceva nu a mers bine");
                });
            break;

        default:
            console.log(`This collection was not found:${req.body.select}.`);
            res.status(400).send(`Hei, nu exista: ${req.body.select}.`);
    }

});

router.post('/video', upload.none(), checkAuthenticated, (req, res) => {

    const newVideo = new Video({
        url: req.body.inputVideo
    });
    Video.create(newVideo)
        .then((createdVideo) => {
            console.log("The video has been added to the database:", createdVideo);
            res.status(200).send("OK");
        })
        .catch((error) => {
            console.error("Error loading event video:", error);
            res.status(500).send("Ceva nu a mers bine");
        })


});


module.exports = router    
