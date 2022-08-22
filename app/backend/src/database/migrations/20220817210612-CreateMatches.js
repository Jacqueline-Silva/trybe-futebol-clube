'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: { 
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      homeTeam: {
        allowNull: false, 
        field: 'home_team',
        references: {
          model: 'teams',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },

      homeTeamGoals: {
        allowNull: false, 
        field: 'home_team_goals',
        type: Sequelize.INTEGER,
      },

      awayTeam: {
        allowNull: false, 
        field: 'away_team',
        references: {
          model: 'teams',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },

      awayTeamGoals: {
        allowNull: false, 
        field: 'away_team_goals',
        type: Sequelize.INTEGER,
      },

      inProgress: {
        allowNull: false, 
        field: 'in_progress',
        type: Sequelize.BOOLEAN,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('matches');
  }
};