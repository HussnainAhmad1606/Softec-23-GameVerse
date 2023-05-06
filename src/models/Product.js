import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String },
  description: { type: String },
  slug: { type: String },
  image: { type: String },
  category: { type: String },
  inStock: { type: Boolean },
  price: { type: Number },
  additionalInfo: { type: String },
}, { timestamps: true });



mongoose.models = {}

export default mongoose.model("Product", productSchema);