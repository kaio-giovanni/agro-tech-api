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
          console.log("Field created: " + field + "\n options: " + options);
        }
      },
      sequelize: connection,
      modelName: 'Field',
      tableName: 'Field'
    });
  }

  static associate(models) {
    this.belongsTo(models.Farm);
  }
}

module.exports = Field;
