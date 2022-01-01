const sequelize = require("../db/dbconnection");
const Artist = require("../models/artist");
const Sequelize = require('sequelize');
const connection = require('../db/dbconnection')
const express = require('express');
const application = express();
application.use(express.json);


module.exports.adetails = async (req, res) => {
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
module.exports.afollow = async (req, res) => {
    try {
        const {
            query
        } = req.body;
        const{
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
module.exports.unfollow = async (req, res) => {
    try {
        const {
            query
        } = req.body;
        const{
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