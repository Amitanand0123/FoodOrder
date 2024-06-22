import express from 'express'
import cors from 'cors'



// app config
const app = express() //intialise our app using express package
const port = 4000 //define port number where our server will be running

// middleware
app.use(express.json()) //using this middleware whenever we will get request from the frontend to backend that will be parsed using this json
app.use(cors) //using this we can access backend to frontend

app.get() //it is a http method using which we can request data from the server