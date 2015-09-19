'use strict';

var countryCollection = require('../../lib/country');

function CountryController() {}

CountryController.prototype.index = function (req, res) {
    var hosts = req.params.hosts.split(",");
    res.json(hosts.map(countryCollection.fetch));
};

module.exports = new CountryController();
