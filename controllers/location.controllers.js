const { response } = require("express");
const pool = require("../database/database");

// Get users

const getLocations = async (req = request, res = response) => {
  const getLocations = await pool.query(
    "SELECT * FROM locations WHERE status = 1 ORDER BY name ASC"
  );

  const locations = Object.values(JSON.parse(JSON.stringify(getLocations)));

  res.status(200).json({
    locations,
  });
};

const getLocation = async (req = request, res = response) => {
  const { id } = req.params;

  const location = await pool.query("SELECT * FROM locations WHERE id = ?", [
    id,
  ]);

  res.status(200).json({
    location,
  });
};

const createLocation = async (req = request, res = response) => {
  const { name, sector, location_division } = req.body.locationForm;

  const location = {
    name,
    sector,
    location_division,
  };

  await pool.query("INSERT INTO locations set ?", [location]);

  res.status(200).json({
    msg: "createLocation",
    location,
  });
};

const updateLocation = async (req = request, res = response) => {
  const id = req.params.id;

  const name = req.body.updateForum;

  const ubication = {
    name,
  };

  await pool.query("UPDATE locations SET ? WHERE id = ? AND status = 1", [
    ubication,
    id,
  ]);

  res.status(200).json({
    msg: "Ubicación actualizada",
    ok: true,
  });
};

const deleteLocation = async (req = request, res = response) => {
  res.status(200).json({
    msg: "deleteLocation",
  });
};

module.exports = {
  getLocations,
  getLocation,
  createLocation,
  updateLocation,
  deleteLocation,
};
