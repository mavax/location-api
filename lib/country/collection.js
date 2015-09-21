'use strict';

var DB = require('./db')
var Adapter = require('./adapter')

function CountriesCollection () {}

CountriesCollection.prototype.fetch = function(host) {
    var record = DB.lookup(host);
    if (!record) {
        return { host: host, error: "The address " + host + " is not in the database." };
    } else {
        return Adapter.toApi(host, record);
    }
};

module.exports = new CountriesCollection ();
