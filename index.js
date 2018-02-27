var express = require('express');
var app = express();
var config = require('./config/config');

//Import routes
var Route = require('./router/router');

//Initialize Routes
new Route(app);

app.get('/', function (req, res){
    res.send("hello world");
})

app.listen(config.port, config.hostname, function(){
    console.log("runing on : ", config.hostname + ":" + config.port);
});