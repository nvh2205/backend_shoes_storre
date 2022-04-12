const express = require('express');
const apiRouterV1 = require('./api/v1/index');

const router = express.Router();

router.use('/api/v1', apiRouterV1);

module.exports = router;
