const express = require('express');
const application = express();
const db = require('../db/dbconnection')
application.use(express.json);

module.exports.pdetails = async (req, res) => {
    try {
        const result = db.query(`Select * from Playlist where pname = '${req.body.target};`, (err, results) => {
            if (err) throw err;
            console.log(results);
        });
        res.send(result.results);
    }
    catch(err){
        console.log(err)
    }
}

