const sequelize= require('sequelize');
const Artist =require('./artist');
const sequelize = require('../db/dbconnection');
const AlbModel=(sequelize,Sequelize) =>{
    const {INTEGER,STRING,BOOLEAN,FLOAT,DATE}=Sequelize
    const Album = sequelize.define('Album',{
        AlbID:{type:INTEGER,primaryKey:true,autoincrement:true},
        SongNum:{type:INTEGER,allowNull:true},
        AlName:{type:STRING,allowNull:true},
        Genre:{type:STRING,allowNull:true},
        release:{type:INTEGER,allowNull:false}
    })
    return Album;
}
Album.belongsTo(Artist);

module.exports = AlbModel;