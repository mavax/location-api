'use strict';

var express = require('express');
var controller = require('./swagger.controller');

var router = express.Router();

router.get('/swagger', controller.docs);

module.exports = router;
