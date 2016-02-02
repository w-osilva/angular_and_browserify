'use strict';
var app = require('angular').module('MyApp');

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'homeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});