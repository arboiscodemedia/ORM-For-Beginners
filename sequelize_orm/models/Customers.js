var Sequelize = require('sequelize')

var sequelize = require('../database')

var Customers = sequelize.define('customers',{
   id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
   },
   name: Sequelize.STRING,
   email: Sequelize.STRING,
   address: Sequelize.STRING,
   phone: Sequelize.BIGINT

})


module.exports = Customers