const { Router } = require("express");
const { check } = require("express-validator");
const {
  getDivisions,
  getDivision,
  createDivisions,
  updateDivision,
  deleteDivision,
} = require("../controllers/division.controllers");
const {
  validateJWT,
  validateRoles,
  validateFields,
} = require("../middlewares");

const router = Router();

//Get divisions - ADMIN

router.get("/",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],getDivisions
);

//Get division

router.get(
  "/:id",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  getDivision
);

//Create division - ADMIN

router.post(
  "/",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  createDivisions
);

//Update division

router.put(
  "/:id",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  updateDivision
);

//Delete division

router.delete(
  "/:id",
  [
    // validateJWT,
    // validateRoles('ADMIN_ROLE', 'USER_ROLE'),
    // validateFields,
  ],
  deleteDivision
);

module.exports = router;
