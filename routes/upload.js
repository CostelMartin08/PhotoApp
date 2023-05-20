const express = require("express");
const router = express.Router();
const passport = require('passport');
const Photo = require("../schema/photoSchema");
const upload = require("../packages/multerConfig");

const checkAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.send("Nu este autentificat!");
};


//Ruta care necesita conectare pentru a putea adauga continut
router.post("/", checkAuthenticated, upload.single("file"), (req, res) => {
    //De facut: Crearea posibilitatii de a urca mult mai multe fotografii in fisiere separate in db gen upload.file("altceva");
    const value = req.file.filename;
    const update = new Photo({ title: value });
    update.save()
        .then((update) => {
            console.log("Fotografii urcate in baza de date");

        })
        .catch((err) => {
            console.error("Eroare la incarcarea pozei")
        })
})




//Ruta pentru a trimite date catre toti utilizatorii
router.get("/", (req, res) => {


    Photo.find({})
        .then((fotografii) => {
            if (fotografii) {
                res.send(
                    fotografii,
                );
            } else {
                res.status(404).send({ error: 'Nu s-au găsit fotografii' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ error: 'Eroare la găsirea fotografiilor' });
        });
});


module.exports = router    