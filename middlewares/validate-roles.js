const { response } = require("express");

const validateRoles = ( ...roles ) => {

    return (req, res = response, next) => {

        if ( req.user[0].length === 0 ) {
            return res.status(500).json({
                msg: 'Invalid'
            })
        };

        if ( !roles.includes( req.user[0].role ) ) {
            return res.status(401).json({
                msg: 'Invalid'
            })
        };
        
        next();

    };

};

module.exports = {
    validateRoles,
};