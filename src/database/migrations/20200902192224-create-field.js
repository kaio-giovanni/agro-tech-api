'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Field', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      farm_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Farm',
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
      latitude: {
        type: Sequelize.STRING,
        allowNull: false
      },
      longitude: {
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
    await queryInterface.dropTable('Field');
  }
};