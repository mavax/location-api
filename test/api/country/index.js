'use strict';

var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');

var locationApi = require('../../../location-api');

describe('Country Api', function CountryApiTest () {
    it('should respond with an array of objects', function (done) {
        var hosts = "24.24.24.24,94.94.94.94";
        var apiRecords = [
            {
                country: {
                    geoname_id: 6252001,
                    iso_code: 'US',
                    name: 'United States',
                    language: 'en'
                },
                host: "24.24.24.24"
            },
            {
                country: {
                    geoname_id: 3175395,
                    iso_code: 'IT',
                    name: 'Italy',
                    language: 'en'
                },
                host: "94.94.94.94"
            }
        ];

        request(locationApi)
            .get('/api/country/' + hosts)
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (error, response) {
                if (error) {
                    return done(error);
                }
                expect(response.body).to.be.an('array');
                expect(response.body).to.deep.equal(apiRecords);
                done();
            });
    });
});
