import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const { name, message } = body;

  const innerHtml = `
  <div
    style="
      margin: 0;
      padding: 0;
      height: 100vh;
      font-family: 'Lucida Sans Unicode', 'Verdana', 'sans-serif';
    "
  >
    <div style="width: 100%; text-align: center">
      <h2 style="padding-bottom: 5px">Nueva confirmacion de:</h2>
      <h3>${name}</h3>
      <p>Mensaje: ${message}</p>
    </div>
  </div>
`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailOptions = {
    from: {
      name: "Asistente de boda",
      address: `${process.env.EMAIL_USER}`,
    },
    to: [`${process.env.TO_EMAIL_1}`, `${process.env.TO_EMAIL_2}`],
    subject: `Nueva confiramcion de ${name}`,
    html: innerHtml,
  };

  await new Promise((resolve, reject) => {
    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return NextResponse.json({ status: "Correo Enviado" });
}
