const { Router } = require("express");
const {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient
} = require("../controllers/client.controllers");
const {
  validateJWT,
  validateRoles,
  validateFields,
} = require("../middlewares");
const { check } = require("express-validator");

const router = Router();

//Get clients - ADMIN

router.get(
  "/",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE','OPERATOR_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  getClients
);

//Get client

router.get(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'OPERATOR_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  getClient
);

//Create client - ADMIN

router.post(
  "/",
  [
    validateJWT,
    validateRoles('OPERATOR_ROLE', 'REFUNDER_ROLE', 'ADMIN_ROLE'),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validateFields,
  ],
  createClient
);

//Update client

router.put(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('name', 'El nombre un máximo de 20 carácteres').isLength({ max: 20 }),
    validateFields,
  ],
  updateClient
);

//Finish client

router.delete(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  deleteClient
);

module.exports = router;
