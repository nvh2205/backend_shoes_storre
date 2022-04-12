const { body, validationResult } = require('express-validator');
const { User } = require('../models/index');

/**
 * Validate login request
 */
exports.login = [
  body('username')
    .trim()
    .isLength({ min: 5, max: 45 })
    .withMessage('Username is invalid'),

  body('password')
    .isLength({ min: 6, max: 12 })
    .withMessage('Password is invalid'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.error({ errors: errors.errors }, 400);
    }

    next();
  },
];

/**
 * Validate register request
 */
exports.register = [
  body('fullname')
    .trim()
    .custom((value) =>{
      const fullnameRegex = /^[^\r\n]{1,60}$/g;
      if(!fullnameRegex.test(value)){
        throw new Error("Fullname is invalid");
      }
      return true;
    }),

  body('username')
    .trim()
    .custom(async (value) => {
      const usernameRegex = /^(\w|\.){5,30}$/g;
      if (!usernameRegex.test(value)) {
        throw new Error(
          `Username only contains 5-30 characters including: letters(a-z, A-Z), numbers(0-9), (.) and (_)`,
        );
      }

      const user = await User.findOne({
        where: {
          username: value,
        },
      });

      if (user) {
        throw new Error('Username has been already in use');
      }
      return true;
    }),

  body('password').custom((value) => {
    const passwordReg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/g;
    if (!passwordReg.test(value)) {
      throw new Error(
        `Password contains 6-12 characters including : at least 1 UPPERCASE (A-Z), 1 lowercase (a-z), 1 number (0-9), 1 special character(!@#$%^&*)`,
      );
    }
    return true;
  }),

  // checking if e-mail is in use
  body('email')
    .trim()
    .custom(async (value) => {
      const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,34}@gmail\.com$/g;
      if (!emailRegex.test(value)) {
        throw new Error(
          'Email must be valid, contains 17-45 characters, @gmail.com only',
        );
      }

      const user = await User.findOne({
        where: {
          email: value,
        },
      });
      if (user) {
        throw new Error('Email has been already in use');
      }
      return true;
    }),

  body('phone')
    .trim()
    .custom(async (value) => {
      const phoneRegex = /^0(3|5|7|8|9)[0-9]{8}$/g;

      if (!phoneRegex.test(value)) {
        throw new Error('Phone is invalid');
      }

      const user = await User.findOne({
        where: {
          phone: value,
        },
      });

      if (user) {
        throw new Error('Phone has been already in use');
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

exports.postForgotPassword = [
  body('email')
    .trim()
    .custom(async (value) => {
      const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,34}@gmail\.com$/g;
      if (!emailRegex.test(value)) {
        throw new Error(
          'Email must be contains 17-45 characters, @gmail.com only',
        );
      }
      return true;
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

exports.postResetPassword = [
  body('password')
  .custom((value) => {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*\`,~.:;'"()])[a-zA-Z0-9!@#$%^&*\`,~.:;'"()]{6,12}$/.test(
      value,
    );
  }),  (req, res, next) => {
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

exports.postVerification = [
  body('verification').notEmpty().isInt({ min: 100000, max: 999999 }),
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
