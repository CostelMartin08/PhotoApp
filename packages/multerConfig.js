const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, files, cb) {

        switch (files.fieldname) {
            case 'nunti':
                cb(null, "client/public/uploads/Nunti");
                break;
            case 'botezuri':
                cb(null, "client/public/uploads/Botezuri");
                break;
            case 'diverse':
                cb(null, "client/public/uploads/Diverse");
                break;
            default:
                cb(null, "client/public/uploads");
        }
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
module.exports = upload;
