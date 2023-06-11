const mongoose = require("mongoose");


const Diverse = new mongoose.Schema({
    content: {
        type: Array,
        required: true,
    },
    title: String,
    description: String,
    uploadedAt: {
        type: Date,
        default: Date.now(),
    },

},
    {
        collection: "Diverse",
    },);


module.exports = mongoose.model("Diverse", Diverse);