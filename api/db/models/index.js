const { Assistance, AssistanceSchema } = require('./assistances.model');

function setupModels(sequelize){
  Assistance.init(AssistanceSchema,Assistance.config(sequelize));
}

module.exports = setupModels;
