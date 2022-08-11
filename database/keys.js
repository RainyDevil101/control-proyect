const dotenv = require('dotenv');
dotenv.config();

module.exports = {

    database: {
        host: process.env.HOST,
        user: 'cba84083_administrador_database',
        password: 'balvin312ll',
        database: process.env.DATABASE,
    }


};