import { response } from "express";
import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}` //using this we will store the uploaded file name in this variable

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename //whenever we will hit this api in the body we will send these details and we will access it using this function
    })
    try {
        await food.save(); //using this method the food item will be saved in the database
        res.json({success:true,message:"Food Added"}) // we have to create one response in which we will send a object with success and message property
    } catch (error) { //if we get any error while saving the food in that case this catch block will be executed
        console.log(error)
        res.json({success:false,message:"Error"})
    }   
}

// all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// remove food item
const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}


export { addFood, listFood, removeFood }