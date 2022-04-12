const { generateHashedPassword } = require('../utils/generator');

('use strict');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          username: 'user123',
          password: generateHashedPassword('user123456'),
          fullname: 'User',
          email: 'user123@gmail.com',
          phone: '0961457896',
        },
        {
          id: 2,
          username: 'admin456',
          password: generateHashedPassword('admin123456'),
          fullname: 'Admin',
          email: 'admin456@gmail.com',
          phone: '0984567892',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
