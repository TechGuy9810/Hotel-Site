import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import roomRoute from "./routes/room.js";
import cors from 'cors';
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import bookingRoute from "./routes/booking.js";
import mail from "./routes/mail.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/auth",authRoute);
app.use("/hotel",hotelRoute);
app.use("/user",userRoute);
app.use("/room",roomRoute);
app.use("/booking",bookingRoute);
app.use("/mail",mail);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
        success:false,
        message:errorMessage,
        stack:err.stack,
    });
});
dotenv.config();
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("coonnected");
    } catch(error)
    {
        throw error
    }
};

app.listen(8800,()=>{
    connect()
    console.log("listening");
})
