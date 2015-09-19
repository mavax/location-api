'use strict';

var express = require('express');
var controller = require('./city.controller');

var router = express.Router();

router.get('/:hosts', controller.index);

module.exports = router;
