
import Code from "../../models/Code"
import connectDB from "../../middlewares/connectDB";
const handler = async (req, res) => {
    let snippets = await Code.find({}, {})
    return res.status(200).json({ snippets })
}


export default connectDB(handler); 