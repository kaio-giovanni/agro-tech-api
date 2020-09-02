'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Farm', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      harvest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Harvest',
          key: 'id'
        },
        onUpdate: 'CASCADE', /* Caso a referencia ao usuario se altere, a tabela se atualizara automaticamente para o novo id */
        onDelete: 'CASCADE',/* Caso a referencia ao usuario se perca a tabela se deletará automaticamente */
      },
      cod: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Farm');
  }
};