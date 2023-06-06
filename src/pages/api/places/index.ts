// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  address: string;
  rating: number;
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      name: "RM. Ulu Bale",
      address: "Jalan Baru No.1 Pinrang",
      rating: 4,
    },
  ]);
}
