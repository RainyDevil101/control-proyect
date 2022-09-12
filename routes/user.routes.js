const { Router } = require('express');
const { check }  = require('express-validator');
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/user.controllers');
const { validateJWT, validateRoles, validateFields } = require('../middlewares');
const { rutValidated } = require('../helpers/rut-validator');
const { mExists, rutUnique, mExistsUpdate } = require('../helpers/db-validators');

const router = Router();

//Get users - ADMIN

router.get('/', [
    validateJWT,
    validateRoles('ADMIN_ROLE'),
    validateFields,
], getUsers);

//Get user

router.get('/:id', [
    validateJWT,
    validateRoles('ADMIN_ROLE', 'OPERATOR_ROLE', 'PLANNER_ROLE'),
    validateFields,
], getUser);

//Create user - ADMIN

router.post('/', [
    validateJWT,
    validateRoles('ADMIN_ROLE'),
    check('fullname', 'El nombre es obligatorio.').not().isEmpty(),
    check('passwordT', 'La contraseña debe tener más de 6 letras.').isLength({ min: 6 }),
    check('email').custom(mExists),
    check('rut', 'El rut es obligatorio').not().isEmpty(),
    check('rut').custom(rutValidated),
    check('rut').custom(rutUnique),
    validateFields,
], createUser);

//Update user

router.put('/:id', [
    validateJWT,
    validateRoles('ADMIN_ROLE'),
    check('user.email', 'No es un email válido').isEmail(),
    check('user.email').custom(mExistsUpdate),
    validateFields,
], updateUser);

//Delete user

router.delete('/:id', [
    validateJWT,
    validateRoles('ADMIN_ROLE'),
    validateFields,
], deleteUser);

module.exports = router;