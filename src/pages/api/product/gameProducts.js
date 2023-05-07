
import Product from "../../../models/Product"
import connectDB from "../../../middlewares/connectDB";
import bcrypt from "bcryptjs";
const handler = async (req, res) => {
    if (req.method == "GET") {

        let products =  await Product.find({category: "Video Games"});
        return res.status(200).json({ products })
    }
    
    else {
        return res.status(400).json({error: "ERROR" })
    }
}


export default connectDB(handler); 