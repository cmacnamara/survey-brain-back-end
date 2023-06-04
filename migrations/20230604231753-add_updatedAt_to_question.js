'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Questions', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Questions', 'updatedAt');
  }
};