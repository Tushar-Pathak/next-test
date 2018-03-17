const Sequelize = require('sequelize');

export default (connection) => {
  //Make Table.
  let user = connection.define('blog', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
  });

  user.associate = function(models) {
    user.hasMany(models.user, {
      foreignKey: 'blogid'
    });
  }

  return user;
}