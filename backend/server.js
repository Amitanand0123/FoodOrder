import express, { application } from 'express'
import cors from 'cors'
import multer from 'multer'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'



// app config
const app = express() //intialise our app using express package
const port = 4000 //define port number where our server will be running

// middleware
app.use(express.json()) //using this middleware whenever we will get request from the frontend to backend that will be parsed using this json
app.use(cors()) //using this we can access backend to frontend

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads')) //"uploads" folder will be exposed on this endpoint and we can access all the images using /images endpoint
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
}) //it is a http method using which we can request data from the server

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
}) //whenever our server will be running we will display one message in console

// mongodb+srv://amit_anand:Amitanand007@cluster0.qdh1cxw.mongodb.net/?