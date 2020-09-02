'use strict';
const { Model, DataTypes } = require('sequelize');

class Harvest extends Model {
  static init(connection){
    super.init({
      cod: DataTypes.STRING,
      dt_start: DataTypes.DATEONLY,
      dt_end: DataTypes.DATEONLY
    },
    {
      hooks: {
        afterCreate: (harvest, options) => {
          console.log("Harvest created: " + harvest + "\n options: " + options);
        }
      },
      sequelize: connection,
      modelName: 'Harvest',
      tableName: 'Harvest'
    });
  }

  static associate(models) {
    this.hasMany(models.Farm, { foreignKey: 'harvest_id', as: 'farm' })
  }
}

module.exports = Harvest;