const { body, validationResult } = require('express-validator');

exports.putUpdateAddress = [
  body('provinceId').not().isEmpty().isInt({ min: 1 }),
  body('districtId').not().isEmpty().isInt({ min: 1 }),
  body('wardId').not().isEmpty().isInt({ min: 1 }),
  body('addressDetail').not().isEmpty().isLength({ max: 45 }),
  body('phone').custom((value) => /(0[3|5|7|8|9])+([0-9]{8})\b/.test(value)),
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
