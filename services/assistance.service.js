const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class AssistancesService{
  constructor(){
    this.assistance = [];
    this.generate();
  }

  async generate(){
    const limit = 100;
    for(let index=0; index<limit; index++){
      this.assistance.push({
        id: faker.string.uuid(),
        employeeName: faker.person.fullName(),
        fecha: faker.date.past(),
        isBlock: faker.datatype.boolean()
      })
    }
  }
  async create(){

  }

  async find(){
    return new Promise((resolve, reject)=>{
      resolve(this.assistance)
    });
  }

  async findOne(idEmployee){
    const assistance = this.assistance.find(item => item.id === idEmployee);
    if(!assistance){
      throw boom.notFound('Product not found');
    }
    if(assistance.isBlock){
      throw boom.conflict('Product is block');
    }
    return assistance;
  }

  async update(){

  }

  async delete(){

  }
}

module.exports = AssistancesService;
