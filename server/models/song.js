const Sequelize = require('sequelize');

const sequelize = require('../db/dbconnection');
const Album = require('./album');
const SongModel = (sequelize,Sequelize)=>{
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const Song = sequelize.define('Song',{
        SongID:{type:INTEGER,allowNull:false,primaryKey:true,autoIncrement:true},
        trackL:{type:INTEGER,allowNull:false},
        views:{type:INTEGER},
        Sname:{type:STRING,allowNull:false},
        Genre:{type:STRING},
    })
    return Song;
}

Song.belongsTo(Album);
module.exports=SongModel;