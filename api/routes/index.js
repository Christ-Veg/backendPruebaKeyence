const assistanceRouter = require('./assistance.router');

function routerApi(app){
  app.use('/api/assistance', assistanceRouter);
}
module.exports = routerApi;
