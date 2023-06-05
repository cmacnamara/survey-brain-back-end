'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    static associate(models) {
      // define association here
      Response.belongsTo(models.Question, { foreignKey: 'questionId'})
      
      Response.belongsTo(models.Profile, { foreignKey: 'profileId'})
    }
  }
  Response.init({
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Questions',
        key: 'id',
      },
    },
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Response',
  });
  return Response;
};