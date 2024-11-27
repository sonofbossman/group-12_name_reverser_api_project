// import the dependencies
import express from 'express'
import { router } from './routes/route.js'

const app = express()
const PORT = 2200

// set-up middleware for handling json payloads and form data
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.use('/', router)

app.get('/reverse-name', router);
// setup listener 
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}...`)
})
