const { response } = require("express");
const nodemailer = require("nodemailer");

const testEmail = async (req = request, res = response) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOSTM,
    port: process.env.PORTM,
    secure: false,
    auth: {
      user: "controlcargas@cacciuttolo.cl",
      pass: process.env.PASSWORDM,
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
