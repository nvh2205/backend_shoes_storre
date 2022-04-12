const moment = require('moment');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * Generate file name for logger
 * @returns {string} Return string for logger file name
 */
exports.logFileGenerator = () => `${moment().format('YYYY-MM-DD')}_access.log`;

/**
 * Generate jwt token
 * @param {object} data Data for wrapper token
 * @returns {string} Return jwt token string
 */
exports.generateAccessToken = (data) =>
  jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

/**
 * Generate hashed password
 * @param  {string} password
 * @returns {string} Return hashed password
 */
exports.generateHashedPassword = (password) => {
  const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND, 10), 'a');
  // eslint-disable-next-line no-param-reassign
  return bcrypt.hashSync(password, salt);
};
