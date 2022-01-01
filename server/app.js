const express = require('express');
const morgan = require('morgan');
const sequelize= require('sequelize');
const app = express();
const playlistRouter = require('./routes/playlistrouter');
const artistRouter = require('./routes/artistrouter');
const songRouter = require('./routes/songrouter');
const accountRouter = require('./routes/accountrouter');
const albumRouter = require('./routes/albumrouter');
app.use(express.json());
// app.use(express.json);


module.exports=  app; 