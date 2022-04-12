const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const createError = require('http-errors');
const rfs = require('rotating-file-stream');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const { sequelize } = require('./models/index');
const indexRouter = require('./routes/index');
const scheduler = require('./scheduler/index');
const defaultMiddleware = require('./middleware/default');
const handleError = require('./middleware/handleError');
const staticSetting = require('./statics/index');
const generator = require('./utils/generator');

require('dotenv').config();

const app = express();
app.use(cors());

// Store logs
const accessLogStream = rfs.createStream(generator.logFileGenerator(), {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'storage/logs'),
});
app.use(logger('combined', { stream: accessLogStream }));
app.use(logger('dev'));

// Connect database
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection OK!');
  })
  .catch((error) => {
    console.log('Unable to connect to the database:');
    console.log(error.message);
  });

app.use(bodyParser.json({ limit: '512mb' }));
app.use(bodyParser.urlencoded({ limit: '512mb', extended: true }));
app.use(
  methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  }),
);

// Setting serve static files
staticSetting.forEach((setting) => app.use(...setting));

// Use middleware
app.use(...defaultMiddleware);

// Define list routers
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Handle errors
app.use(...handleError);

// Run scheduler job
scheduler.forEach((schedulerExecute) => {
  schedulerExecute();
});

module.exports = app;
