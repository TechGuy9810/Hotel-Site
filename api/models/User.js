import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    likedhotel:[String]
},{timestamps: true});
export default mongoose.model("User",UserSchema)