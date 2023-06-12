const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin-costel:oXqtQIJUgVxkBguO@atlascluster.49fubwp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectat la baza de date MongoDB');
    })
    .catch(error => {
        console.error('Eroare la conectarea la baza de date MongoDB:', error);
    });

module.exports = mongoose;