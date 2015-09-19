'use strict';

var chai = require('chai');
var expect = chai.expect;

var CountryController = require('../../api/country/country.controller');

describe('Controller CountryController', function CountryControllerTest () {
    it('should exist', function (done) {
        expect(CountryController).not.to.be.an('undefined');
        expect(CountryController).to.be.an('object');
        done();
    });
});
