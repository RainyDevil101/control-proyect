const { Router } = require("express");
const { check } = require("express-validator");
const {
  getLocations,
  createLocation,
  getLocation,
  updateLocation,
  deleteLocation,
} = require("../controllers/location.controllers");
const {
  validateJWT,
  validateRoles,
  validateFields,
} = require("../middlewares");
const { rutValidated } = require("../helpers/rut-validator");

const router = Router();

//Get locations - ADMIN

router.get(
  "/",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  getLocations
);

//Get location

router.get(
  "/:id",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  getLocation
);

//Create location - ADMIN

router.post(
  "/",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  createLocation
);

//Update location

router.put(
  "/:id",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  updateLocation
);

//Delete location

router.delete(
  "/:id",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  deleteLocation
);

module.exports = router;
