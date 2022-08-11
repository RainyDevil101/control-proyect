const { Router } = require("express");
const { check } = require("express-validator");
const {
  getMaterials,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
} = require("../controllers/material.controllers");
const {
  validateJWT,
  validateRoles,
  validateFields,
} = require("../middlewares");
const { rutValidated } = require("../helpers/rut-validator");

const router = Router();

//Get materials - ADMIN

router.get(
  "/",
  [
    validateJWT,
    validateRoles('ADMIN_ROLE', 'PLANNER_ROLE', 'OPERATOR_ROLE'),
    validateFields,
  ],
  getMaterials
);

//Get material

router.get(
  "/:id",
  [
    validateJWT,
    validateRoles('ADMIN_ROLE', 'PLANNER_ROLE', 'OPERATOR_ROLE'),
    validateFields,
  ],
  getMaterial
);

//Create material - ADMIN

router.post(
  "/",
  [
    validateJWT,
    validateRoles('ADMIN_ROLE', 'PLANNER_ROLE', 'OPERATOR_ROLE'),
    validateFields,
  ],
  createMaterial
);

//Update material

router.put(
  "/:id",
  [
    validateJWT,
    validateRoles('ADMIN_ROLE', 'PLANNER_ROLE', 'OPERATOR_ROLE'),
    validateFields,
  ],
  updateMaterial
);

//Delete material

router.delete(
  "/:id",
  [
    validateJWT,
    validateRoles('none'),
    validateFields,
  ],
  deleteMaterial
);

module.exports = router;
