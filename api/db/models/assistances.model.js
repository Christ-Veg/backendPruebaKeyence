const {Model, DataTypes, Sequelize} = require ('sequelize');

const ASSISTANCE_TABLE = 'assistances';

const AssistanceSchema = {
  employeeid:{
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  employeename:{
    allowNull: true,
    type: DataTypes.STRING
  },
  fecha:{
    allowNull: false,
    primaryKey: true,
    type: DataTypes.DATE
  },
  entrada:{
    allowNull: true,
    type: DataTypes.TIME
  },
  salida:{
    allowNull: true,
    type: DataTypes.TIME
  }
}

class Assistance extends Model{
  static associate(){
    //associate
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: ASSISTANCE_TABLE,
      modelName: 'Assistance',
      timestamps: false
    }
  }
}

module.exports = { ASSISTANCE_TABLE, AssistanceSchema, Assistance}
