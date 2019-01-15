var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get('/', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render('index.js', hbsObject);
  });
});

router.post('/burger', function (req, res) {
  burger.insertOne(["burger_name"], req.body.burger_name, function(result) {
    res.redirect('/index.js');
  });
});

router.put('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index.js');
  });
});

module.exports = router;