const { Router } = require("express");
const {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/dispatchPlaces.controllers");
const {
  validateJWT,
  validateRoles,
  validateFields,
} = require("../middlewares");
const { check } = require("express-validator");

const router = Router();

//Get places - ADMIN

router.get(
  "/",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'OPERATOR_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  getPlaces
);

//Get place

router.get(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  getPlaces
);

//Create place

router.post(
  "/",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    check('place', 'El nombre es obligatorio').not().isEmpty(),
    validateFields,
  ],
  createPlace
);

//Update place

router.put(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  updatePlace
);

router.delete(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  deletePlace
);

module.exports = router;
