// eslint-disable-next-line require-jsdoc
export default function handler(req, res) {
  const Cookies = require("cookies");
  const cookies = new Cookies(req, res);
  const accessToken = cookies.get("access-token") || "";

  res.status(200).json({
    accessToken,
  });
}
