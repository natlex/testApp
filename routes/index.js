var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session || {};
  let visit = sess.lastVisit;
  sess.lastVisit = new Date();
  res.render('index', {
    ip: req.connection.remoteAddress,
    visit
  });
});

module.exports = router;
