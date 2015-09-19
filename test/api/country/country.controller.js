'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var countryController = require('../../../api/country/country.controller');
var countryCollection = require('../../../lib/country');

describe('Controller countryController', function CountryControllerTest () {
    it('should exist', function (done) {
        expect(countryController).not.to.be.an('undefined');
        expect(countryController).to.be.an('object');
        done();
    });

    describe('index action', function IndexAction () {
        var returnedAsJson, collection, req, res;

        before(function() {
            returnedAsJson = sinon.spy();
            collection = sinon.stub(countryCollection, "fetch");
            res = { json: returnedAsJson };
        });

        it('should call fetch for every host and return json', function (done) {
            var hosts = ["24.24.24.24", "94.94.94.94"];
            var countries = [{ country: "a" }, { country: "b" }];
            req = { params: { hosts: hosts.join(",") } };
            collection.withArgs(hosts[0]).returns(countries[0]);
            collection.withArgs(hosts[1]).returns(countries[1]);

            countryController.index(req, res);
            expect(returnedAsJson).to.have.been.calledWith(countries);
            done();
        });

        it('should call fetch for the host and return json', function (done) {
            var hosts = ["24.24.24.24"];
            var countries = [{ country: "a" }];
            req = { params: { hosts: hosts.join(",") } };
            collection.withArgs(hosts[0]).returns(countries[0]);

            countryController.index(req, res);
            expect(returnedAsJson).to.have.been.calledWith(countries);
            done();
        });
    });
});
