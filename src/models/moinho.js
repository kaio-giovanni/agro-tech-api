'use strict';
const { Model, DataTypes } = require('sequelize');

class Moinho extends Model {  
  static init(connection){
    super.init({
      name: DataTypes.STRING
    },
    {
      hooks: {
        afterCreate: (moinho, options) => {
          console.log("Moinho created: " + moinho + "\n options: " + options);
        }
      },
      sequelize: connection,
      modelName: 'Moinho', 
    });
  }

  static associate(models) {
    // define association here
  }
}

module.exports = Moinho;