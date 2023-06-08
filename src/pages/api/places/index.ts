// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import places from "@/models/places";

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
  const places = await getAllPlaces();

  if (Array.isArray(places) && places.length < 1)
    res.status(500).send({ message: "something not right" });

  res.status(200).json(places);
}

const getAllPlaces = async () => {
  try {
    await db();
    const Places: Data[] = await places.find({});

    return Places;
  } catch (error) {
    return error;
  }
};
