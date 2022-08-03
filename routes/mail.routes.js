const { Router } = require('express');
const { testEmail } = require('../controllers/mail.controller');

const router = Router();

router.post('/', testEmail);

// router.get('/');

module.exports = router;