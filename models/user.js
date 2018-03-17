const Sequelize = require('sequelize');

const User = (connection, dataTypes) => {
  //Make Table.
  let user = connection.define('user', {
    userId:{
      type:dataTypes.STRING,
      allowNull:false,
      primaryKey:true
    },
    gender:{
      type:dataTypes.ENUM,
      values:['male','female']
    },
    first_name:{
      type:dataTypes.STRING,
      required:true
    },
    last_name:{
      type:dataTypes.STRING,
      required:true
    },
    Date_of_birth:{
      type:dataTypes.STRING,
      required:true,
      allowNull:false
    },
  },{
    underscore:true
  });

  user.associate = function(models) {
    user.hasMany(models.blog, {
      foreignKey: 'userId'
    });
    user.hasOne(models.login, {
      foreignKey: 'userId'
    });
  }

  return user;
}

module.exports = User;