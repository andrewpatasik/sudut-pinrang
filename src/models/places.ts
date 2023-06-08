import { Schema, model, models } from "mongoose";

interface IPlaces {
  name: string;
  address: string;
  rating: number;
}

const placesSchema = new Schema<IPlaces>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Places = models.Places || model("Places", placesSchema);

export default Places;
