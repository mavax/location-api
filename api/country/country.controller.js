'use strict';

// var config = require('../../config/environment/' + process.env.NODE_ENV);

function CountryController() {}

CountryController.prototype.index = function (req, res) {
    var hosts = req.params.hosts.split(",");
    res.json(hosts);
};

module.exports = new CountryController();
