const express = require('express');
const staff = express.Router();
const formidable = require('formidable');
var {views, array} = require('./view.js');

/* GET home page. */


staff.get('/', (req, res) => {
  res.render('staff');
});
staff.post('/', (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        array.push(fields);
    })
    res.redirect(301, '/')
})


module.exports = staff;
