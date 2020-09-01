'use strict';
const { Model, DataTypes } = require('sequelize');

class Fazenda extends Model {
  static init(connection){
    super.init({
      cod: DataTypes.STRING,
      name: DataTypes.STRING
    },
    {
      hooks: {
        afterCreate: (fazenda, options) => {
          console.log("Fazenda created: " + fazenda + "\n options: " + options);
        }
      },
      sequelize: connection,
      modelName: 'Fazenda',
    });
  }  

  static associate(models) {
    // define association here
  }
}

module.exports = Fazenda;
