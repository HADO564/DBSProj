const Playlist = require('../models/playlist');
const express = require('express');
const application = express();
application.use(express.json);

module.exports.pdetails = async (req, res) => {
    try {
        const {
            query
        } = req.body;
        connection.query(query, (err, results) => {
            if (err)
                throw err;
            res.json(results);
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports.AddSong = async (req, res) => {
    try {
        const {
            query
        }=req.body;
        const{
            sid
        }=req.params;
        connection.query(query,(err,results)=>{
            if(err)
            throw err;
            console.log("Settings updated");
            res.sendStatus(200);
        })

    } catch (err) {

    }
}

module.exports.RemoveSong = async (req, res) => {
    try {
        const {
            query
        }=req.body;
        const{
            sid
        }=req.params;
        connection.query(query,(err,results)=>{
            if(err)
            throw err;
            console.log("Settings updated");
            res.sendStatus(200);
        })

    } catch (err) {

    }
}