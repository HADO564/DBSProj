const express = require('express');
const db = require('../db/dbconnection')
const application = express();
application.use(express.json);

module.exports.sdetails = async (req, res) => {
    try {
        const result = db.query(`Select * from Songs where sname = '${req.body.target};`, (err, results) => {
            if (err) throw err;
            console.log(results);
        });
        res.send(result.results);
    }
    catch(err){
        console.log(err)
    }
} 
module.exports.addToPlaylist = async (req, res) => {
    try {
        const result = db.query(`Select * from Songs where sname = '${req.body.target};`, (err, results) => {
            if (err) throw err;
            console.log(results);
        });
        res.send(result.results);
    }
    catch(err){
        console.log(err)
    }
} 