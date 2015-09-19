'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var countryController = require('../../../api/country/country.controller');
var countryCollection = require('../../../lib/country/collection');

describe('Controller countryController', function CountryControllerTest () {
    describe('index action', function IndexAction () {
        var returnedAsJson, collectionStub, req, res;

        beforeEach(function() {
            returnedAsJson = sinon.spy();
            collectionStub = sinon.stub(countryCollection, "fetch");
            res = { json: returnedAsJson };
        });

        afterEach(function() {
            countryCollection.fetch.restore();
        });

        it('should return country returned by fetch', function (done) {
            var hosts = ["24.24.24.24"];
            var countries = [{ country: "a" }];
            req = { params: { hosts: hosts.join(",") } };
            collectionStub.withArgs(hosts[0]).returns(countries[0]);

            countryController.index(req, res);
            expect(returnedAsJson).to.have.been.calledWith(countries);
            done();
        });

        it('should return countries returned by fetch', function (done) {
            var hosts = ["24.24.24.24", "94.94.94.94"];
            var countries = [{ country: "a" }, { country: "b" }];
            req = { params: { hosts: hosts.join(",") } };
            collectionStub.withArgs(hosts[0]).returns(countries[0]);
            collectionStub.withArgs(hosts[1]).returns(countries[1]);

            countryController.index(req, res);
            expect(returnedAsJson).to.have.been.calledWith(countries);
            done();
        });
    });
});
