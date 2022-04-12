const multer = require('multer');
const path = require('path');
// cấu hình lưu trữ file khi upload xong
const storage = multer.diskStorage({
  destination(req, file, cb) {
    // files khi upload xong sẽ nằm trong thư mục "uploads" này - các bạn có thể tự định nghĩa thư mục này
    cb(null, 'upload/images');
  },
  filename(req, file, cb) {
    // tạo tên file = thời gian hiện tại nối với số ngẫu nhiên => tên file chắc chắn không bị trùng
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${filename}-${file.originalname}`);
  },
});

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
     cb(null, true);
  } else {
    return cb(new Error('Error: Images Only!'));
  }
}

// Khởi tạo middleware với cấu hình trên, lưu trên local của server khi dùng multer
const upload = multer({
  storage,
  limits: { fileSize: 10000000 },
  fileFilter: function (_req, file, cb) {
    checkFileType(file, cb);
  },
});
const uploadSingleImage = upload.single('file');

module.exports = uploadSingleImage;
