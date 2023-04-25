const { response } = require('express');
const pool = require('../database/database');

const getRefundByDate = async (req = request, res = response) => {

    const { initDate, finDate } = req.body;
    const userDivisionsId = req.user[0].users_divisions;
    const params = [];

    let query = "SELECT r.id, r.code, r.quantity, r.packageQuantity, r.possibleUbication, r.patent, r.dispatched_by, r.date_in, r.finish_date, u.fullname, u.fulllastname FROM refund r INNER JOIN users u ON r.dispatched_by = u.id WHERE r.status = 1 AND r.statusDelivery = 'FINALIZADO' AND r.refund_division = ?";

    let queryTotal = "SELECT COUNT(*) AS Total FROM refund WHERE status = 1 AND statusDelivery = 'FINALIZADO' AND refund_division = ?";

    params.push(userDivisionsId);

    if (initDate.length > 0) {
        query = query + " AND cast(r.finish_date as date) >= ?";
        queryTotal = queryTotal + " AND cast(finish_date as date) >= ?";
        params.push(initDate);
    };

    if (finDate.length > 0) {
        query = query + " AND cast(r.finish_date as date) <= ?";
        queryTotal = queryTotal + " AND cast(finish_date as date) <= ?";
        params.push(finDate);
    };

    try {

        const [getRefunds, getTotalRefunds] = await Promise.all([
            pool.query(
                query,
                params
            ),
            pool.query(
                queryTotal,
                params
            )
        ])

        const refunds = Object.values(JSON.parse(JSON.stringify(getRefunds)));
        const total =  Object.values(JSON.parse(JSON.stringify(getTotalRefunds[0])));

        res.status(200).json({
            refunds,
            total
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Error"
        })
    }

    // console.log(query);


};

module.exports = {
    getRefundByDate
};