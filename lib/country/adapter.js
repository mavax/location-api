'use strict';

function Adapter () {}

Adapter.prototype.toApi = function(host, record) {
    var countryRecord = record.country;
    var apiRecord = {
        country: {
            geoname_id: countryRecord.geoname_id,
            iso_code: countryRecord.iso_code,
            language: "en",
            name: countryRecord.names.en
        },
        host: host
    };

    return apiRecord;
};

module.exports = new Adapter ();
