'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('games', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      price: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
      },

      platform: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      stores: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
     
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('games');
  }
};
