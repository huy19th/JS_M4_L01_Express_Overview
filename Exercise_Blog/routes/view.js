var express = require('express');
const view = express.Router();

let blog1 = {
  title: 'Hello',
  content: 'World'
}
let array = [blog1];
/* GET home page. */
view.get('/', function(req, res) {
  res.render('view', { array: array });
});

module.exports = {view, array};
