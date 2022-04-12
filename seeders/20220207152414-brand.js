module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Brands',
      [
        {
          id: 1,
          name: 'Nike',
          imgURL: '/apidocs/img/nike_logo.png',
        },
        {
          id: 2,
          name: 'Adidas',
          imgURL: '/apidocs/img/adidas_logo.png',
        },
        {
          id: 3,
          name: 'Puma',
          imgURL: '/apidocs/img/puma_logo.png',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Brands', null, {});
  },
};
