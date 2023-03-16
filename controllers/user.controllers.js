const { response } = require("express");
const pool = require("../database/database");
const bcryptjs = require("bcryptjs");
const { clean, format } = require("rut.js")

// Get users

const getUsers = async (req = request, res = response) => {

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const users = await pool.query(
    "SELECT id, fullname, fulllastname, email, rut, role, position, users_divisions FROM users WHERE status = 1 AND users_divisions = ?",
    [userDivisionsId]
  );

  res.status(200).json({
    users,
  });
};

const getUser = async (req = request, res = response) => {
  const { id } = req.params;

  const user = await pool.query("SELECT * FROM users WHERE id = ?", [id]);

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

  await pool.query("INSERT INTO users set ?", [userCreated]);

  res.status(200).json({
    msg: "Usuario creado con éxito",
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

  await pool.query("UPDATE users SET ? WHERE id = ?", [rest, id]);

  res.status(200).json({
    msg: "Usuario actualizado",
    ok: true,
  });
};

const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;

  await pool.query("UPDATE users SET status = 0 WHERE id = ?", [id]);

  res.status(200).json({
    msg: "El usuario fue eliminado correctamente",
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
