const { body, validationResult } = require('express-validator');
const { User } = require('../models/index');

exports.postUpdateInfoUser = [
  body('fullname')
  .trim()
  .custom((value) =>{
    const fullnameRegex = /^[^\r\n]{1,60}$/g;
    if(!fullnameRegex.test(value)){
      throw new Error("Fullname is invalid");
    }
    return true;
  }),

  
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.error({ errors: errors.errors }, 400);
    }

    next();
  },
];