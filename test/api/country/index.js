'use strict';

var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');

var locationApi = require('../../../location-api');

describe('Country Api', function CountryApiTest () {
    it('should respond with an array of objects', function (done) {
        request(locationApi)
            .get('/api/country/24.24.24.24')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (error, response) {
                if (error) {
                    return done(error);
                }
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.equal(1);
                done();
            });
    });
});
