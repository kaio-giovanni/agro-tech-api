'use strict';
const { Model, DataTypes } = require('sequelize');

class Campo extends Model {
  static init(connection){
    super.init({
      cod: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING
    },
    {
      hooks: {
        afterCreate: (campo, options) => {
          console.log("Campo created: " + campo + "\n options: " + options);
        }
      },
      sequelize: connection,
      modelName: 'Campo',
    });
  }

  static associate(models) {
    // define association here
  }
}

module.exports = Campo;
