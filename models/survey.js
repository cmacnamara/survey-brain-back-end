'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    static associate(models) {
      // define association here
      Survey.belongsTo(models.Profile, { foreignKey: 'profileId' })

      Survey.hasMany(models.Question, {
        as: 'questions',
        foreignKey: 'surveyId'
      })
    }
  }
  Survey.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'Survey',
  });
  return Survey;
};