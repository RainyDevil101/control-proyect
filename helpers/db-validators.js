const pool = require("../database/database");

const mExists = async (email = "") => {



  const emailExist = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

  if(emailExist.length > 0) {
    throw new Error(`El correo ${email} ya se encuentra en uso`)
  }
  
};
const rutUnique = async (rut = "") => {
    
    const rutExists = await pool.query("SELECT * FROM users WHERE rut = ?", [
      rut,
    ]);

    if (rut.length > 0) {
      const rut = rutExists[0].rut;
      console.log(rut);
      throw new Error(`El rut ${rut} ya está registrado`);
    }
};
const mExistsUpdate = async (email = "", res) => {

  const userUpdating = res.req.params.id;

  const usersNotEqual = await pool.query("SELECT * FROM users WHERE id != ?", [userUpdating]).then(function(usersNotEqual) {
    return usersNotEqual.filter(x => x.email === email)
  });

  if( usersNotEqual.length > 0) {
    throw new Error(`El correo ${email} ya está registrado`)
  }
};


module.exports = {
  mExists,
  mExistsUpdate,
  rutUnique,
  // userByIdExists,
  // validRole,
  // allowedCollections,
  // forumByIdExists,
  // validPassword,
};
