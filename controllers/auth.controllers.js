const { response } = require("express");
const bcryptjs = require("bcryptjs");
const pool = require("../database/database");
const { generateJWT } = require("../helpers/generate-jwt");

const login = async (req, res = response) => {

  console.log(generateJWT, 1);

  const { rut, passwordT } = req.body;

  try {
    //Email exists

    const user = await pool.query("SELECT * FROM users WHERE rut = ? LIMIT 1", [
      rut,
    ]);

    if (user.length === 0) {
      return res.status(400).json({
        msg: "Usuario / contraseña no correctos",
      });
    }

    //User is active

    if (!user[0].status) {
      return res.status(400).json({
        msg: "Usuario / contraseña no correctos",
      });
    }

    //Correct password

    if (user[0].password !== user[0].firstpassword) {

      const validatePassword = bcryptjs.compareSync(
        passwordT,
        user[0].password
      );

      if (validatePassword === true) {

        const token = await generateJWT(user[0].id);

        return res.status(200).json({
          user,
          token,
        });
      } else {
        return res.status(400).json({
          msg: "Usuario / contraseña no correctos",
        });
      }
    }

    if (user[0].password === user[0].firstpassword) {
      
      if (passwordT === user[0].firstpassword) {
        
        const token = await generateJWT(user[0].id);

        return res.status(200).json({
          user,
          token,
        });

      } else {
        return res.status(400).json({
          msg: "Usuario / contraseña no correctos",
        });
      }

    }

  } catch (error) {
  console.log(generateJWT, 2);

    console.log(error);
    res.status(400).json({
      msg: "Not request",
    });
  }
};
const renovateToken = async (req, res = response) => {

  const { user } = req;

  const token = await generateJWT(user[0].id);

  res.json({
    token,
    user,
  });
};

module.exports = {
  login,
  renovateToken,
};
