import { Schema, model, models } from 'mongoose';

const placesSchema = new Schema({
  name: String,
  address: String,
  rating: Number
})

export default models.Places || model('Places', placesSchema);