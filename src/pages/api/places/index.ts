// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
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
  await db();

  if (req.method === "POST") {
    try {
      await addNewPlace(JSON.parse(req.body));

      res
        .status(200)
        .send({ message: "Tempat favorit mu berhasil ditambahkan!" });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  } else {
    try {
      const Places = await getAllPlaces();
      res.status(200).json(Places);
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }
}

const getAllPlaces = async () => {
  try {
    const allPlaces: Data[] = await Places.find({});

    return allPlaces;
  } catch (error) {
    return error;
  }
};

const addNewPlace = async ({name, address, rating}:Data) => {

  const place = new Places({
    name: name,
    address: address,
    rating: rating,
  });

  await place.save();
};
