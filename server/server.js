const express = require('express');
const apiRouter = require('./routes/user');
const app = express();
app.use(express.json());

app.use('/api/chirps',apiRouter);
app.listen('8080', () => {
    console.log(`Listening to port 8080`);
})