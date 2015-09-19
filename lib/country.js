'use strict';

var DB = require('./country.db')
var Adapter = require('./country.adapter')

function Country () {}

Country.prototype.fetch = function(host) {
    var record = DB.lookup(host);
    return Adapter.toApi(host, record);
};

module.exports = new Country ();
