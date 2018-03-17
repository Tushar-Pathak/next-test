const blog = (connection, dataTypes) => {

  //Make Table.
  let Blog = connection.define('blog', {
    userId:{
      type:dataTypes.STRING,
      allowNull:false
    },
    title:{
      type:dataTypes.STRING,
      allowNull:false,
      required:true
    },
    body:{
      type:dataTypes.TEXT,
      allowNull:false,
      required:true
    },
    views:{
      type:dataTypes.BIGINT,
      allowNull:false
    },
    likes:{
      type:dataTypes.BIGINT,
      allowNull:false
    }
  });

  Blog.associate = function(models) {
    Blog.belongsTo(models.user, {
      foreignKey: 'userId'
    });
  }

  return Blog;
}

module.exports = blog;