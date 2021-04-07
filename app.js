const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

if (process.env.redisHost) {
  app.use(session({
    secret: 'AndrewKrevetka',
    name: 'session',
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {secure: false},
    store: new redisStore({
      host: process.env.redisHost || 'localhost',
      port: process.env.redisPort || 6379,
      logErrors: logger.error
    })
  }));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
//for commit