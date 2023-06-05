'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Questions', 'edited', {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      default: false
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Questions', 'edited');
  }
};