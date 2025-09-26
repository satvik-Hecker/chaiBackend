import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

console.log(`URL -> ${process.env.MONGODB_URL}/${DB_NAME}`)

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MONGO DB connected suxfully !! DB HOST : ${connectionInstance.connection.host}`)

    } catch(error){
        console.log("connection error : ", error);
        process.exit(1)
    }
}

export default connectDB;