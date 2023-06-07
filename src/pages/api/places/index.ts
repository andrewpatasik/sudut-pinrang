// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import places from "@/models/places";

type Data = {
  _id: any;
  name: string;
  address: string;
  rating: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {

  const places = await getAllPlaces();

  res.status(200).json(places as Data[]);
}

const getAllPlaces = async () => {
  try {
    await db();
    const Places:Data[] = await places.find({});

    return Places;
  } catch (error) {
    console.log(error);
  }
};
