const { Client } = require('pg');

async function getConnection(){
  try{
    const client =  new Client({
      host: 'localhost',
      port: 55365,
      user: 'chris',
      password: 'admin123',
      database: 'keyenceDB'
    });
    await client.connect();
    return client;
  }catch(error){
    console.log("Error de conexion"+ error);
  }

}

module.exports = getConnection;
