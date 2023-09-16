import express from  'express'
import dotenv from 'dotenv'
import FakeData from './FakeData.js'
import cors from 'cors'
dotenv.config()
const app = express()

const FRONTEND_PORT = process.env.FRONTEND_PORT
const PORT = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: `http://localhost:${FRONTEND_PORT}`
}))

app.get('/api/users', (req, res) => {
    res.send(FakeData)    
})
app.post('/api/users', (req, res) => {
    const id = Math.floor(Math.random() * 100000).toString()
    res.send({
        ...req.body,
        id
    })    
})
app.put('/api/users/:id', (req, res) => {
    res.send({
        ...req.body,
        id: req.params.id
    })    
})

app.delete('/api/users/:id', (req, res) => {
    res.send({
        ...req.body,
        id: req.params.id
    })    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

