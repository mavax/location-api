'use strict';

var citiesCollection = require('../../lib/city/collection')

function CityController() {}

CityController.prototype.index = function (req, res) {
    var hosts = req.params.hosts.split(",");
    res.json(hosts.map(citiesCollection.fetch));
};

module.exports = new CityController();
