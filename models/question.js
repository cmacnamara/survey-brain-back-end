'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsTo(models.Survey, { foreignKey: 'surveyId' })

      Question.hasMany(models.Response, {
        foreignKey: 'questionId',
        as: 'responses'
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