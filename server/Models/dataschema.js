import mongoose from "mongoose";

const dataschema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    course : {
        type : String,
        required : true,
    },
})

export default mongoose.model("fkite",dataschema);