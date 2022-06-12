import { NextApiRequest, NextApiResponse } from "next";
export default (req: NextApiRequest, res: NextApiResponse) => {
  const Cookies = require("cookies");
  const cookies = new Cookies(req, res);
  const sessionString = cookies.get("session") || "";

  const session = JSON.parse(sessionString);
  console.log(session);

  res.status(200).json({
    accessToken: session.accessToken,
  });
};
