const nodemailer = require("nodemailer");
const pool = require("../database/database");
const process = require('process');
const { parentPort } = require('worker_threads');
const { converTime, convertHour } = require("../helpers/convertDate");

async function main() {

  const materialsDivisionId = [];

  const emailsTeniente = [];
  const emailsAndina = [];
  const emailsVentanas = [];
  const emailsSalvador = [];
  const emailsChuquicamata = [];
  const emailsSAndinta = [];
  const emailsSTeniente = [];
  const emailsCM = [];

  //OBTENER LA DIVISIÓN DE LOS MATERIALES CON ESTADO PENDIENTE

  const despachosPendientes = await pool.query(
    "select materials_divisions from materials where pendiente = 1 group by materials_divisions"
  );

  if (despachosPendientes.length === 0) {
    return;
  }

  const despachosPendientesObj = Object.values(
    JSON.parse(JSON.stringify(despachosPendientes))
  );

  // JUNTAS LA DIVISIONES EN UNA VARIABLE

  for (const m of despachosPendientesObj) {
    materialsDivisionId.push(Object.values(m));
  }
  const materialsData = materialsDivisionId.flat();

  //OBTENER EMAIL Y DIVISIONES DE USUARIOS A LOS CUALES SE LE DEBE MANDAR LOS EMAIL

  const usersToSendEmail = await pool.query(
    "select u.email, u.users_divisions from users u left join divisions d on d.id = u.users_divisions where u.role = 'PLANNER_ROLE' and u.email != 'PENDIENTE' and u.users_divisions in (?)",
    [materialsData]
  );

  if (usersToSendEmail.length === 0) {
    return;
  }

  const usersToSendEmailObj = Object.values(
    JSON.parse(JSON.stringify(usersToSendEmail))
  );

  for (let ud of usersToSendEmailObj) {
    if (ud.users_divisions === 1000) {
      emailsTeniente.push(ud.email);
    }

    if (ud.users_divisions === 1001) {
      emailsAndina.push(ud.email);
    }

    if (ud.users_divisions === 1002) {
      emailsVentanas.push(ud.email);
    }

    if (ud.users_divisions === 1003) {
      emailsSalvador.push(ud.email);
    }

    if (ud.users_divisions === 1004) {
      emailsChuquicamata.push(ud.email);
    }

    if (ud.users_divisions === 1005) {
      emailsSAndinta.push(ud.email);
    }

    if (ud.users_divisions === 1006) {
      emailsSTeniente.push(ud.email);
    }

    if (ud.users_divisions === 1007) {
      emailsCM.push(ud.email);
    }
  }

  // OBTENER LA FECHA DE LOS PRIMEROS MATERIALES A LOS CUALES SE LES DEBE ENVIAR

  const getFirstMaterialToDispatch = await pool.query(
    "select date_in, materials_divisions from materials where materials_divisions in (?) and status = 1 group by materials_divisions",
    [materialsData]
  );

  const getFirstMaterialToDispatchObj = Object.values(
    JSON.parse(JSON.stringify(getFirstMaterialToDispatch))
  );

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

  const test = ["aheca96@gmail.com", "alex_split_96@live.com"];

  for (data of getFirstMaterialToDispatchObj) {
    const dateToSend = converTime(data.date_in);

    if (data.materials_divisions === 1000) {
      try {
        const info = await transporter.sendMail({
          from: "'Control de materiales' <alexis-test@balvin-cat.cl>",
          to: [test],
          subject: "Hay bultos pendientes para despacho.",
          text: `Estimado, hay bultos para ser despachado desde ${dateToSend}.`,
        });

        return;
      } catch (error) {
        return;
      }
    }
    if (data.materials_divisions === 1001) {
      try {
        const info = await transporter.sendMail({
          from: "'Control de materiales' <alexis-test@balvin-cat.cl>",
          to: [test],
          subject: "Hay bultos pendientes para despacho.",
          text: `Estimado, hay bultos para ser despachado desde ${dateToSend}.`,
        });

        return;
      } catch (error) {
        return;
      }
    }
    if (data.materials_divisions === 1002) {
      try {
        const info = await transporter.sendMail({
          from: "'Control de materiales' <alexis-test@balvin-cat.cl>",
          to: [test],
          subject: "Hay bultos pendientes para despacho.",
          text: `Estimado, hay bultos para ser despachado desde ${dateToSend}.`,
        });

        return;
      } catch (error) {
        return;
      }
    }
    if (data.materials_divisions === 1003) {
      try {
        const info = await transporter.sendMail({
          from: "'Control de materiales' <alexis-test@balvin-cat.cl>",
          to: [test],
          subject: "Hay bultos pendientes para despacho.",
          text: `Estimado, hay bultos para ser despachado desde ${dateToSend}.`,
        });

        return;
      } catch (error) {
        return;
      }
    }
    if (data.materials_divisions === 1004) {
      try {
        const info = await transporter.sendMail({
          from: "'Control de materiales' <alexis-test@balvin-cat.cl>",
          to: [test],
          subject: "Hay bultos pendientes para despacho.",
          text: `Estimado, hay bultos para ser despachado desde ${dateToSend}.`,
        });

        return;
      } catch (error) {
        return;
      }
    }
    if (data.materials_divisions === 1005) {
      try {
        const info = await transporter.sendMail({
          from: "'Control de materiales' <alexis-test@balvin-cat.cl>",
          to: [test],
          subject: "Hay bultos pendientes para despacho.",
          text: `Estimado, hay bultos para ser despachado desde ${dateToSend}.`,
        });

        return;
      } catch (error) {
        return;
      }
    }
    if (data.materials_divisions === 1006) {
      try {
        const info = await transporter.sendMail({
          from: "'Control de materiales' <alexis-test@balvin-cat.cl>",
          to: [test],
          subject: "Hay bultos pendientes para despacho.",
          text: `Estimado, hay bultos para ser despachado desde ${dateToSend}.`,
        });

        return;
      } catch (error) {
        return;
      }
    }
    if (data.materials_divisions === 1007) {
      try {
        const info = await transporter.sendMail({
          from: "'Control de materiales' <alexis-test@balvin-cat.cl>",
          to: [test],
          subject: "Hay bultos pendientes para despacho.",
          text: `Estimado, hay bultos para ser despachado desde ${dateToSend}.`,
        });

        return;
      } catch (error) {
        return;
      }
    }

    return;
  }

}

if (parentPort) parentPort.postMessage('done');
else process.exit(0);



main().catch((err));
