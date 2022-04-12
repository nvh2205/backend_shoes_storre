const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../utils/generator');
const { User, Token } = require('../models/index');

/**
 * Create link to send Mail
 *
 * @param {email,verification}

*/

exports.sendMail = async (email, verification) => {
  try {
    const mail = nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: process.env.USERMAIL,
      to: email,
      subject: 'Reset Password Link',
      html: `<p>Mã xác minh:<b> ${verification}</b></p>`,
    };

    await mail.sendMail(mailOptions);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Create token when veryfi mail
 *
 * @param {object} user

*/

exports.forgotToken = async (email) => {
  const candidateUser = await User.findOne({
    where: {
      email,
    },
  });

  if (!candidateUser) {
    return false;
  }

  const verification = Math.floor(Math.random() * (999999 - 100000) + 100000);

  const tokenParams = generateAccessToken({
    id: candidateUser.id,
    verification,
    createdAt: new Date(),
  });

  const token = {
    token: tokenParams,
    userId: candidateUser.id,
    verified: false,
  };

  const saveToken = new Token(token);

  await saveToken.save();

  return { verification, ...token };
};

exports.verificationCode = (verification, token) => {
  let checkCode = 0;
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return false;
    }

    checkCode = Number(user.verification);
  });

  if (Number(verification) !== checkCode) {
    return false;
  }
  return true;
};

exports.checkExistVerification = async (verification, token) => {
  const checkVerification = await Token.findOne({
    where: {
      token,
      verified: false,
    },
    raw: false,
  });

  if (!checkVerification) {
    return false;
  }

  checkVerification.verified = true;
  await checkVerification.save();
  return checkVerification;
};

exports.changePassword = async (token, newPassword) => {
  const checkToken = await Token.findOne({
    where: {
      token,
      verified: true,
    },
  });

  if (!checkToken) {
    return false;
  }

  await Token.destroy({
    where: {
      id: checkToken.id,
    },
  });

  const password = { password: bcrypt.hashSync(newPassword, 10) };

  await User.update(password, {
    where: { id: checkToken.userId },
  });

  return true;
};
