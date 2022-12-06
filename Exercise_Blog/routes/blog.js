const express = require('express');
const blog = express.Router();
const formidable = require('formidable');
var {views, array} = require('./view.js');

/* GET home page. */


blog.get('/', (req, res) => {
  res.render('blog');
});
blog.post('/', (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        array.push(fields);
    })
    res.redirect(301, '/')
})


module.exports = blog;
