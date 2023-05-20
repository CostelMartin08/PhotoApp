const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        switch (file.fieldname) {
            case 'file':
                cb(null, "client/public/uploads");
                break;
            case 'files':
                cb(null, "client/public/uploads/UserProfilePhoto");
                break;
            default:
                cb(null, "client/public/uploads");
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + file.originalname );
    },
});

const upload = multer({ storage: storage });
module.exports = upload;
