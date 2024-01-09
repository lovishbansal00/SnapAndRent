import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {

    const { username, email, password } = req.body;
    const hashedPassword = await bcryptjs.hashSync(password, 10);
    const newUSer = new User({ username, email, password: hashedPassword });


    await newUSer.save().then(() => {
        res.status(201).json("user created successfully");
    }).catch((err) => {
        next(err);
    })
}