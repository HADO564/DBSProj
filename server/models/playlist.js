const Sequelize = require('sequelize');
const sequelize = require('../db/dbconnection');
const Account = require('./account');
const PlayModel = (sequelize, Sequelize) => {
    const {
        INTEGER,
        STRING,
        FLOAT,
        BOOLEAN,
        DATE,
        DATEONLY
    } = Sequelize
    const Playlist = sequelize.define('Song', {
        PlayID: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Pname: {
            type: STRING,
            allowNull: false
        },
        Cdate: {
            type: DATE,
            allowNull: false
        },
        Pfollowers: {
            type: INTEGER
        },
        PSongs: {
            type: INTEGER
        },
        Privacy:{
            type:STRING
        }
    })
    Playlist.belongsTo(Account);
    return Playlist;
}


module.exports= PlayModel;