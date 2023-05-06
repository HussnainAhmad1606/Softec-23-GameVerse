import mongoose from 'mongoose';
const { Schema } = mongoose;

const ratingSchema = new Schema({
name: { type: String },
  rating: { type: Number },
  comment: { type: String },
  productSlug: { type: String },
}, { timestamps: true });



mongoose.models = {}

export default mongoose.model("Rating", ratingSchema);