const { Router } = require("express");
const { check } = require("express-validator");
const {
  getDestinations,
  getDestination,
  createDestination,
  updateDestination,
  deleteDestination,
} = require("../controllers/destination.controllers");
const {
  validateJWT,
  validateRoles,
  validateFields,
} = require("../middlewares");

const router = Router();

//Get destinations - ADMIN

router.get(
  "/",
  [
    validateJWT,
    validateRoles('ADMIN_ROLE', 'PLANNER_ROLE', 'OPERATOR_ROLE'),
    validateFields,
  ],
  getDestinations
);

//Get destination

router.get(
  "/:id",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  getDestination
);

//Create destination - ADMIN

router.post(
  "/",
  [
    validateJWT,
    validateRoles('ADMIN_ROLE'),
    validateFields,
  ],
  createDestination
);

//Update destination

router.put(
  "/:id",
  [
    validateJWT,
    validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    validateFields,
  ],
  updateDestination
);

//Delete destination

router.delete(
  "/:id",
  [
    validateJWT,
    validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    validateFields,
  ],
  deleteDestination
);

module.exports = router;
