// pages/api/verify-code.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { code } = req.body;
      const validCodes = {
        "secret123": "/restricted-page",
        "example456": "/another-page"
      };
      if (validCodes.hasOwnProperty(code)) {
        res.status(200).json({ success: true, redirectTo: validCodes[code] });
      } else {
        res.status(401).json({ success: false, message: "Invalid code" });
      }
    } else {
      res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
  }
  