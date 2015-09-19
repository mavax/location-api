'use strict';

var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');

var locationApi = require('../../../location-api');

describe('Country Api', function CountryApiTest () {
    it('should respond with an array of objects', function (done) {
        var host = "24.24.24.24";
        var apiRecord = {
            country: {
                geoname_id: 6252001,
                iso_code: 'US',
                name: 'United States',
                language: 'en'
            },
            host: host
        };

        request(locationApi)
            .get('/api/country/' + host)
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (error, response) {
                if (error) {
                    return done(error);
                }
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.equal(1);
                expect(response.body[0]).to.deep.equal(apiRecord);
                done();
            });
    });
});
