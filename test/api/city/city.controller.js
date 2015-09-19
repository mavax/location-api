'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var CityController = require('../../../api/city/city.controller');
var CityCollection = require('../../../lib/city/collection');

describe('Controller CityController', function CountryControllerTest () {
    describe('index action', function IndexAction () {
        var returnedAsJson, collectionStub, req, res;

        beforeEach(function() {
            returnedAsJson = sinon.spy();
            collectionStub = sinon.stub(CityCollection, "fetch");
            res = { json: returnedAsJson };
        });

        afterEach(function() {
            CityCollection.fetch.restore();
        });

        it('should return city returned by fetch', function (done) {
            var hosts = ["24.24.24.24"];
            var cities = [{ city: "a" }];
            req = { params: { hosts: hosts.join(",") } };
            collectionStub.withArgs(hosts[0]).returns(cities[0]);

            CityController.index(req, res);
            expect(returnedAsJson).to.have.been.calledWith(cities);
            done();
        });

        it('should return cities returned by fetch', function (done) {
            var hosts = ["24.24.24.24", "94.94.94.94"];
            var cities = [{ city: "a" }, { city: "b" }];
            req = { params: { hosts: hosts.join(",") } };
            collectionStub.withArgs(hosts[0]).returns(cities[0]);
            collectionStub.withArgs(hosts[1]).returns(cities[1]);

            CityController.index(req, res);
            expect(returnedAsJson).to.have.been.calledWith(cities);
            done();
        });
    });
});
