import mongoose from "mongoose";

const dbConnection=async()=>{
    try {
        const dbConnection=await mongoose.connect(process.env.MONGODB_URL)
    
        console.log("DB Connected Successfully");
    } catch (error) {
        console.log("DB Erroe: "+error)
    }
}

export default dbConnection;