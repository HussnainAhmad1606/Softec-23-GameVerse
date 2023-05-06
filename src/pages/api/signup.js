
import User from "../../models/User"
import connectDB from "../../middlewares/connectDB";
import bcrypt from "bcryptjs";
const handler = async (req, res) => {
    if (req.method == "POST") {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        console.log(req.body)
        let user = new User({
            email: req.body.email,
            password: hashedPassword,
            gender: req.body.gender,
            dob: req.body.dob,
            isBlocked: req.body.isBlocked,
            isAdmin: req.body.isAdmin
        })
    
        await user.save();
        return res.status(200).json({success: "user created successfully" })
    }
    
    else {
        return res.status(200).json({error: "ERROR" })
    }
}


export default connectDB(handler); 