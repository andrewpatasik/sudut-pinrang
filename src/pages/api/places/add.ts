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
    const { name, address, rating } = await JSON.parse(req.body);

    const newPlace = new Places({
      name: name,
      address: address,
      rating: rating,
    });

    await newPlace.save();

    res
      .status(200)
      .send({ message: "Tempat favorit mu berhasil ditambahkan!" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
}