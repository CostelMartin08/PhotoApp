const mongoose = require("mongoose");


const Nunti = new mongoose.Schema({
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
        collection: "Nunti",
    },);


module.exports = mongoose.model("Nunti", Nunti);