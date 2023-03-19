import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import route from "./Routes/route.js";
dotenv.config();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/info",route);


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongo");
    } catch (err) {
        console.log(err);
    }
}
app.listen(5000, () => {
    connect();
    console.log("Listening on port 5000");
})

