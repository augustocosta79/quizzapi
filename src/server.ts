import { app } from './app'
import { config } from 'dotenv'
import mongoose from 'mongoose'

config()

const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASS = process.env.MONGODB_PASS
const DATABASE_URL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.jpsvph7.mongodb.net/`

mongoose.connect(DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => { console.error(error) })
db.once('open', () => { console.log("Connected to database") })

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server connected on port: ${process.env.SERVER_PORT}`)
})