
// title: { type: String },
// description: { type: String },
// slug: { type: String },
// image: { type: String },
// category: { type: String },
// inStock: { type: Boolean },
// price: { type: Number },
// additionalInfo: { type: String },
// }, { timestamps: true });

import Product from "../../../models/Product";
import connectDB from "../../../middlewares/connectDB";
const handler = async (req, res) => {
    if (req.method == "POST") {
        let product = new Product({
            title: req.body.title,
            description: req.body.description,
            slug: req.body.slug,
            image: req.body.image,
            category: req.body.category,
            inStock: req.body.inStock,
            price: req.body.price,
            additionalInfo: req.body.additionalInfo
        })

        await product.save();
        return res.status(200).json({ success: "Product Added Successfully" })
    }
    
    else {
        return res.status(400).json({ error: "Not Allowed" })
    }
}


export default connectDB(handler);