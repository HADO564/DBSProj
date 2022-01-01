const express = require('express');
const application = express();
application.use(express.json);

const sequelize = require('../db/dbconnection');
const Sequelize = require('sequelize');
module.exports.aldetail = async (req, res) => {
    try{
        const {query}= req.body;
        connection.query(query,(err,results)=>{
            if(err)
            throw err;
            res.json(results);
        })

    }
    catch(err){
        console.log(err);
    }
}
