/**
 * https://www.getpostman.com/collections/b5dc739e617c1c3e50a4
 */

var express = require('express'),
    expressValidator = require('express-validator'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    creator = require('express-restful-api'),
    app = express(),
    fs = require('fs'),
    routerJSON = fs.readFileSync('./router.json');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator([]));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', creator({
    redis: process.env.REDIS_URL,
    scheme: JSON.parse(routerJSON)
}));


module.exports = app;
