const Sequelize = require('sequelize');

//Load database credentials.
const credentials = require('../static/credentials');

//Make Connections.
const connection = new Sequelize(credentials.database_name, credentials.database_user, credentials.database_password, {
  dialect: 'postgres',
  host:'127.0.0.1',
  operatorsAliases: false
});

const db = {};

db.connection = connection;
db.Sequelize = Sequelize;
db.blog = require('./blog')(connection, Sequelize);
db.user = require('./user')(connection, Sequelize);
db.login = require('./login')(connection, Sequelize);

Object.keys(db).forEach((datamodels)=>{
 if ('associate' in db[datamodels]) {
   db[datamodels].associate(db);
 }
});

db.connection.sync();

module.exports = db;
