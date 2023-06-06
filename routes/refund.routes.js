const { Router } = require("express");
const {
  getRefunds,
  getRefund,
  createRefund,
  updateRefund,
  deleteRefund,
  finishRefund,
} = require("../controllers/refund.controllers");
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
    validateRoles('REFUNDER_ROLE', 'OPERATOR_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  getRefunds
);

//Get refund

router.get(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'OPERATOR_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  getRefund
);

//Create refund - ADMIN

router.post(
  "/",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'OPERATOR_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  createRefund
);

//Update refund

router.put(
  "/:id",
  [
    validateJWT,
    validateRoles('OPERATOR_ROLE', 'ADMIN_ROLE', 'REFUNDER_ROLE'),
    validateFields,
  ],
  updateRefund
);

//Finish refund

router.put(
  "/finish/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  finishRefund
);

router.delete(
  "/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  deleteRefund
);

module.exports = router;
