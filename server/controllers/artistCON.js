const db = require('../db/dbconnection')
const express = require('express');
const application = express();
application.use(express.json);


module.exports.adetails = async (req, res) => {
    try {
        const result = db.query(`Select * from players where pname = '${req.body.target}';`,(err,results)=>{
            if(err) throw err;
            console.log(results);
        });
        res.send(result.results);
    }
    catch(err) {
        console.log(err)
    }
} 

//`Select * from Artist where aname = '${req.body.target};`