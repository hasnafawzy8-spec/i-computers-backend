import express from 'express'
import mongoose from 'mongoose'

import userRouter from './routes/userRouter.js'
import authenticateUser from './middlewares/authenticate.js'
import productRouter from './routes/productRouter.js'
import dotenv from 'dotenv'

dotenv.config()

const mongoUri = process.env.MONGODB_URI

mongoose.connect(mongoUri).then(
    ()=>{
        console.log("Connected to MongoDB")
    }
).catch((err)=>{
    console.error("Error connecting to MongoDB:", err)
})


const app = express()

app.use( express.json() )

app.use( authenticateUser)


app.use("/users", userRouter)
 app.use("/products", productRouter)

app.listen( 3000 ,
    ()=>{
      console.log("Server is running!")  
    }
)