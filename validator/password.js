const { body, validationResult } = require('express-validator');

exports.postChangePassword = [
  body('password')
    .custom((value) => {
      return /^(?=.*[0-9])(?=.*[!@#$%^&*\`,~.:;'"()])[a-zA-Z0-9!@#$%^&*\`,~.:;'"()]{6,12}$/.test(
        value,
      );
    }),
  body('newpassword')
    .custom((value) => {
      return /^(?=.*[0-9])(?=.*[!@#$%^&*\`,~.:;'"()])[a-zA-Z0-9!@#$%^&*\`,~.:;'"()]{6,12}$/.test(
        value,
      );
    }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.error(
        errors.errors.map(({ param, msg }) => ({ param, msg })),
        400,
      );
    }

    next();
  },
];
