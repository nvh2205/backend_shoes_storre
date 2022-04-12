const { query, validationResult } = require('express-validator');

exports.QueryGetProduct = [
  query('limit').notEmpty().isInt(),
  query('page').notEmpty().isInt(),
  query('brand').notEmpty().isInt(),
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
