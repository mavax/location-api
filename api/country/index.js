'use strict';

var express = require('express');
var controller = require('./country.controller');

var router = express.Router();

router.get('/:hosts', controller.index);

module.exports = router;
