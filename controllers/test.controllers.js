const { response } = require('express');
const pool = require('../database/database');


// Get users

const getTest = async (req = request, res = response) => {

    const { id } = req.body;

    

    await pool.query('UPDATE users SET status = 1 WHERE id = ?', [id]);

    res.status(200).json({
        id
    });
}

module.exports = {
    getTest,
}