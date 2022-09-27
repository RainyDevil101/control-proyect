const dotenv = require('dotenv');
dotenv.config();

module.exports = {

    database: {
        host: process.env.HOST,
        user: "cacciuttolo_admincc",
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    }


};