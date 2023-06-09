// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { dbConn } from "@/lib/db";
import Places from "@/models/places";

type Data = {
  _id?: any;
  name?: string;
  address?: string;
  rating?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | Object | undefined | unknown>
) {
  await dbConn();

  try {
    const allPlaces: Data[] = await Places.find({});

    res.status(200).json(allPlaces);
  } catch (error) {
    res.status(400).send({ message: error });
  }
}
