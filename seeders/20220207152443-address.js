module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Addresses',
      [
        {
          id: 1,
          UserId: 1,
          WardID: 655,
          ProvinceID: 1,
          DistrictID: 20,
          addressDetail: '17 Phan Trọng Tuệ',
          phone: '0961457896',
        },
        {
          id: 2,
          UserId: 2,
          WardID: 658,
          ProvinceID: 1,
          DistrictID: 20,
          addressDetail: '17 Ngọc Hồi',
          phone: '0984567892',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Addresses', null, {});
  },
};
