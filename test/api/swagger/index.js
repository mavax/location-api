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
        "tags": [{"name": "Countries"}, {"name": "Cities"}],
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
                            "description": "Success",
                            "schema": {
                                "$ref": "#/definitions/CountriesResponse"
                            }
                        },
                        "400": {
                            "description": "Invalid params"
                        }
                    },
                    "summary": "Returns countries for hosts"
                }
            },
            "/city/{hosts}": {
                "get": {
                    "tags": ["Cities"],
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
                            "description": "Success",
                            "schema": {
                                "$ref": "#/definitions/CitiesResponse"
                            }
                        },
                        "400": {
                            "description": "Invalid params"
                        }
                    },
                    "summary": "Returns cities for hosts"
                }
            }
        },
        "definitions": {
            "Country": {
                "type": "object",
                "properties": {
                    "geoname_id": {
                        "type": "integer",
                        "format": "int64"
                    },
                    "iso_code": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "language": {
                        "type": "string"
                    }
                }
            },
            "CountryResponse": {
                "type": "object",
                "properties": {
                    "country": {
                        "$ref": "#/definitions/Country"
                    },
                    "host": {
                        "type": "string"
                    }
                }
            },
            "CountriesResponse": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/CountryResponse"
                }
            },
            "City": {
                "type": "object",
                "properties": {
                    "geoname_id": {
                        "type": "integer",
                        "format": "int64"
                    },
                    "name": {
                        "type": "string"
                    },
                    "language": {
                        "type": "string"
                    }
                }
            },
            "CityResponse": {
                "type": "object",
                "properties": {
                    "country": {
                        "$ref": "#/definitions/City"
                    },
                    "host": {
                        "type": "string"
                    }
                }
            },
            "CitiesResponse": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/CityResponse"
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
