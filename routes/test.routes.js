const { Router } = require('express');
const { getTest } = require('../controllers/test.controllers');

const router = Router();

router.post('/', getTest);

// router.get('/');

module.exports = router;