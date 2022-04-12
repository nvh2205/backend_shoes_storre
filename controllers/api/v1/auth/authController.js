const userService = require('../../../../services/userService');
const { ERROR_MESSAGES } = require('../../../../utils/constants');
const authService = require('../../../../services/authService');

/**
 * Controller for login
 */
exports.login = async (req, res, next) => {
  try {
    const user = await userService.checkUserCredentials({
      username: req.body.username,
      password: req.body.password,
    });

    if (!user) {
      return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
    }

    const userResponse = userService.generateAuthResponse(user);

    res.status(200).json({ data: userResponse });
  } catch (error) {
    res.error({ msg: ERROR_MESSAGES.INTERNAL_SERVER }, 500);
  }
};

/**
 * Controller for register user
 */
exports.register = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await userService.createNewUser(data);

    if (!user) {
      return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
    }

    const userResponse = userService.generateAuthResponse(user);

    res.status(200).json({ data: userResponse });
  } catch (error) {
    res.error({ msg: ERROR_MESSAGES.INTERNAL_SERVER }, 500);
  }
};
/**
 * Controller for forgot password
 */

exports.forgotPassword = async (req, res, next) => {
  try {
    const mail = req.body.email;

    const { verification, token } = await authService.forgotToken(mail);

    if (!token) {
      return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
    }

    const checkSend = await authService.sendMail(mail, verification);

    if (!checkSend) {
      return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
    }

    res.success({ token });
  } catch (error) {
    res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
  }
};

exports.verificationForgotPassword = async (req, res, next) => {
  try {
    const { token } = req.body;
    const { verification } = req.body;

    const checkCode = authService.verificationCode(verification, token);
    if (!checkCode) {
      return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
    }

    const checkVerification = await authService.checkExistVerification(
      verification,
      token,
    );

    if (!checkVerification) {
      return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
    }

    res.success({ success: true });
  } catch (error) {
    return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { verification } = req.params;
    const { token } = req.body;
    const newPassword = req.body.password;

    const checkCode = authService.verificationCode(verification, token);
    if (!checkCode) {
      return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
    }

    const checkChangePassword = await authService.changePassword(
      token,
      newPassword,
    );

    if (!checkChangePassword) {
      return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
    }

    res.success({ success: true });
  } catch (error) {
    return res.error({ msg: ERROR_MESSAGES.UNAUTHORIZED }, 401);
  }
};
