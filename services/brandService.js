const { Brand } = require('../models/index');

exports.getBrand = () =>
  Brand.findAll({
    attributes: { exclude: ['ProductId'] },
  });
