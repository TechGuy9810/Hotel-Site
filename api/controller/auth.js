import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const register =async (req,res)=>{
try{
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password,salt);
const newUser = new User({
    name:req.body.name,
    email:req.body.email,
    password:hash,
});
const existUsername = await User.findOne({ email: req.body.email});
if (existUsername) {
    throw new Error("User Already Exists!");
}
await newUser.save();
res.status(200).send(newUser);
}
catch(err)
{
res.status(400).json({message:err.message});
}
}
export const login = async (req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email
        });
          if(!user)  throw new Error("User Not Found!");
          const pc = await bcrypt.compare(req.body.password,user.password);
          if(!pc) throw new Error("Incorrect Pssword!")

          res.status(200).json(user);
        }
        catch(err)
        {
        res.status(401).json({message:err.message});
        }
};
export const logout = (req,res)=>{

};