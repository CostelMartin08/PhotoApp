const express = require("express");
const router = express.Router();
const Nunti = require("../schema/photo1Schema");
const Botezuri = require("../schema/photo2Schema");
const Diverse = require("../schema/photo3Schema");


const checkAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send("This action requires login!");
};

router.delete('/:category/:id', checkAuthenticated, (req, res) => {

  const param = req.params.category;
  const id = req.params.id;



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


  const query = { _id: id };

  collection.deleteOne(query)
    .then((result) => {
      if (result.deletedCount > 0) {
        res.send({ message: 'The collection has been successfully deleted!' });
      } else {
        res.status(404).send({ error: 'The collection was not found' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: 'Error deleting the collection' });
    });
});

module.exports = router;
