'use strict';

var DB = require('./db')
var Adapter = require('./adapter')

function Country () {}

Country.prototype.fetch = function(host) {
    var record = DB.lookup(host);
    return Adapter.toApi(host, record);
};

module.exports = new Country ();
