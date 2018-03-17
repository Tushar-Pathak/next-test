const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

//Load database credentials.
const credentials = require('../../static/credentials');

const db = {
  //Get dataModels.
  blog: require('../../models/blog')(connection),
  user: require('../../models/user')(connection),
  login: require('../../models/login')(connection)
}

// Object.keys(db).forEach((datamodels)=>{
//  if ('associate' in db[datamodels]) {
//    db[datamodels].associate(db);
//  }
// });

//Make Connections.
const connection = new Sequelize(credentials.database_name, credentials.database_user, credentials.database_password, {
  dialect: 'postgres'
});

//Handle /search request.
router.get('/search', (req, res) => {
  res.send('Are you getting me??');
});

module.exports = router;
