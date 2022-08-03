// const { validateRUT } = require('validar-rut');
const { validate } = require('rut.js');

const rutValidated = async (rut) => {

    const result = validate(rut)

    if(result === false) {
        throw new Error(`El rut '${rut}' no es válido`)
    }
}

module.exports = {
    rutValidated
}