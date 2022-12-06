var createError = require('http-errors');
var express = require('express');
var path = require('path');
var {view, array} = require('./routes/view');
var staff = require('./routes/staff');
var dels = require('./routes/delete');

/* GET home page. */


const PORT = 3000;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/staff', staff);
app.use('/', view);
app.use('/delete', dels)

// app.get('/', (req, res) => {
//   res.render('view', {array: array});
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
})

module.exports = app;
