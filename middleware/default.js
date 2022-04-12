const StatusCodes = require('http-status-codes');
const constants = require('../utils/constants');

// Define macro function for api response
const responseMacro = (req, res, next) => {
  res.success = (data) => {
    res.status(StatusCodes.OK).json({
      data,
    });
  };

  res.error = (errors, status = StatusCodes.BAD_REQUEST) => {
    const resErrors = Array.isArray(errors) ? errors : [errors];

    res.status(status).json({
      errors: resErrors,
    });
  };

  next();
};

module.exports = [responseMacro];
