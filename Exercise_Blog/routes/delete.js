const express = require('express');
const delblog = express.Router();
const formidable = require('formidable');
var { views, array } = require('./view.js');

/* GET home page. */


delblog.get('/:index', (req, res) => {
  array.splice(req.params.index, 1);
  console.log(req.params.index, 1)
  res.redirect(301, '/')
});


module.exports = delblog;
