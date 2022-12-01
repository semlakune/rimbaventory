'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactionCode: {
        type: Sequelize.STRING
      },
      transactionDate: {
        type: Sequelize.DATE
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Customers"
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      discTotal: {
        type: Sequelize.INTEGER
      },
      priceTotal: {
        type: Sequelize.INTEGER
      },
      totalPay: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};