const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
const results = [];

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});

// console.log(results[0]['Sessions (Site Traffic)']);

app.use('/api/routes/', routes);
app.listen(5000);