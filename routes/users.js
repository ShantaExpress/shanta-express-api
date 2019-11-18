var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
let logger = require('../utils/logger');
let authValid = require('../utils/auth');

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    res.status(200).json({
        data: users
    });
  });
});

module.exports = router;
