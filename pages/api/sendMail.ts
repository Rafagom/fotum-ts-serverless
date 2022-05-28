import type { NextApiRequest, NextApiResponse } from "next";

// export default (request: NextApiRequest, response: NextApiResponse) => {
//   const { email } = request.body;

//   return response.json({ email: `${email}` });
// };

// import { api, params } from "@serverless/cloud";
// import sendGridMail from "@sendgrid/mail";
const sendGridMail = require("@sendgrid/mail");

// let env = process.env["SENDGRID_API_KEY"];

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { email, username, subject, cost, message } = request.body;

  const msg = {
    to: "rafox.gomes@gmail.com",
    from: "rafox.gomes@gmail.com",
    subject: `Novo contato: ${username}`,
    text: `Email: ${email}\n\nNome: ${username}\n\nAssunto: ${subject}\n\nFatura: ${cost}\n\nMensagem: ${message}`,
  };

  try {
    await sendGridMail.send(msg);
    response.send("Email sent successfully");
  } catch (error: any) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    response.status(500).json("Failed to send email");
  }
};
