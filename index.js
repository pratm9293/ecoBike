//injections
var express = require('express');
var cookie = require('cookie-parser');
//routers
var routes = require('./routes/index');
var api = require('./Api/index');
//
//anything else
//
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var app = express();
//
//view engine setup
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookie());
//
//not found 404
//
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//
app.use('/Api', api);
app.use('/', routes);
module.export = app;