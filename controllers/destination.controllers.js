const { response } = require('express');
const pool = require('../database/database');

const getDestinations = async (req = request, res = response) => {

    const getUser = req.user;

    const userDivisionsId = getUser[0].users_divisions;

    // const userDivisionString = userDivision.toString();

    const getDestinations = await pool.query('SELECT * FROM destination WHERE status = 1 AND division_code = ? ORDER BY nombre ASC', [userDivisionsId]);

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

    const divisions = {
        1000: "Teniente",
        1001: "Andina",
        1002: "Ventanas",
        1003: "Salvador",
        1004: "Chuquicamata",
        1005: "Esporadicos andina",
        1006: "Esporadicos teniente",
        1007: "Casa matriz",
    };

    const divisionNull = null;

    console.log(req.body);


    const {id, name: nombre} = req.body;

    const division_code = req.user[0].users_divisions;

    const division = divisions[division_code] || divisionNull;

    const status = 1;

    const destination = {
        id,
        nombre,
        division_code,
        division,
        status
    };

    const resp = await pool.query('INSERT INTO destination set ?', [destination]);

    const idDestination = resp.insertId;

    res.status(200).json({
        idDestination,
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