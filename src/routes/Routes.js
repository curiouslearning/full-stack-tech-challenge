const express = require('express');
const router = express.Router();

const FetchLatestHand = require('../controllers/FetchLatestHandler')
const { VerifyParamsFetchLatest } = require('../middlewares/VerifyParams');

router.get('/fetch_latest*/',FetchLatestHand.fetchLatestHandler);

module.exports = router;
