'use strict';

var chai = require('chai');
var expect = chai.expect;

var Adapter = require('../../lib/country.adapter');

describe('Country Adapter', function CountryAdapterTest() {
    describe('toApi', function () {
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
                name: 'United States',
                language: 'en'
            },
            host: host
        };


        it('should call lookup on the reader', function (done) {
            expect(Adapter.toApi(host, record)).to.deep.equal(apiRecord);
            done();
        });
    });
});
