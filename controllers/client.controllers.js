const { response } = require("express");
const pool = require("../database/database");

// Get users

const getClients = async (req = request, res = response) => {

  const userDivisionsId = req.user[0].users_divisions;
  const { page, all } = req.query;

  if (all === 'true') {

    const [getClients] = await Promise.all([
      pool.query(
        "SELECT * FROM clientes WHERE status = 1 AND division_id = ?",
        [userDivisionsId]
      )
    ])

    const clients = Object.values(JSON.parse(JSON.stringify(getClients)));


    return res.status(200).json({
      clients,
    });
  }

  let getPage = page;

  if (isNaN(getPage)) {
    return res.status(400).json({
      msg: "Pagina no válida"
    });
  }


  const getTotal = await pool.query(
    "SELECT COUNT(*) AS Total FROM clientes WHERE status = 1 AND division_id = ?",
    [userDivisionsId]
  );

  console.log(getTotal, 11111);

  if (getTotal[0] === 0) {
    const [getClients] = await Promise.all([
      pool.query(
        "SELECT * FROM clientes WHERE status = 1 AND division_id = ?",
        [userDivisionsId]
      )
    ])

    const clients = Object.values(JSON.parse(JSON.stringify(getClients)));


    return res.status(200).json({
      clients,
    });

  }

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

  const [getClients] = await Promise.all([
    pool.query(
      "SELECT * FROM clientes WHERE status = 1 AND division_id = ? LIMIT ?, ?",
      [userDivisionsId, getFrom, getLimit]
    )
  ])

  const clients = Object.values(JSON.parse(JSON.stringify(getClients)));

  res.status(200).json({
    clients,
    total,
    numberOfPages,
    currentPage: setPage
  });
};

const getClient = async (req = request, res = response) => {

  const { id } = req.params;

  const userDivisionsId = req.user[0].users_divisions;

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

  try {

    const resp = await pool.query("INSERT INTO clientes set ?", [client]);

    const id = resp.insertId;

    return res.status(200).json({
      msg: "Cliente registrado",
      id
    })

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Error a registrar el cliente, intente nuevamente."
    });
  };


}

const updateClient = async (req = request, res = response) => {


  const { id } = req.params;
  const getUser = req.user;
  const userDivisionsId = getUser[0].users_divisions;

  const { name } = req.body;

  const client = {
    name
  };

  try {
    const resp = await pool.query(
      "UPDATE clientes SET ? WHERE id = ? AND status = 1 AND division_id = ?",
      [client, id, userDivisionsId]
    );

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

const deleteClient = async (req = request, res = response) => {

  const { id } = req.params;
  const getUser = req.user;
  const userDivisionsId = getUser[0].users_divisions;

  try {

    await pool.query('UPDATE clientes SET status = 0 WHERE id ? AND division_id = ?', [id, userDivisionsId])

    return res.status(200).json({
      msg: "Cliente eliminado",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Error al eliminar cliente",
    });
  }


};


module.exports = {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
};
