/* eslint-disable valid-jsdoc */
import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * pages/api/login.ts
 *
 * A demo API endpoint for logging in.
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const cookies = new Cookies(req, res);

  if (email && password) {
    const response = await fetch(
      "http://hasura-auth:4000/signin/email-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const { session } = await response.json();

    cookies.set("access-token", session.accessToken, {
      httpOnly: true,
      sameSite: "lax", // CSRF protection
    });

    res.status(200).json({ session });
  } else {
    res.status(400).json({ error: "Invalid credentials" });
  }
};
