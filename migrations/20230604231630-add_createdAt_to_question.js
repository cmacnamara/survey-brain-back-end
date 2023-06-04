'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Questions', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Questions', 'createdAt');
  }
};