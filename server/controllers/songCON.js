const sequelize = require("../db/dbconnection");
const Sequelize = require('sequelize')
const Song = require("../models/song");
const express = require('express');
const connection = require('../db/dbconnection')
const application = express();
application.use(express.json);

module.exports.sdetails = async (req, res) => {
    try {
        const {
            query
        } = req.body;
        connection.query('Select * from players', (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    }
    catch(err) {
        console.log(err)
    }
} 
module.exports.addToPlaylist = async (req, res) => {
    try {
        const {
            query
        } = req.body;
        const {
            id
        }=req.params;

        connection.query(query, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    }
    catch(err) {
        console.log(err)
    }
} 