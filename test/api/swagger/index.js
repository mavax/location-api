'use strict';

var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');

var locationApi = require('../../../location-api');

describe('Controller SwaggerController', function SwaggerControllerTest () {
    var expectedResponse = {
        "swagger": "2.0",
        "basePath": "/api",
        "info": {
            "title": "Location API",
            "version": "v1.0",
            "description": "Node GeoIP service"
        },
        "tags": [{"name": "Countries"}],
        "paths": {
            "/country/{hosts}": {
                "get": {
                    "tags": ["Countries"],
                    "consumes": ["application/json"],
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "in": "path",
                            "name": "hosts",
                            "required": true,
                            "type": "string",
                            "description": "Comma separated IPs, i.e. \"24.24.24.24,94.94.94.94\""
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Success"
                        },
                        "400": {
                            "description": "Invalid params"
                        }
                    },
                    "summary": "Lists all teams for account UUID"
                }
            }
        }
    };

    it('returns swagger documentation', function (done) {
        request(locationApi)
            .get('/api/swagger')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (error, response) {
                    if (error) {
                        return done(error);
                    }
                    expect(response.body).to.be.an('object');
                    expect(response.body).to.deep.equal(expectedResponse);
                    done();
                });
    });
});
