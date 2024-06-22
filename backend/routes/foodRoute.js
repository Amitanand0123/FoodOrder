import express from "express"
import { addFood, listFood,removeFood} from "../controllers/foodController.js"
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) // whenever we will upload one file our timestamp will be added in the file original name and it will create a unique name and it will be stored in the uploads folder
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood) // we use post method to send the data to the server
// on this foodRouter we have created a post method /add endpoint where we have used this middleware to upload the image that we have created using multer package

foodRouter.get("/list",listFood) 
foodRouter.post("/remove",removeFood);




export default foodRouter;