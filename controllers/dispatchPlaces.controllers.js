const { response } = require('express');
const pool = require('../database/database');

// Get dispatchPlaces

const getPlaces = async (req = request, res = response) => {

    const userDivisionsId = req.user[0].users_divisions;
    const { page, all } = req.query;

    if (all === 'true') {

        const [getPlaces] = await Promise.all([
            pool.query(
                "SELECT * FROM dispatchplaces WHERE status = 1 AND divisions_id = ?", [userDivisionsId]
            )
        ])

        const places = Object.values(JSON.parse(JSON.stringify(getPlaces)));

        return res.status(200).json({
            places
        });
    }

    let getPage = page;

    if (isNaN(getPage)) {
        return res.status(400).json({
            msg: "Página no válida"
        });
    }

    const getTotal = await pool.query(
        "SELECT COUNT(*) AS Total FROM dispatchplaces WHERE status = 1 AND divisions_id = ?",
        [userDivisionsId]
    );

    let setPage = Number(getPage);

    const getLimit = 20;

    const total = JSON.parse(JSON.stringify(getTotal[0]));
    const totalValue = Object.values(total);
    const numberOfPages = Math.ceil(totalValue[0] / getLimit);

    if (setPage < 1) {
        setPage = 1;
    } else if (setPage > numberOfPages) {
        setPage = numberOfPages;
    }

    const getFrom = (setPage * getLimit) - getLimit;

    const [getPlaces] = await Promise.all([
        pool.query(
            "SELECT * FROM dispatchplaces WHERE status = 1 AND divisions_id = ? LIMIT ?, ?", [userDivisionsId, getFrom, getLimit]
        )
    ]);

    const places = Object.values(JSON.parse(JSON.stringify(getPlaces)));

    res.status(200).json({
        places,
        total,
        numberOfPages,
        currentPage: setPage
    });

};

const getPlace = async (req = request, res = response) => {

    const { id } = req.params;

    const userDivisionsId = req.user[0].users_divisions;

    const place = await pool.query(
        "SELECT * FROM dispatchplaces WHERE id = ? AND divisions_id = ?", [id, userDivisionsId]
    )

    res.status(200).json({
        place,
    })
};

const createPlace = async (req = request, res = response) => {

    const { place } = req.body;
    const divisions_id = req.user[0].users_divisions;

    const dispatchPlaces = { divisions_id, place };

    try {
        const resp = await pool.query("INSERT INTO dispatchplaces set ?", [dispatchPlaces]);

        const id = resp.insertId;

        return res.status(200).json({
            msg: "Lugar de despacho registrado con éxito.",
            id
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: "Error a registrar el lugar de despacho, intente nuevamente."
        });
    };
};

const updatePlace = async (req = request, res = response) => {

    const { id } = req.params;
    const getUser = req.user;
    const userDivisionsId = getUser[0].users_divisions;

    const { place } = req.body;

    const dispatchPlace = {
        place
    };

    try {
        const resp = await pool.query(
            "UPDATE dispatchplaces SET ? WHERE id = ? AND status = 1 AND divisions_id = ?",
            [dispatchPlace, id, userDivisionsId]
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
};

const deletePlace = async (req = request, res = response) => {

    const { id } = req.params;
    const userDivisionsId = req.user[0].users_divisions;

    try {

        await pool.query('UPDATE dispatchplaces SET status = 0 WHERE id = ? AND divisions_id = ?', [id, userDivisionsId])

        return res.status(200).json({
            msg: "Lugar de despacho eliminado",
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: "Error al eliminar el lugar de despacho",
        });
    }
};

module.exports = {
    getPlaces,
    getPlace,
    createPlace,
    updatePlace,
    deletePlace
}