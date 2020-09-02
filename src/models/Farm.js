'use strict';
const { Model, DataTypes } = require('sequelize');

class Farm extends Model {
  static init(connection){
    super.init({
      cod: DataTypes.STRING,
      name: DataTypes.STRING
    },
    {
      hooks: {
        afterCreate: (farm, options) => {
          console.log("Farm created: " + farm + "\n options: " + options);
        }
      },
      sequelize: connection,
      modelName: 'Farm',
      tableName: 'Farm'
    });
  }  

  static associate(models) {
    this.hasMany(models.Field, { foreignKey: 'farm_id', as: 'field' });
  }
}

module.exports = Farm;
