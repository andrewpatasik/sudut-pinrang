import { Schema, model, models } from "mongoose";

interface IPlace {
  _id: string;
  placeId: string;
  rating: string;
  comment: string;
}

const placeDetailSchema = new Schema<IPlace>({
  placeId: { type: String, required: true },
  rating: { type: String, required: true },
  comment: { type: String, required: false },
});

const PlaceDetail =
  models.PlaceDetail || model("PlaceDetail", placeDetailSchema);

export default PlaceDetail;
