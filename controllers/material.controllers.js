const { response } = require("express");
const pool = require("../database/database");

// Get users

const getMaterials = async (req = request, res = response) => {

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const getMaterials = await pool.query("SELECT * FROM materials WHERE status = 1 AND materials_divisions = ?", [userDivisionsId]);

  const materials = Object.values(JSON.parse(JSON.stringify(getMaterials)));

  res.status(200).json({
    materials,
  });
};

const getMaterial = async (req = request, res = response) => {

  const { id } = req.params;

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const material = await pool.query("SELECT * FROM materials WHERE id = ? AND materials_divisions = ?", [
    id, userDivisionsId
  ]);

  res.status(200).json({
    material,
  });
};

const createMaterial = async (req = request, res = response) => {

  const {
    cantidad_bultos,
    cantidad,
    code,
    destination,
    transport_number,
  } = req.body.materialForm;

  const now = new Date();
  const alarm = now.setDate(now.getDate() + 1);
  const alarm_one = new Date(alarm);

  // const alarm_two = new Date();

  const image_one = req.body.imgOne;
  const image_two = "PENDIENTE";
  const materials_divisions = req.body.userDivision;
  const created_by = req.body.id;
  const transport_number_two = "PENDIENTE";
  
  const material = {
    cantidad_bultos,
    materials_divisions,
    cantidad,
    code,
    alarm_one,
    destination,
    image_one,
    image_two,
    transport_number,
    transport_number_two,
    created_by,
  };

  const resp = await pool.query("INSERT INTO materials set ?", [material]);

  const id = resp.insertId;

  res.status(200).json({
    id,
  });
};

const updateMaterial = async (req = request, res = response) => {

  const { id } = req.params;

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const {
    transport_number_two,
  } = req.body.materialUpdate;

  const image_two = req.body.pictureTwo;
  const date_out = new Date();
  const pendiente = 0;
  const alarm_one_on = 0;

  const material = {
    transport_number_two,
    image_two,
    date_out,
    pendiente,
    alarm_one_on
  };
  
  const resp = await pool.query('UPDATE materials SET ? WHERE id = ? AND status = 1 AND materials_divisions = ?', [material, id, userDivisionsId]);
  
  const idUpdated = resp.insertId;
  
  res.status(200).json({
    idUpdated,
  });
};

const deleteMaterial = async (req = request, res = response) => {
  res.status(200).json({
    msg: "deleteMaterial",
  });
};

module.exports = {
  getMaterials,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
};
