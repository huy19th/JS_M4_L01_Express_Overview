var express = require('express');
const view = express.Router();

let array = [];
/* GET home page. */
view.get('/', function(req, res) {
  res.render('view', { array: array });
});

module.exports = {view, array};
