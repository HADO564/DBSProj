const sequelize= require('sequelize');
const sequelize = require('../db/dbconnection');
const ArtistModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const Artist = sequelize.define('Artist', {
        ArtId: {type: INTEGER, primaryKey: true, autoIncrement: true},
        Artname: {type: STRING, allowNull: false},
        Followers: {type:INTEGER,allowNull:true},
        Country:{type:STRING,allowNull:false}
    })
    return Artist
}
module.exports=ArtistModel;