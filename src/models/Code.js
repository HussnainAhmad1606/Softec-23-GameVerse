import mongoose from 'mongoose';
const { Schema } = mongoose;

const codeSchema = new Schema({
  title: { type: String },
  slug: { type: String, unique: true, required: false },
  body: { type: String },
  tags: { type: String },
  authorName: String,
  authorUsername: String,
  authorAvatar: String,
}, { timestamps: true });



mongoose.models = {}

export default mongoose.model("Code", codeSchema);