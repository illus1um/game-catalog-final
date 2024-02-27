const { Router } = require('express');
const newsController = require('../controllers/newsController');

const router = Router();

router.get('/', newsController.news_get);

module.exports = router;
