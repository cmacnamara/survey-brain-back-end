'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      // define association here
      Question.belongsTo(models.Survey, { foreignKey: 'surveyId' })

      Question.hasMany(models.Response, {
        as: 'responsesReceived',
        foreignKey: 'questionId',
      })
    }
  }
  Question.init({
    prompt: DataTypes.STRING,
    type: DataTypes.STRING,
    surveyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Surveys',
        key: 'id',
      },
    },
    answerChoices: DataTypes.ARRAY(DataTypes.STRING),
    required: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};