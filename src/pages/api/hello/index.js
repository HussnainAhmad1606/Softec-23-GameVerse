
import connectDB from "../../../middlewares/connectDB";
const handler = async (req, res) => {
   
    return res.status(200).json({ success: "success" })
}


export default connectDB(handler); 