'use strict';

function Adapter () {}

Adapter.prototype.toApi = function(host, record) {
    var cityRecord = record.city;
    var apiRecord = {
        city: {
            geoname_id: cityRecord.geoname_id,
            language: "en",
            name: cityRecord.names.en
        },
        host: host
    };

    return apiRecord;
};

module.exports = new Adapter ();
