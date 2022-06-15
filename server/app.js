var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb://localhost:27017/ProjectApis',{useNewUrlParser:true});
let db = mongoose.connection;
require('./models/register');
require('./models/personal');
require('./models/login');
var listController = require('./controllers/controls');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express().use("*",cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.route('/register')
    .post(listController.create_user);

app.route('/login')
    .post(listController.login_user);
    
app.route('/personal')
   .post(listController.create_personal);

app.route('/getResume')
   .post(listController.list_all_tasks);


app.route('/education')
    .put(listController.update_a_task);

app.route('/skills')
    .put(listController.update_a_task);
  
app.route('/experience')
    .put(listController.update_a_task);



// app.route('/education')
//     .post(listController.create_data);

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

module.exports = app;
