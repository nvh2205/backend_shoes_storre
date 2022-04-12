const isProduction = process.env.NODE_ENV === 'production';
const { ERROR_MESSAGES } = require('../utils/constants');

// Server error handler
const handleError = (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = !isProduction
    ? err.message
    : ERROR_MESSAGES.INTERNAL_SERVER;

  res.error({ msg: res.locals.error }, 500);
};

module.exports = [handleError];
