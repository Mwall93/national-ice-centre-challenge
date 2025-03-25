import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://whatson.motorpointarenanottingham.com/api/challenge",
    {
      method: req.method,
      headers: {
        ...Object.fromEntries(Object.entries(req.headers || {})),
        "x-api-key": process.env.API_KEY,
      },
    }
  );

  const data = await response.json();
  res.status(response.status).json(data);
}
