const { Router } = require("express");
const {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
} = require("../controllers/dispatchPlaces.controllers");
const {
  validateJWT,
  validateRoles,
  validateFields,
} = require("../middlewares");

const router = Router();

//Get places - ADMIN

router.get(
  "/",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'OPERATOR_ROLE'),
    validateFields,
  ],
  getPlaces
);

//Get place

router.get(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE'),
    validateFields,
  ],
  getPlaces
);

//Create place

router.post(
  "/",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE'),
    validateFields,
  ],
  createPlace
);

//Update place

router.put(
  "/:id",
  [
    validateJWT,
    validateRoles('OPERATOR_ROLE'),
    validateFields,
  ],
  updatePlace
);

module.exports = router;
