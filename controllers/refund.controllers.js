const { response } = require("express");
const pool = require("../database/database");

// Get users

const getRefunds = async (req = request, res = response) => {

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const getRefunds = await pool.query(
    "SELECT * FROM refund WHERE status = 1 AND refund_division = ?",
    [userDivisionsId]
  );

  const refunds = Object.values(JSON.parse(JSON.stringify(getRefunds)));

  res.status(200).json({
    refunds,
  });
};

const getRefund = async (req = request, res = response) => {

  const { id } = req.params;

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const refund = await pool.query(
    "SELECT * FROM refund WHERE id = ? AND refund_division = ?",
    [id, userDivisionsId]
  );

  res.status(200).json({
    refund,
  });
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

  const resp = await pool.query("INSERT INTO refund set ?", [refund]);

  const id = resp.insertId;

  return res.status(200).json({
    msg: "Retorno registrado",
    id
  })

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

  const resp = await pool.query(
    "UPDATE refund SET ? WHERE id = ? AND status = 1 AND refund_division = ?",
    [refund, id, userDivisionsId]
  );

  const idUpdated = resp.insertId;

  res.status(200).json({
    idUpdated,
  });
};

const finishRefund = async (req = request, res = response) => {

  const { id } = req.params;
  const { dataFormDelivery: delivery, dataFormReserve: reserve } = req.body;
  const userDivisionsId =  req.user[0].users_divisions;


  const finish_date = new Date();
  const statusDelivery = 'FINALIZADO';

  const refund = {
    delivery,
    reserve,
    finish_date,
    statusDelivery
  };

  const resp = await pool.query(
    "UPDATE refund SET ? WHERE id = ? AND status = 1 AND refund_division = ?",
    [refund, id, userDivisionsId]
  )

  const idUpdated = resp.insertId;

  res.status(200).json({
    idUpdated
  })
};

const deleteRefund = async (req = request, res = response) => {
  res.status(200).json({
    msg: "deleteMaterial",
  });
};

module.exports = {
  getRefunds,
  getRefund,
  createRefund,
  updateRefund,
  finishRefund,
  deleteRefund,
};
