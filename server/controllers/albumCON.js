const express = require('express');
const application = express();
application.use(express.json);
const db = require('../db/dbconnection')

module.exports.aldetail = async (req, res) => {
    try{
        const result = db.query(`Select * from Album where alname = '${req.body.target};`,(err,results)=>{
            if(err) throw err;
            console.log(results);
        });
        res.send(result.results);

    }
    catch(err){
        console.log(err);
    }
}
