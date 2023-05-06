import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String },
  password: { type: String, unique: true, required: false },
  gender: { type: String },
  dob: { type: String },
  isBlocked: { type: Boolean },
  isAdmin: { type: Boolean }
}, { timestamps: true });



mongoose.models = {}

export default mongoose.model("User", userSchema);