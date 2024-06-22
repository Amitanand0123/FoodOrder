import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema) //if a model is there then it will use existing mocel and if its not there then it will create new model

export default foodModel;