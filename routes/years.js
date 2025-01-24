var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  const date = new Date().getFullYear();
 res.json({ year: date.toString() });
});

module.exports = router;