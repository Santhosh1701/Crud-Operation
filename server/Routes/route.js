import express from "express";
const route = express.Router();
import { createData, deleteData, getData, updateData } from "../Controllers/Data.js";



//post method
route.post("/post", createData);
//get method
route.get("/get", getData);
// update method

route.put("/update", updateData);
//delete method
route.delete("/delete/:id", deleteData);

export default route;
