import mongoose from "mongoose";
import { config } from "./config.js";
function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database is connected");
    })
}

export default connectToDb