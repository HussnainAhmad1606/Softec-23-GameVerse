
import Product from "../../../../models/Product"
import connectDB from "../../../../middlewares/connectDB";



const handler = async (req, res) => {
    const {
        method,
        query: {
          slug
        }
      } = req;
      console.log(slug)
    if (req.method == "GET") {

        let products =  await Product.findOne({slug: slug});
        return res.status(200).json({ products })
    }
    
    else {
        return res.status(400).json({error: "ERROR" })
    }
}


export default connectDB(handler); 