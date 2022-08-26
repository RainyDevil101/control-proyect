const dotenv = require('dotenv');
dotenv.config();

module.exports = {

    database: {
        host: process.env.HOST,
        user: "cba84083_administrador_database",
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    }


};