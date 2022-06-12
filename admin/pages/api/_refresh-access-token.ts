import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res);
  const sessionString = cookies.get("session") || "";
  const oldSession = JSON.parse(sessionString);

  if (oldSession.refreshToken) {
    const response = await fetch("http://hasura-auth:4000/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: oldSession.refreshToken,
      }),
    });

    const session = await response.json();

    console.log(session);

    if (session.accessToken) {
      console.log("isSession");
      cookies.set("session", JSON.stringify(session), {
        httpOnly: true,
        sameSite: "lax", // CSRF protection
      });
      res.status(200).json({});
    } else {
      console.log("isNoSession", session);
      res.status(500).json({ error: "WTF?" });
    }
  } else {
    res.status(400).json({ error: "Invalid credentials" });
  }
};
