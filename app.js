
const path=require("path");
const express=require("express");
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');

const app=express();

const sequelize = require('./util/database');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(indexRoutes)
sequelize.sync().then(result => {

    app.listen(3000);

}).catch(err => {
    console.log(err)
})
