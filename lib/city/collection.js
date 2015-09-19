'use strict';

var DB = require('./db')
var Adapter = require('./adapter')

function CitiesCollection () {}

CitiesCollection.prototype.fetch = function(host) {
    var record = DB.lookup(host);
    if (typeof record === "undefined") {
        return null;
    } else {
        return Adapter.toApi(host, record);
    }
};

module.exports = new CitiesCollection ();