import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import helmet from 'helmet'
import dotenv from "dotenv";

import userRouter from './routes/UserRouter'

class App {
    public express: express.Application
    
    constructor() {        
        this.express = express()
        dotenv.config();
        this.middlewares()
        this.routes()        
    }

    private middlewares (): void{        
        this.express.use(helmet())
        this.express.use(express.json())
        this.express.use(cors())        
        this.database()        
    }

    private database (): void {
        mongoose.connect(process.env.URL_DATABASE, {
            useNewUrlParser : true
        })
    }

    private routes (): void {
        this.express.use('/users', userRouter)
    }
}

export default new App().express