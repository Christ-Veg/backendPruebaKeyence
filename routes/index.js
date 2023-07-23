const assistanceRouter = require('./assistance.router');

function routerApi(app){
  app.use('/assistance', assistanceRouter);
}
module.exports = routerApi;
