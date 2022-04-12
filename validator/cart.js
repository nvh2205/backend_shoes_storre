const { body, validationResult } = require('express-validator');

exports.postQuantityCart = [
  body('quantity').isInt({ min: 1 }),
  body('productSizeId').isInt({ min: 1 }),
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

exports.postUpdateCartItem=[
  body('quantity').isInt({ min: 1 }),
  body('size').isInt({ min: 1 }),
  body('productId').isInt({ min: 1 }),
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
]