var express = require('express');
var router = express.Router();

const convertHandler = require('./handler');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a convert');
});

router.post('/bin-to-dec', convertHandler.binToDec);
router.post('/dec-to-bin', convertHandler.decToBin);

module.exports = router;
