const { response } = require("express");
const pool = require("../database/database");

// Get users

const getClients = async (req = request, res = response) => {

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const getClients = await pool.query(
    "SELECT * FROM clientes WHERE status = 1 AND division_id = ?",
    [userDivisionsId]
  );

  const clients = Object.values(JSON.parse(JSON.stringify(getClients)));

  res.status(200).json({
    clients,
  });
};

const getClient = async (req = request, res = response) => {

  const { id } = req.params;

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const client = await pool.query(
    "SELECT * FROM clientes WHERE id = ? AND division_id = ?",
    [id, userDivisionsId]
  );

  res.status(200).json({
    client,
  });
};

const createClient = async (req = request, res = response) => {

  const { name } = req.body;


  const division_id = req.user[0].users_divisions;

  const client = {
    name,
    division_id
  };

  const resp = await pool.query("INSERT INTO clientes set ?", [client]);
  
  const id = resp.insertId;

  return res.status(200).json({
    msg: "Cliente registrado",
    id
  })

}

const updateClient = async (req = request, res = response) => {

  const { id } = req.params;

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const { name } = req.body.clientUpdate;

  const client = {
    name
  };

  const resp = await pool.query(
    "UPDATE clientes SET ? WHERE id = ? AND status = 1 AND division_id = ?",
    [client, id, userDivisionsId]
  );

  const idUpdated = resp.insertId;

  res.status(200).json({
    idUpdated,
  });
};

const deleteClient = async (req = request, res = response) => {
  res.status(200).json({
    msg: "Cliente deleted",
  });
};


module.exports = {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
};
