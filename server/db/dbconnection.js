const mysql = require('mysql');
const Sequelize = require('sequelize');
const connection=mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password:'HADOzindabad21',
    database:'hado',
    port:'3306'
});
const sequelize = new Sequelize('hado','root','HADOzindabad21',{
    dialect: 'mysql'
})
module.exports =connection;
module.exports = sequelize;