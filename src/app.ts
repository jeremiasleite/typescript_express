import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import userRouter from './routes/UserRouter'

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    private middlewares (): void{
        this.express.use(express.json())
        this.express.use(cors())
        this.database()
    }

    private database (): void {
        mongoose.connect('', {
            useNewUrlParser : true
        })
    }

    private routes (): void {
        this.express.use('/users', userRouter)
    }
}

export default new App().express