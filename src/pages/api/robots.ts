import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(`User-agent: *
  Allow: /
  `); // Send your `robots.txt content here
}
