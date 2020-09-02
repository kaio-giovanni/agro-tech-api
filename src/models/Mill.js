'use strict';
const { Model, DataTypes } = require('sequelize');

class Mill extends Model {  
  static init(connection){
    super.init({
      name: DataTypes.STRING
    },
    {
      hooks: {
        afterCreate: (mill, options) => {
          console.log("Mill created: " + JSON.stringify(mill));
        }
      },
      sequelize: connection,
      modelName: 'Mill',
      tableName: 'Mill'
    });
  }

  static associate(models) {
    this.hasMany(models.Harvest, { foreignKey: 'mill_id', as: "harvest" });
  }
}

module.exports = Mill;