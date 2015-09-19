'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var Collection = require('../../../lib/city/collection');
var CityDb = require('../../../lib/city/db');
var Adapter = require('../../../lib/city/adapter');

describe('City Collection', function CityTest() {
    describe('fetch', function () {
        var readerStub, adapterStub;
        var host = "24.24.24.24";
        var record = {
            city: {
                geoname_id: 5140405,
                names: {
                    de: 'Syracuse',
                    en: 'Syracuse',
                    es: 'Siracusa',
                    fr: 'Syracuse',
                    ja: 'シラキューズ',
                    'pt-BR': 'Syracuse',
                    ru: 'Сиракьюс',
                    'zh-CN': '锡拉丘兹'
                }
            },
            continent: {
                code: 'NA',
                geoname_id: 6255149,
                names: {
                    de: 'Nordamerika',
                    en: 'North America',
                    es: 'Norteamérica',
                    fr: 'Amérique du Nord',
                    ja: '北アメリカ',
                    'pt-BR': 'América do Norte',
                    ru: 'Северная Америка',
                    'zh-CN': '北美洲'
                }
            },
            country: {
                geoname_id: 6252001,
                iso_code: 'US',
                names: {
                    de: 'USA',
                    en: 'United States',
                    es: 'Estados Unidos',
                    fr: 'États-Unis',
                    ja: 'アメリカ合衆国',
                    'pt-BR': 'Estados Unidos',
                    ru: 'Сша',
                    'zh-CN': '美国'
                }
            },
            location: {
                latitude: 43.0481,
                longitude: -76.1474,
                metro_code: 555,
                time_zone: 'America/New_York'
            },
            postal: { code: '13202' },
            registered_country: {
                geoname_id: 6252001,
                iso_code: 'US',
                names: {
                    de: 'USA',
                    en: 'United States',
                    es: 'Estados Unidos',
                    fr: 'États-Unis',
                    ja: 'アメリカ合衆国',
                    'pt-BR': 'Estados Unidos',
                    ru: 'Сша',
                    'zh-CN': '美国'
                }
            },
            subdivisions: [
                { geoname_id: 5128638, iso_code: 'NY', names: {} }
            ]
        };
        var apiRecord = {
            city: {
                geoname_id: 5140405,
                name: 'Syracuse',
                language: 'en'
            },
            host: host
        };

        before(function() {
            readerStub = sinon.stub(CityDb, "lookup");
            adapterStub = sinon.stub(Adapter, "toApi");
        });

        after(function() {
            CityDb.lookup.restore();
            Adapter.toApi.restore();
        });

        it('should return an api compatible record using db and adapter', function (done) {
            readerStub.withArgs(host).returns(record);
            adapterStub.withArgs(host, record).returns(apiRecord);
            expect(Collection.fetch(host)).to.deep.equal(apiRecord);
            done();
        });
    });
});
