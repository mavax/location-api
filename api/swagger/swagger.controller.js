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

function SwaggerController() {}

SwaggerController.prototype.docs = function (req, res) {
    res.json(documentation);
};

module.exports = new SwaggerController();
