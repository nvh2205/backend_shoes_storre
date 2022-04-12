module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Brands',
      [
        {
          id: 1,
          name: 'Nike',
          imgURL: '/apidocs/img/nike_icon_red.png',
        },
        {
          id: 2,
          name: 'Adidas',
          imgURL: '/apidocs/img/adidas_icon_red.png',
        },
        {
          id: 3,
          name: 'Puma',
          imgURL: '/apidocs/img/puma_icon_red.png',
        },
        {
          id: 4,
          name: 'Converse',
          imgURL: '/apidocs/img/converse_icon_red.png',
        },
        {
          id: 5,
          name: 'Vans',
          imgURL: '/apidocs/img/vans_icon_red.png',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Brands', null, {});
  },
};
