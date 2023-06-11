const { response } = require("express");
const cloudinary = require('cloudinary').v2
const pool = require("../database/database");

cloudinary.config(process.env.CLOUDINARY_URL);

// Get users

const getRefunds = async (req = request, res = response) => {

    const getUser = req.user;

    const userDivisionsId = getUser[0].users_divisions;


    try {

        const getRefunds = await pool.query(
            "SELECT r.*, u.fullname, u.fulllastname FROM refund r INNER JOIN users u ON r.created_by = u.id WHERE r.status = 1 AND r.refund_division = ?;",
            [userDivisionsId]

        );

        const refunds = Object.values(JSON.parse(JSON.stringify(getRefunds)));

        res.status(200).json({
            refunds,
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Error"
        })
    }

};

const getRefund = async (req = request, res = response) => {

    const { id } = req.params;

    const getUser = req.user;

    const userDivisionsId = getUser[0].users_divisions;

    try {
        const refund = await pool.query(
            "SELECT * FROM refund WHERE id = ? AND refund_division = ?",
            [id, userDivisionsId]
        );

        res.status(200).json({
            refund,
        });
    } catch (error) {

        res.status(400).json({
            msg: "Error"
        });
    };

};

const createRefund = async (req = request, res = response) => {

    const { code, quantity, packageQuantity, driverName, driverLastname, patent, dispatchPlaces, possibleUbication, client, observations } = req.body.refundForm;

    const image_one = req.body.imgOne;
    const image_two = "PENDIENTE";
    const refund_division = req.body.userDivision;
    const created_by = req.id;
    const reserve = "PENDIENTE";
    const delivery = "PENDIENTE";
    const dispatchPlaces_id = dispatchPlaces;

    const refund = {
        code,
        quantity,
        packageQuantity,
        driverName,
        driverLastname,
        patent,
        dispatchPlaces_id,
        possibleUbication,
        client,
        observations,
        image_one,
        image_two,
        created_by,
        refund_division,
        reserve,
        delivery
    };

    try {

        const resp = await pool.query("INSERT INTO refund set ?", [refund]);

        const id = resp.insertId;

        return res.status(200).json({
            msg: "Retorno registrado",
            id
        })

    } catch (error) {
        res.status(400).json({
            msg: "Error"
        })
    }

}

const updateRefund = async (req = request, res = response) => {

    const { id } = req.params;
    const { possibleUbication, pictureTwo } = req.body;
    const userDivisionsId = req.user[0].users_divisions;

    const statusDelivery = 'ALMACENADO';
    const image_two = pictureTwo;
    const date_out = new Date();
    const dispatched_by = req.user[0].id;

    const refund = {
        possibleUbication,
        statusDelivery,
        image_two,
        date_out,
        dispatched_by,
    };

    try {

        const resp = await pool.query(
            "UPDATE refund SET ? WHERE id = ? AND status = 1 AND refund_division = ?",
            [refund, id, userDivisionsId]
        );

        const idUpdated = resp.insertId;

        res.status(200).json({
            idUpdated,
        });

    } catch (error) {

        res.status(400).json({
            msg: "Error"
        })

    }

};

const finishRefund = async (req = request, res = response) => {

    const { id } = req.params;
    const { dataFormDelivery: delivery, dataFormReserve: reserve } = req.body;
    const userDivisionsId = req.user[0].users_divisions;


    const finish_date = new Date();
    const statusDelivery = 'FINALIZADO';

    const refund = {
        delivery,
        reserve,
        finish_date,
        statusDelivery
    };

    try {

        const resp = await pool.query(
            "UPDATE refund SET ? WHERE id = ? AND status = 1 AND refund_division = ?",
            [refund, id, userDivisionsId]
        )
        const idUpdated = resp.insertId;
        res.status(200).json({
            idUpdated
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Error"
        });
    };
};

const updateRefundData = async (req = request, res = response) => {

    const { id } = req.params;
    const userDivisionsId = req.user[0].users_divisions;
    const refundToUptade = req.body.trimmedRefund;
    const collection = 'refunds';

    if (refundToUptade.imageToDelete) {
        const deleteImageOne = refundToUptade.imageToDelete;

        const nameArr = deleteImageOne.split('/');
        const name = nameArr[nameArr.length - 1];
        const [public_id] = name.split('.');

        cloudinary.uploader.destroy(`${collection}/${public_id}`);

        delete refundToUptade.imageToDelete;
    }

    const { code,
        quantity,
        packageQuantity,
        driverName,
        driverLastname,
        patent,
        possibleUbication,
        dispatchPlaces_id,
        client,
        observations,
        image_one
    } = refundToUptade;

    const refund = {
        code,
        quantity,
        packageQuantity,
        driverName,
        driverLastname,
        patent,
        possibleUbication,
        dispatchPlaces_id,
        client,
        observations,
        image_one
    };

    try {

        const resp = await pool.query(
            "UPDATE refund SET ? WHERE id = ? AND status = 1 AND refund_division = ?",
            [refund, id, userDivisionsId]
        )

        const idUpdated = resp.insertId;

        return res.status(200).json({
            ok: true,
            idUpdated,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: "Error",
        });
    };
};

const updateRefundImageOne = async (req = request, res = response) => {

    if (!req.files.file) return;

    // const nameArr = linkImageOne.split('/');
    // const name = nameArr[nameArr.length - 1];
    // const [public_id] = name.split('.');
    const { tempFilePath } = req.files.file;


    try {

        const { secure_url } = await cloudinary.uploader.upload(tempFilePath, { folder: "refunds" });


        return res.status(200).json({
            ok: true,
            secure_url,
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            secure_url: null,
        });
    };

};

const deleteRefund = async (req = request, res = response) => {

    const { id } = req.params;
    const userDivisionsId = req.user[0].users_divisions;
    const collection = 'refunds';

    try {

        const getRefund = await pool.query(
            "SELECT * FROM refund WHERE id = ? AND refund_division = ? AND status = 1",
            [id, userDivisionsId]
        );

        const refund = Object.values(JSON.parse(JSON.stringify(getRefund)));

        if (refund.length === 0) {
            return res.status(400).json({
                msg: "Error",
                ok: false,
            });
        };

        const linkImageOne = refund[0].image_one;

        const nameArr = linkImageOne.split('/');
        const name = nameArr[nameArr.length - 1];
        const [public_id] = name.split('.');

        cloudinary.uploader.destroy(`${collection}/${public_id}`);

        const getDeleteRefund = await pool.query("DELETE FROM refund WHERE id = ? AND refund_division = ? AND status = 1;", [id, userDivisionsId])

        const deleteRefund = JSON.parse(JSON.stringify(getDeleteRefund));

        if (deleteRefund.affectedRows === 0) {
            return res.status(400).json({
                msg: "Error",
                ok: false,
            });
        };

        return res.status(200).json({
            msg: "Material eliminado",
            ok: true,
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Error",
            ok: false,
        });
    };
};

module.exports = {
    createRefund,
    deleteRefund,
    finishRefund,
    getRefund,
    getRefunds,
    updateRefund,
    updateRefundImageOne,
    updateRefundData,
};
