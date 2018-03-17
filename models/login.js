const Sequelize = require('sequelize');

export default (connection) => {
  //Make Table.
  let login = connection.define('blog', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
  });

  login.associate = function(models) {
    login.hasMany(models.user, {
      foreignKey: 'blogid'
    });
  }

  return login;
}