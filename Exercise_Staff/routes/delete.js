const express = require('express');
const dels = express.Router();
const formidable = require('formidable');
var { views, array } = require('./view.js');

/* GET home page. */


dels.get('/:id', (req, res) => {
  array.forEach((item, index) => {
    if (item.id == req.params.id) array.splice(index, 1);
  })
  // array = array.filter(item => {
  //   return item.id !== req.params.id;
  // })
  res.redirect(301, '/');
});


module.exports = dels;
