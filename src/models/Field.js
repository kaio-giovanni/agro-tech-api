'use strict';
const { Model, DataTypes } = require('sequelize');

class Field extends Model {
  static init(connection){
    super.init({
      cod: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING
    },
    {
      hooks: {
        afterCreate: (field, options) => {
          console.log("Field created: " + JSON.stringify(field));
        }
      },
      sequelize: connection,
      modelName: 'Field',
      tableName: 'Field'
    });
  }

  static associate(models) {}
}

module.exports = Field;
