const { Router } = require('express');
const { createExcelFile } = require('../controllers/dataExcel.controllers');
const { validateJWT, validateFields } = require('../middlewares');

const router = Router();

router.post('/generateExcel', [
    validateJWT,
    validateFields
], createExcelFile);

router.get('downloadExcel', [
    validateJWT,
    validateFields
])

module.exports = router;