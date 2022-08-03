const { Router } = require('express');
const { check } = require('express-validator');
const { login, renovateToken } = require('../controllers/auth.controllers');
const { rutValidated } = require('../helpers/rut-validator');
const { validateFields, validateJWT } = require('../middlewares');

const router = Router();

router.post('/login', [
    check('rut').custom(rutValidated),
    check('passwordT', 'La contraseña no es válida').not().isEmpty(),
    validateFields,
], login);

router.get('/', validateJWT, renovateToken );

module.exports = router;