import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
  customerName: { type: String },
  address: { type: String },
  postalCode: { type: Number },
  orderData: { type: String },
  totalPrice: { type: String },
  orderStatus: {type: String},
  orderDate: {type: String},
  paymentId: {type: String}
}, { timestamps: true });



mongoose.models = {}

export default mongoose.model("Order", orderSchema);