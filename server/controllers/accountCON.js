
const express = require('express');
const application = express();
const db = require('../db/dbconnection')
application.use(express.json);
module.exports.findUsers = async (req, res) => {
    console.log("received a request")
    try {
        const result = db.query(`Select * from Account where accname = '${req.body.target};`,(err,results)=>{
            if(err) throw err;
            console.log(results);
        });
        res.send(result.results);
    }
    catch(err){
        console.log(err);
    }
}
module.exports.SettingsUpdate = async (req, res) => {
    console.log("received a request")
    try {
        const result = db.query(`Update Account where id = '${req.params};`,(err,results)=>{
            if(err) throw err;
            console.log(results);
        });
        res.send(result.results);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.accDetails = async (req, res) => {
    console.log("received a request")
    try {
        const result = db.query(`Select * from Account where id = '${req.params};`,(err,results)=>{
            if(err) throw err;
            console.log(results);
        });
        res.send(result.results);
    }
    catch(err){
        console.log(err);
    }
}