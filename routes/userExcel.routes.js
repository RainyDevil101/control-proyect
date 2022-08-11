const { Router } = require('express');
const { check }  = require('express-validator');
const { postUsersExcel } = require('../controllers/userExcel.controllers');
const { validateFields, validateJWT,  } = require('../middlewares');
const uploadFile = require('../middlewares/uploadFiles');

const router = Router();

router.post('/uploadFile', [
    // validateJWT,
    uploadFile(),
], postUsersExcel)

module.exports = router;