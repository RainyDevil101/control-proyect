const { response } = require("express");
const nodemailer = require("nodemailer");
const pool = require("../database/database");

// Get users

const getMaterials = async (req = request, res = response) => {
  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const getMaterials = await pool.query(
    "SELECT * FROM materials WHERE status = 1 AND materials_divisions = ?",
    [userDivisionsId]
  );

  const materials = Object.values(JSON.parse(JSON.stringify(getMaterials)));

  res.status(200).json({
    materials,
  });
};

const getMaterial = async (req = request, res = response) => {
  const { id } = req.params;

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const material = await pool.query(
    "SELECT * FROM materials WHERE id = ? AND materials_divisions = ?",
    [id, userDivisionsId]
  );

  res.status(200).json({
    material,
  });
};

const createMaterial = async (req = request, res = response) => {
  let emails = [];

  const {
    cantidad_bultos,
    cantidad,
    code,
    destination,
    transport_number,
    ubication,
  } = req.body.materialForm;

  const now = new Date();
  const alarm = now.setDate(now.getDate() + 1);
  const alarm_one = new Date(alarm);

  // const alarm_two = new Date();

  const image_one = req.body.imgOne;
  const image_two = "PENDIENTE";
  const materials_divisions = req.body.userDivision;
  const created_by = req.body.id;
  const created_by_name = req.user[0].fullname;
  const created_by_lastname = req.user[0].fulllastname;
  const transport_number_two = "PENDIENTE";
  const destination_id = destination.id;
  const destination_name = destination.nombre;

  const material = {
    cantidad_bultos,
    materials_divisions,
    cantidad,
    code,
    ubication,
    alarm_one,
    destination_id,
    destination_name,
    image_one,
    image_two,
    transport_number,
    transport_number_two,
    created_by,
    created_by_name,
    created_by_lastname,
  };

  try {
    const userDivision = req.user[0].users_divisions;

    const resp = await pool.query("INSERT INTO materials set ?", [material]);

    const id = resp.insertId;

    const usersEmail = await pool.query(
      "SELECT email FROM users WHERE users_divisions = ? AND email != 'PENDIENTE'",
      [userDivision]
    );

    const usersEmailJson = Object.values(
      JSON.parse(JSON.stringify(usersEmail))
    );

    for (const e of usersEmailJson) {
      emails.push(e.email);
    }

    if (emails.length === 0) {
      return res.status(200).json({
        msg: "Material registrado",
        id,
      });
    } else {
      const transporter = nodemailer.createTransport({
        host: process.env.HOSTM,
        port: process.env.PORTM,
        secure: false,
        auth: {
          user: process.env.USERM,
          pass: process.env.PASSWORDM,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      await transporter.sendMail(
        {
          from: "Control de materiales <controlcargas@cacciuttolo.cl",
          to: "Mcarr049@contratistas.codelco.cl",
          subject: "Nuevo registrado para ser despachado.",
          text: `Estimado, se ha registrado un nuevo bulto para ser despachado con id: ${id}.
        
        Por favor no responder este correo.
        `,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log(info);
          }
        }
      );

      return res.status(200).json({
        msg: "Material registrado con éxito y emails enviados",
        id,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Error al registrar, intente nuevamente",
    });
  }
};

const updateMaterial = async (req = request, res = response) => {
  const { id } = req.params;

  const getUser = req.user;

  const userDivisionsId = getUser[0].users_divisions;

  const { transport_number_two } = req.body.materialUpdate;

  const image_two = req.body.pictureTwo;
  const date_out = new Date();
  const pendiente = 0;
  const despatched_by = req.body.id;
  const despatched_by_name = req.user[0].fullname;
  const despatched_by_lastname = req.user[0].fulllastname;

  const material = {
    transport_number_two,
    image_two,
    date_out,
    pendiente,
    despatched_by,
    despatched_by_name,
    despatched_by_lastname,
  };

  const resp = await pool.query(
    "UPDATE materials SET ? WHERE id = ? AND status = 1 AND materials_divisions = ?",
    [material, id, userDivisionsId]
  );

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
