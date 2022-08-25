const { Router } = require('express');
const { postUsersExcel } = require('../controllers/userExcel.controllers');
const { validateJWT,  } = require('../middlewares');
const uploadFile = require('../middlewares/uploadFiles');

const router = Router();

router.post('/uploadFile', [
    validateJWT,
    uploadFile(),
], postUsersExcel)

module.exports = router;