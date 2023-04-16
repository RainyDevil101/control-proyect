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

    const destination = await pool.query('SELECT * FROM destination WHERE id = ?', [id]);

    res.status(200).json({
        destination,
    });

}

const createDestination = async (req = request, res = response) => {

    const userDivisionsId = getUser[0].users_divisions;

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

    const { id, nombre } = req.body;

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

    const idCreated = await pool.query('SELECT * FROM destination WHERE id = ? AND status = 1 AND division_code ?', [id, userDivisionsId,]);

    const verifyId = Object.values(JSON.parse(JSON.stringify(idCreated)));


    if (verifyId.length > 0) {
        return res.status(400).json({
            msg: "El id ya se encuentra registrado",
            ok: false
        })

    } else {

        try {
            const resp = await pool.query('INSERT INTO destination set ?', [destination]);
            const idDestination = resp.insertId;
            res.status(200).json({
                idDestination,
                ok: true
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                msg: 'Error al registrar',
                ok: false
            })
        }


    }

}

const updateDestination = async (req = request, res = response) => {

    const { id } = req.params;

    const { nombre } = req.body;
    const userDivisionsId =  req.user[0].users_divisions;

    const destination = {
        nombre
    };

    try {
        const resp = await pool.query(
            "UPDATE destination SET ? WHERE id = ? AND status = 1 AND division_code = ?",
            [destination, id, userDivisionsId]
        )
        const idUpdated = resp.insertId;

        return res.status(200).json({
            idUpdated,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: "Error al actualizar",
        });
    }
}

const deleteDestination = async (req = request, res = response) => {

    const { id } = req.params;
    const userDivisionsId = req.user[0].users_divisions;

    try {
        await pool.query('UPDATE destination SET status = 0 WHERE id = ? AND division_code = ?', [id, userDivisionsId]);

        res.status(200).json({
            msg: "Destino eliminado",
            ok: true,
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: "Error al eliminar el destino",
        });
    }
}

module.exports = {
    getDestinations,
    getDestination,
    createDestination,
    updateDestination,
    deleteDestination
};