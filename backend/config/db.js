import mongoose from 'mongoose'


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://amit_anand:Amitanand007@cluster0.qdh1cxw.mongodb.net/FoodOrder').then(()=>console.log("DB connected"))
}