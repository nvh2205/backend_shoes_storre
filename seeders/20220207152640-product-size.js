module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { Product } = require('../models/index');
    const productList = await Product.findAll({
      attributes: { exclude: ['ProductId'] },
    });
    const productSize = [];
    productList.forEach((product) => {
      for (let size = 36; size <= 43; size++) {
        productSize.push({
          ProductId: product.id,
          size: size,
          availableQuantity: Math.floor(Math.random() * 50),
        });
      }
    });
    await queryInterface.bulkInsert('ProductSizes', productSize, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductSizes', null, {});
  },
};
