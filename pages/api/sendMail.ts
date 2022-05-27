import type { NextApiRequest, NextApiResponse } from "next";

// export default (request: NextApiRequest, response: NextApiResponse) => {
//   const { email } = request.body;

//   return response.json({ email: `${email}` });
// };

// import { api, params } from "@serverless/cloud";
import sendGridMail from "@sendgrid/mail";

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { email } = request.body;

  const msg = {
    to: "eng.rsgomes@gmail.com",
    from: "eng.rsgomes@gmail.com",
    subject: `Prazer ${email}`,
    text: "foi?",
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
