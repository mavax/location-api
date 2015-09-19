/**
 * Main application routes
 */

var express = require('express');

module.exports = function appRoutes(app) {

    app.use(express.static(__dirname + '/public'));

    app.use('/api/country', require('./api/country'));
    app.use('/api/city', require('./api/city'));

    app.use('/api', require('./api/swagger'));

};
