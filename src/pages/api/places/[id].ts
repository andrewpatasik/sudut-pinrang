import { dbConn } from "@/lib/db";
import Places from "@/models/places";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConn();
    const { id } = req.query;
    const placeDetail = await Places.findById(id);

    res.status(200).json(placeDetail);
  } catch (error) {
    res.status(400).send({ message: error });
  }
}
