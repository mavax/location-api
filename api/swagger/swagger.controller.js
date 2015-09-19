'use strict';

// var config = require('../../config/environment/' + process.env.NODE_ENV);

var documentation = {
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
                },
                "error": {
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
                },
                "error": {
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

function SwaggerController() {}

SwaggerController.prototype.docs = function (req, res) {
    res.json(documentation);
};

module.exports = new SwaggerController();
