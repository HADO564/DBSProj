const account = require('../models/account');
const express = require('express');
const application = express();
application.use(express.json);
module.exports.findUsers = async (req, res) => {
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
module.exports.accDetails=async(req,res)=>{
    try {
        const {
            query
        }=req.body;
        //const {id}=req.params;
        
        connection.query(query,(err,results)=>{
            if(err)
            throw err;
            res.send(results);
        })

    } catch (err) {
    }
}

module.exports.SettingsUpdate = async (req, res) => {
    try {
        const {
            query
        }=req.body;
        const {id}=req.params;
        
        connection.query(query,(err,results)=>{
            if(err)
            throw err;
            console.log("Settings updated");
            res.sendStatus(200);
        })

    } catch (err) {
    }
}