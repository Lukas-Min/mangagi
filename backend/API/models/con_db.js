//* IMPORT MONGOOSE DEPENDENCY
import mongoose from 'mongoose';
import 'dotenv/config'



const connectDB = () => {
    mongoose.connect(process.env.DB_URI)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
}



export default connectDB;