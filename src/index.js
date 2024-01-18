import mongoose from 'mongoose'
import {DB_NAME} from "./constants.js"
import express from 'express'
import connectDB from './db/index.js'
import dotenv from 'dotenv'
dotenv.config()
// dotenv.config({path: './env'})



// connectDB()
// dotenv


const app = express();

;( async () => {
 try {
 await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
 app.on("error", (error) => {
    console.log("err: ", error);
    throw error
 })

 app.listen(process.env.PORT, () => {
    console.log(`the app is running at ${process.env.PORT}`);
 })

 }
 catch (error) {
    console.log(`Error: ${error}`);
    throw err
 }
})()