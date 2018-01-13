'use strict';
module.exports = (sequelize, DataTypes) => {
  var Food = sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  return Food;
};