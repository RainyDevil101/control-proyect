const { response } = require("express");
const pool = require("../database/database");

// Get users

const getDivisions = async (req = request, res = response) => {

  const divisions = await pool.query("SELECT * FROM divisions WHERE status = 1");

  res.status(200).json({
    divisions,
  });
};

const getDivision = async (req = request, res = response) => {
  const { id } = req.params;

  const division = await pool.query("SELECT * FROM divisions WHERE id = ?", [
    id,
  ]);

  res.status(200).json({
    division
  });
};

const createDivisions = async (req = request, res = response) => {

  const division = req.body;

  await pool.query("INSERT INTO divisions set ?", [division]);

  res.status(200).json({
    division,
  });
};

const updateDivision = async (req = request, res = response) => {

  const id = req.params.id;

  const name = req.body.updateForum;

  const division = {
    name,
  };

  await pool.query("UPDATE divisions SET ? WHERE id = ? AND status = 1", [
    division, id
  ]);

  res.status(200).json({
    msg: "División actualizada",
    ok: true,
  });
};

const deleteDivision = async (req = request, res = response) => {
  const id = req.params.id;

  await pool.query("UPDATE divisions SET status = 0 WHERE id = ?", [id])

  res.status(200).json({
    msg: "División eliminada",
    ok: true,
  });
};

module.exports = {
  getDivisions,
  getDivision,
  createDivisions,
  updateDivision,
  deleteDivision,
};
