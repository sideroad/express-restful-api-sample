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
app.use('/', creator.router({
    mongo: process.env.MONGO_URL,
    scheme: JSON.parse(routerJSON)
}));

creator.doc({
  "name": "RESTful API",
  "version": "1.0.0",
  "description": "apidoc example project",
  "title": "Custom apiDoc browser title",
  "url" : "http://express-restful-api-sample.herokuapp.com",
  "sampleUrl": "http://express-restful-api-sample.herokuapp.com",
  "template": {
    "withGenerator": true
  },
  "dest": __dirname + '/public/doc'
});


module.exports = app;
