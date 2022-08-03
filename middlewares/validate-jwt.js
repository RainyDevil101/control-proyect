const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const pool = require("../database/database");

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "There is not token",
    });
  }

  try {
      const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

      const getUser = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

      const user = Object.values(JSON.parse(JSON.stringify(getUser)));

      if (user[0].length === 0) {
        return res.status(401).json({
            msg: 'Invalid token 1'
        })
      }

      // Verify user status

      if (!user[0].status) {
        return res.status(401).json({
            msg: 'Invalid token 2'
        })
      }

      req.id = id;
      req.user = user;

      next();
      
    } catch (error) {

    res.status(401).json({
      msg: "Invalid token",
    });
  }
};

module.exports = {
  validateJWT,
};
