const { body, validationResult } = require('express-validator');

exports.postOrder=[
    body('address').not().isEmpty().isLength({ max: 80 }),
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