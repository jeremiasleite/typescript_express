import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

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
    }

    private database (): void {
        mongoose.connect('url', {
            useNewUrlParser : true
        })
    }

    private routes (): void {
        this.express.use(routes)
    }
}

export default new App().express