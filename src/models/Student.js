import mongoose from "mongoose";

 
const Student = new mongoose.Schema({
    "name" : {type : String, required: true},
    "first_name" : {type : String, required: true},
    "email": {type : String,
         required: true}
});

export default mongoose.model("Student",Student);