'use strict';

function Country () {}

Country.prototype.fetch = function(host) {
    return JSON.stringify([host]);
};

module.exports = new Country ();
