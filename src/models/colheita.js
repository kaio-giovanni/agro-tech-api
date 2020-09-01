'use strict';
const { Model, DataTypes } = require('sequelize');

class Colheita extends Model {
  static init(connection){
    super.init({
      cod: DataTypes.STRING,
      dt_inicio: DataTypes.DATEONLY,
      dt_termino: DataTypes.DATEONLY
    },
    {
      hooks: {
        afterCreate: (colheita, options) => {
          console.log("Colheita created: " + colheita + "\n options: " + options);
        }
      },
      sequelize: connection,
      modelName: 'Colheita',
    });
  }

  static associate(models) {
    // define association here
  }
}

module.exports = Colheita;