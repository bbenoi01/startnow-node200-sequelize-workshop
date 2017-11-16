const express = require('express');
const sequelize = require('sequelize');
const jsonParser = require('body-parser').json;
const morgan = require('morgan');
const db = require('./db/models/index');

// db.sequelize.sync();

const app = express();

app.use(morgan('dev'));
app.use(jsonParser());

app.get('/', (req, res) => {
    res.status(200).send();
});

app.use("/api/authors", require("./routes/authors"));
app.use("/api/blogs", require("./routes/blogs"));

module.exports = app;