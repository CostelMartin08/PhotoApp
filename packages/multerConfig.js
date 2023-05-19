const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        switch (file.fieldname) {
            case 'file':
                cb(null, "client/public/uploads");
                break;
            case 'fileProfileImG':
                cb(null, "client/public/uploads/UserProfilePhoto");
                break;
            default:
                cb(null, "client/public/uploads");
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
module.exports = upload;
