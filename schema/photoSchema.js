const mongoose = require("mongoose");


const photo = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    imagePath: {
        type: String,

    },
    uploadedAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Photo", photo);