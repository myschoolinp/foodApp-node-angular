var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data={name:"krishna",id:1}
  res.send(data);
});

module.exports = router;
