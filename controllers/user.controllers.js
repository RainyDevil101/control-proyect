const { response } = require('express');
const pool = require('../database/database');
const bcryptjs = require('bcryptjs');
const { clean, format } = require('rut.js');

// Get users

const getUsers = async (req = request, res = response) => {
  const userDivisionsId = req.user[0].users_divisions;
  const { page, all } = req.query;

  if (all === 'true') {
    const [getUsers] = await Promise.all([
      pool.query(
        'SELECT id, fullname, fulllastname, email, rut, role, position, users_divisions FROM users WHERE status = 1 AND users_divisions = ?',
        [userDivisionsId]
      ),
    ]);

    const users = Object.values(JSON.parse(JSON.stringify(getUsers)));

    return res.status(200).json({
      users,
    });
  }

  let getPage = page;

  if (isNaN(getPage)) {
    return res.status(400).json({
      msg: 'Página no válida',
    });
  }

  const getTotal = await pool.query(
    'SELECT COUNT(*) AS Total FROM users WHERE status = 1 AND users_divisions = ?',
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

  const getFrom = setPage * getLimit - getLimit;

  const [getUsers] = await Promise.all([
    pool.query(
      'SELECT id, fullname, fulllastname, email, rut, role, position, users_divisions FROM users WHERE status = 1 AND users_divisions = ? LIMIT ?, ?',
      [userDivisionsId, getFrom, getLimit]
    ),
  ]);

  const users = Object.values(JSON.parse(JSON.stringify(getUsers)));
  const totalFormated = Object.values(JSON.parse(JSON.stringify(getTotal[0])));

  res.status(200).json({
    users,
    total: totalFormated,
    numberOfPages,
    currentPage: setPage,
  });
};

const getUser = async (req = request, res = response) => {
  const { id } = req.params;

  const user = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

  res.status(200).json({
    user,
  });
};

const createUser = async (req = request, res = response) => {
  const {
    fullname,
    fulllastname,
    passwordT,
    role,
    email,
    position,
    users_divisions,
  } = req.body;

  // LIMPIA EL RUT
  const cleanRut = clean(req.body.rut);
  // CAMBIO DE FORMATO PARA SER GUARDADO
  const rut = format(cleanRut);

  const salt = bcryptjs.genSaltSync(10);
  const password = bcryptjs.hashSync(passwordT, salt);

  const userCreated = {
    fullname,
    fulllastname,
    password,
    role,
    email,
    position,
    rut,
    users_divisions,
  };

  await pool.query('INSERT INTO users set ?', [userCreated]);

  res.status(200).json({
    msg: 'Usuario creado con éxito',
  });
};

const updateUser = async (req = request, res = response) => {
  const { id } = req.params;

  const { password, created_at, updated_at, status, ...rest } = req.body.user;

  if (password) {
    //ENCRIPTAR CONTRASEÑA

    const salt = bcryptjs.genSaltSync(10);
    rest.password = bcryptjs.hashSync(password, salt);
  }

  await pool.query('UPDATE users SET ? WHERE id = ?', [rest, id]);

  res.status(200).json({
    msg: 'Usuario actualizado',
    ok: true,
  });
};

const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;

  // await pool.query("UPDATE users SET status = 0 WHERE id = ?", [id]);

  await pool.query('DELETE users WHERE rut = 11.730.738-7');

  res.status(200).json({
    msg: 'El usuario fue eliminado correctamente',
    // uid,
    // userAuth
  });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
