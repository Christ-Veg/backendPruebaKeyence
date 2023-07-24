const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const reader = require('xlsx');
const { models } = require('../libs/sequelize');

class AssistancesService{
  constructor(){ }

  async create(data){
    const newAssistance = await models.Assistance.create(data);
    return newAssistance;
  }

  async find(){
    const rta = await models.Assistance.findAll();
    return rta;
  }

  async findOne(idEmployee){
    const employee = await models.Assistance.findAll({
      where:{
        employeeid:idEmployee
      },
    });
    return employee;
  }

  async update(idEmployee,date,body){
    const employee = await models.Assistance.findOne({
      where:{
        employeeid:idEmployee,
        fecha:date,
      },
    });
    employee.salida= body.salida;
    await employee.save();
    return employee;
  }

  import(data){
    const file = reader.readFile(data);
    const name = file.SheetNames;
    return name;
  }

  async delete(){

  }
}

module.exports = AssistancesService;
