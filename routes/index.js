var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/index/add")
});

/* GET home page. */
router.get('/add', function(req, res, next) {
  var result = 0
  var {num1, num2} = req.query
  if(num1 !=='' && num2 !=='') {
      result = utils.add(parseFloat(num1), parseFloat(num2))
  }
  res.render('compute', { title: 'add' ,result:result, num1, num2, symbol:"+" });

});


module.exports = router;
