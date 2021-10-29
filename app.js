const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

module.exports = app;
