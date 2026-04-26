import express from "express";
import userRoutes from './routes/route'

const app  = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.json('Api is working');
})

app.use('/api/users', userRoutes)

app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({
        message: error.message || 'Internal server error',
    });
})

export default app
