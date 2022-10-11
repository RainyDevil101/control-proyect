const { response } = require("express");
const XLSX = require("xlsx");
const path = require("path");
const pool = require("../database/database");
const bcryptjs = require("bcryptjs");
const { validate, clean, format } = require("rut.js");

const postUsersExcel = async (req, res = response) => {
    // ARRAY DE USUARIOS VERIFICADOS PARA SER REGISTRADOS
    let users = [];

    // DIVISIONES PERMITIDAS Y SUS ID
    const division = {
        TENIENTE: "1000",
        ANDINA: "1001",
        VENTANAS: "1002",
        SALVADOR: "1003",
        CHUQUICAMATA: "1004",
        "ESPORADICOS ANDINA": "1005",
        "ESPORADICOS TENIENTE": "1006",
        "CASA MATRIZ": "1007",
    };

    // RELACIÓN CARGO Y ROLE DE USUARIO
    const role = {
        "OPERADOR LOGISTICO": "OPERATOR_ROLE",
        PLANIFICADOR: "PLANNER_ROLE",
    };

    //VALORES ASIGNADOS EN CASO DE QUE EL CARGO Y LA DIVISIÓN NO SEAN VÁLIDAS
    const cargoNull = null;
    const divisionNull = null;

    // RUTA DEL ARCHIVO
    const ruta = path.join(__dirname, "../uploads/file", "users_excel.xlsx");
    // LEER EL ARCHIVO
    const workbook = XLSX.readFile(ruta);
    // LEER EL NOMBRE DE LA HOJA
    const workBookSheets = workbook.SheetNames;
    // VERIFICAR QUE EL ARCHIVO SOLO TENGA UNA HOJA
    if (workBookSheets.length > 1) {
        return res.status(400).json({
            msg: "Archivo no válido",
        });
    }
    // VERIFICAR QUE EL NOMBRE DE LA HOJA CORRESPONDA A USUARIOS
    if (workBookSheets[0] !== "USUARIOS") {
        return res.status(400).json({
            msg: "Archivo no válido",
        });
    }

    // SE ELIGE LA PRIMERA HOJA PARA EXTRAER DATOS
    const sheet = workBookSheets[0];
    // SE PASA FORMATO JSON PARA PODER LEER LOS DATOS
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

    // VERIFICAR QUE SEAN DATOS VÁLIDOS Y QUE NO SEA UNA HOJA VACÍA
    if (!dataExcel) {
        return res.status(400).json({
            msg: "El archivo no es válido",
        });
    }

    if (dataExcel.length === 0) {
        return res.status(400).json({
            msg: "El archivo no es válido",
        });
    }

    // ANALISIS DE LOS DATOS Y VERIFICACIÓN
    for (const d of dataExcel) {
        try {
            //NOMBRES MENOR A 30 CARACTERES Y NO SE ENCUENTRE VACÍO
            if (d.NOMBRES.length > 100 || d.NOMBRES.length === 0) {
                d.NOMBRE = null;
            }

            //APELLIDOS MENOR A 100 CARACTERES Y NO SE ENCUENTRE VACÍO
            if (d.APELLIDOS.length > 100 || d.APELLIDOS.length === 0) {
                d.APELLIDOS = null;
            }

            // SE JUNTAN LOS APELLIDOS PARA CREAR CONTRASEÑA POR DEFECTO
            if (d.APELLIDOS) {
                let lastnameFormated = d.APELLIDOS.replace(/\s/g, "");

                let lastNameLowerCase = lastnameFormated.toLowerCase();

                let salt = bcryptjs.genSaltSync(10);

                d.PASSWORD = bcryptjs.hashSync(lastNameLowerCase, salt);
            }

            // CARGO MENOR A 30 CARACTERES Y NO SE ENCUENTRE VACÍO
            if (d.CARGO.length > 30 || d.CARGO.length === 0) {
                d.CARGO = null;
            }

            // VALIDAR EMAIL CARACTERES
            if (d.EMAIL.length > 100 || d.EMAIL.length === 0) {
                d.EMAIL = null;
            }

            // LIMPIA EL RUT
            let cleanRut = clean(d.RUT);
            // CAMBIO DE FORMATO PARA SER GUARDADO
            let formatRut = format(cleanRut);
            // VALIDACIÓN DEL RUT, RETORNA TRUE OR FALSE
            let validateRut = validate(formatRut);
            // RETORNA EL ID DE LA DIVISIÓN, CASO CONTRARIO NULL
            let divisionId = division[d.DIVISION] || divisionNull;
            // RETORNA EL CARGO, CASO CONTRARIO NULL
            let userRole = role[d.CARGO] || cargoNull;

            // AGREGA LOS USUARIOS CON LOS DATOS CORRECTOS AL ARRAY DE USERS
            if (
                divisionId !== null &&
                d.NOMBRES !== null &&
                d.APELLIDOS !== null &&
                d.CARGO !== null &&
                d.EMAIL !== null &&
                validateRut !== false &&
                d.PASSWORD !== null
            ) {
                users.push({
                    fullname: d.NOMBRES,
                    fulllastname: d.APELLIDOS,
                    email: d.EMAIL,
                    rut: formatRut,
                    users_divisions: divisionId,
                    role: userRole,
                    position: d.CARGO,
                    password: d.PASSWORD
                });
            }
        } catch (error) {
            console.log(error);

            return res.status(400).json({
                msg: "Pongase en contacto con el administrador",
            });
        }
    }

    //VERIFICACIÓN DE ARRAY USERS NO VACÍO

    if (users.length === 0) {
        return res.status(400).json({
            msg: "No hay usuarios válidos para ser agregados",
        });
    }

    //EXTRACCIÓN RUT DE CADA USUARIO
    const rutUsers = users.map((a) => a.rut);

    if (rutUsers.length === 0) {
        return res.status(400).json({
            msg: "Verifique los datos",
        });
    }

    //VERIFICAR QUE LOS USUARIOS NO SE ENCUENTRAN YA REGISTRADOS

    const getUsersRut = await pool.query(
        "SELECT rut FROM users WHERE rut IN (?)",
        [rutUsers]
    );

    //TRANSFORMA A FORMATO JSON
    const changeGetUsersFormat = Object.values(
        JSON.parse(JSON.stringify(getUsersRut))
    );

    //SI EXISTEN USUARIOS YA REGISTRADO, SE FILTRAN PARA NO VOLVER A REGISTRARLOS
    if (changeGetUsersFormat.length > 0) {

        try {
            //SE EXTRAE EL VALUE RUT
            const rutUsersGet = changeGetUsersFormat.map((c) => c.rut);

            //SE BUSCA LA INTERSECCIÓN ENTRE LOS USUARIOS QUE SE BUSCAN SER REGISTRADOS Y LOS QUE YA SE ENCUENTRAN REGISTRADOS, DE ENCONTRARSE ALGUNO ESTE QUEDARÁ FUERA
            const filteredUsersByRut = users.filter(
                (user) => !rutUsersGet.includes(user.rut)
            );
            //SE CREA UN ARRAY CON CADA USUARIO LISTO PARA SER REGISTRADO

            if (filteredUsersByRut.length > 0) {
                const userToInsert = filteredUsersByRut.map((c) => [
                    c.fullname,
                    c.fulllastname,
                    c.email,
                    c.rut,
                    c.users_divisions,
                    c.role,
                    c.position,
                    c.password,
                ]);

                const response = await pool.query(
                    "INSERT INTO users (fullname, fulllastname, email, rut, users_divisions, role, position, password) VALUES ?",
                    [userToInsert]
                );

                return res.status(200).json({
                    msg: "Carga realizada con éxito",
                });
            } else {
                return res.status(400).json({
                    msg: "No hay usuarios nuevos para registrar",
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                msg: "Error",
            });
        }
    } else {

      try {

        const userToInsert = users.map((c) => [
          c.fullname,
          c.fulllastname,
          c.email,
          c.rut,
          c.users_divisions,
          c.role,
          c.position,
          c.password,
      ]);

        const response = await pool.query(
          "INSERT INTO users (fullname, fulllastname, email, rut, users_divisions, role, position, password) VALUES ?",
          [userToInsert]
          );

          return res.status(200).json({
            msg: "Carga realizada con éxito",
        });
        
      } catch (error) {
        console.error(error);
        return res.status(400).json({
          msg: "No hay usuarios válidos para registrar",
      });
      }
      

    }

    res.status(200).json({
        msg: ":p",
    });
};

module.exports = {
    postUsersExcel,
};
