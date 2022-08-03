const { response } = require('express');
const pool = require('../database/database');

const getDestinations = async (req = request, res = response) => {

    const getDestinations = await pool.query('SELECT * FROM destination WHERE status = 1 ORDER BY nombre ASC');

    const destinations = Object.values(JSON.parse(JSON.stringify(getDestinations)));

    res.status(200).json({
        destinations,
    });
}

const getDestination = async (req = request, res = response) => {

    const { id } = req.params;

    console.log(id);

    const destination = await pool.query('SELECT * FROM destination WHERE id = ?', [id]);

    res.status(200).json({
        destination,
    });

}

const createDestination = async (req = request, res = response) => {

    const destination = req.body;

    await pool.query('INSERT INTO destination set ?', [destination])

    res.status(200).json({
        destination,
    });
}

const updateDestination = async (req = request, res = response) => {

    const { id } = req.params;

    const nombre = req.body.updateForum;

    const destination = {
        nombre
    };

    await pool.query('UPDATE destination SET ? WHERE id = ? AND status = 1', [destination, id]);

    res.status(200).json({
        msg: "Destino actualizado",
        ok : true,
    })
}

const deleteDestination = async (req = request, res = response) => {

    const { id } = req.params;

    // const status = 0;

    await pool.query('UPDATE destination SET status = 0 WHERE id = ?', [id]);

    res.status(200).json({
        msg: "Destino eliminado",
        ok: true,
    })
}

module.exports = {
    getDestinations,
    getDestination,
    createDestination,
    updateDestination,
    deleteDestination
};