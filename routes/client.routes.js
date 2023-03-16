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

const router = Router();

//Get refunds - ADMIN

router.get(
  "/",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE','OPERATOR_ROLE'),
    validateFields,
  ],
  getClients
);

//Get refund

router.get(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'OPERATOR_ROLE'),
    validateFields,
  ],
  getClient
);

//Create refund - ADMIN

router.post(
  "/",
  [
    validateJWT,
    validateRoles('OPERATOR_ROLE', 'REFUNDER_ROLE'),
    validateFields,
  ],
  createClient
);

//Update refund

router.put(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE'),
    validateFields,
  ],
  updateClient
);

//Finish place

router.delete(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE'),
    validateFields,
  ],
  deleteClient
);

module.exports = router;
