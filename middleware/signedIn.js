const jwt = require('jsonwebtoken');
const { ERROR_MESSAGES } = require('../utils/constants');

/**
 * Middleware for allow logged user
 */
const signedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
    }

    req.user = user;
    next();
  });
};

module.exports = signedIn;
