const mongoose = require("mongoose");


const Botezuri = new mongoose.Schema({
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
        collection: "Botezuri",
    },);


module.exports = mongoose.model("Botezuri", Botezuri);