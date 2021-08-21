var Sequelize = require('Sequelize')

const database = new Sequelize(
 'dbsequelize',
 'root',
 '12345',{
     host: 'localhost',
     dialect: 'mysql'
 }
);

database.sync()
module.exports = database
