const Sequelize = require('sequelize');
const sequelize = require('../db/dbconnection');
const AccModel = (sequelize, Sequelize) => {
    const {
        INTEGER,
        STRING,
        FLOAT,
        BOOLEAN,
        DATE
    } = Sequelize
    const Account = sequelize.define('Account', {
        username:{type:STRING,allowNull:false,primaryKey:true},
        password:{type:STRING,allowNull:false},
        email:{type:STRING,allowNull:false},
        CCInfo:{type:STRING,unique:true},
        Age:{type:INTEGER,allowNull:false},
        ACountry:{type:STRING}
    })
    return Account;
}

module.exports= AccModel; 