'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var Collection = require('../../../lib/country/collection');
var CountryDb = require('../../../lib/country/db');
var Adapter = require('../../../lib/country/adapter');

describe('Country Collection', function CountryTest() {
    describe('fetch', function () {
        var readerStub, adapterStub;
        var host = "24.24.24.24";
        var record = {
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
            }
        };
        var apiRecord = {
            country: {
                geoname_id: 6252001,
                iso_code: 'US',
                en: 'North America',
                language: 'en'
            },
            host: host
        };

        before(function() {
            readerStub = sinon.stub(CountryDb, "lookup");
            adapterStub = sinon.stub(Adapter, "toApi");
        });

        after(function() {
            CountryDb.lookup.restore();
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
