const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const filename = Date.now()
    cb(null,filename.toString());
  }
});

const upload = multer({ storage: storage })

module.exports = upload;