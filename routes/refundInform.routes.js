const { Router } = require("express");

const {
    getRefundByDate
} = require("../controllers/refundInform.controllers");

const { validateJWT, validateRoles, validateFields } = require("../middlewares");

const { check } = require("express-validator");

const router = Router();

// Get refunds by dates

router.post(
    "/",
    [
        validateJWT,
        validateRoles('REFUNDER_ROLE', 'ADMIN_ROLE'),
        validateFields,
    ],
    getRefundByDate
);

module.exports = router;