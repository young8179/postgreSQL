var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var nodemon = require("nodemon")
var logger = require('morgan');
const es6Renderer = require("express-es6-template-engine")



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');






app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);




module.exports = app;




