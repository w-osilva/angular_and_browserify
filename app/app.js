'use strict';
require('es5-shim');
require('es5-sham');
require('jquery');

var angular = require('angular');
require('angular-route');
var app = angular.module('MyApp',['ngRoute']);

require('./config/routes');
require('./controllers/homeCtrl');
