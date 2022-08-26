const { response } = require("express");
const nodemailer = require("nodemailer");

const testEmail = async (req = request, res = response) => {
  const transporter = nodemailer.createTransport({
    host: "webhosting.linets.cl",
    port: 587,
    secure: false,
    auth: {
      user: "controlcargas@cacciuttolo.cl",
      pass: "3vmRK5RF5G",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: "'Control Carga test' <controlcargas@cacciuttolo.cl>",
    to: "aheca96@gmail.com",
    subject: "Prueba envio de correo - Linets",
    text: "hello world",
  });
  console.log("Message sent", info.messageId);

  res.send("Mensaje enviado");
};

module.exports = {
  testEmail,
};
