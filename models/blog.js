const Sequelize = require('sequelize');

export default (connection) => {
  //Make Table.
  let Blog = connection.define('blog', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
  });

  Blog.associate = function(models) {
    Blog.hasMany(models.user, {
      foreignKey: 'blogid'
    });
  }

  return Blog;
}