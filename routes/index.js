const express = require('express');
const os = require('os');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session || {};
  let visit = sess.lastVisit;
  let interfaces = os.networkInterfaces();
  let network = Object.keys(interfaces).find(i => i != 'lo');
  sess.lastVisit = new Date();
  res.render('index', {
    host: os.hostname(),
    ip: interfaces[network].find(a => a.family == 'IPv4').address,
    visit
  });
});

module.exports = router;
