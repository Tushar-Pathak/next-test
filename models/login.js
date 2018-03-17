const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const login = (connection, dataTypes) => {
  //Make Table.
  let login = connection.define('login', {
    userId:{
      type:dataTypes.STRING,
      required:true,
      primaryKey:true
    },
    userName:{
      type:dataTypes.STRING,
      required:true,
      allowNull:false,
    },
    password:{
      type:dataTypes.STRING,
      required:true
    }
  },{
    hooks:{
      afterValidate: function(user){
        bcrypt.hash(user.password, 10, function(hashPassword){
          user.password = hashPassword;
        });
      }
    }
  });

  login.associate = function(models) {
    login.belongsTo(models.user, {
      foreignKey:'userId'
    });
  }

  return login;
}

module.exports = login;