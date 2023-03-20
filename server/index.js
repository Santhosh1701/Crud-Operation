import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
// import route from "./Routes/routes.js";

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// app.use("/info",route);

mongoose.set("strictQuery", true);
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Database connected successfully");
    }
    catch (err){
        console.log(err);
    }
}

app.listen(5000, () => {
    connect()
    console.log("Crud Operation Test");
})