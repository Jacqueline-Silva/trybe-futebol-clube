'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: { 
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      username: {
        allowNull: false, 
        type: Sequelize.STRING,
      },

      role: {
        allowNull: false, 
        type: Sequelize.STRING,
      },

      email: {
        allowNull: false, 
        type: Sequelize.STRING,
      },
      
      password: {
        allowNull: false, 
        type: Sequelize.STRING,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};