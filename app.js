
const path=require("path");
const express=require("express");
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');
var cors=require("cors")
const app=express();
app.use(cors());
const sequelize = require('./util/database');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(indexRoutes)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});
sequelize.sync().then(result => {

    app.listen(3000);

}).catch(err => {
    console.log(err)
})
