const { workerData } = require("worker_threads");
const nodemailer = require("nodemailer");
const pool = require("../database/database");

async function main() {

  const materialsId = [];
  const emails = [];

  const despachosPendientes = await pool.query("select materials_divisions from materials where pendiente = 1 group by materials_divisions");
  
  if (despachosPendientes.length === 0) {
    return;
  };
  
  const despachosPendientesObj = Object.values(JSON.parse(JSON.stringify(despachosPendientes)));
  
  for(const m of despachosPendientesObj) {
    materialsId.push(Object.values(m))
  }

  const materialsData = materialsId.flat();
  
  const usersToSendEmail = await pool.query("select u.email, u.users_divisions from users u left join divisions d on d.id = u.users_divisions where u.role = 'PLANNER_ROLE' and u.email != 'PENDIENTE' and u.users_divisions in (?)", [materialsData]);
 
  if (usersToSendEmail.length === 0) {
    return;
  };

  const users = Object.values(JSON.parse(JSON.stringify(usersToSendEmail)));

  for(const u of users) {
    emails.push(u.email)
  };

  if(emails.length === 0) {
    return;
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
  
    const info = await transporter.sendMail({
      from: "'Registro en control de carga se encuentra pendiente' <alexis-test@balvin-cat.cl>",
      to: 'icheherrera@gmail.com',
      subject: "Hay bultos pendientes para despacho.",
      text: 'Correo de prueba programado para las 10:20 pm'
    });
  
    console.log("Message sent", info.messageId);

  }

}

main().catch((err) => console.log(err));

