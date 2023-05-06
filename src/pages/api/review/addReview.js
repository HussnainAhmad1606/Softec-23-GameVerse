
// title: { type: String },
// description: { type: String },
// slug: { type: String },
// image: { type: String },
// category: { type: String },
// inStock: { type: Boolean },
// price: { type: Number },
// additionalInfo: { type: String },
// }, { timestamps: true });

import Rating from "../../../models/Rating";
import connectDB from "../../../middlewares/connectDB";
const handler = async (req, res) => {
    if (req.method == "POST") {
        let review = new Rating({
           name: req.body.name,
           rating: req.body.rating,
           comment: req.body.comment,
           productSlug: req.body.productSlug
        })

        await review.save();
        return res.status(200).json({ success: "Review Added Successfully" })
    }
    
    else {
        return res.status(400).json({ error: "Not Allowed" })
    }
}


export default connectDB(handler);