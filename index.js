'use strict'
//injections
var express = require('express');
var cookie = require('cookie-parser');
//routes
var routes = require('./routes/index');
var api = require('./Api/index');
var passport=require('passport');
//
//anything else
//
var http=require('http')
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

//
//view engine setup
//
app.set('port', process.env.PORT || 4000);
app.use(cookie());
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({ secret: '3c0B!k3', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
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


  

http.createServer(app).listen(app.get('port'), function(){
  console.log("testing  " + app.get('port'));
});

