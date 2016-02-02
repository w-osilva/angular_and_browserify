'use strict';
var app = require('angular').module('MyApp');

app.controller('homeCtrl', function($scope) {
    $scope.sayHello = function() {
        alert("Hello!!!")
    };
});


