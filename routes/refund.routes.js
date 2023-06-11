const { Router } = require("express");
const { check } = require("express-validator");
const {
  createRefund,
  deleteRefund,
  finishRefund,
  getRefund,
  getRefunds,
  updateRefund,
  updateRefundData,
  updateRefundImageOne,
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

// Update refund DATA

router.put(
  "/update/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  updateRefundData
);

// Update refund image one

router.post(
  "/updateImage/:id",
  [
    validateJWT,
    validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
    validateFields,
  ],
  updateRefundImageOne
);

// Delete refund

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
