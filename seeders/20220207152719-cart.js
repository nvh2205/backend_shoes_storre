module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Carts',
      [
        {
          id: 1,
          UserId: 1,
          ProductSizeId: 4,
          quantity: 1,
        },
        {
          id: 2,
          UserId: 1,
          ProductSizeId: 10,
          quantity: 2,
        },
        {
          id: 3,
          UserId: 1,
          ProductSizeId: 9,
          quantity: 1,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
