import express from 'express'
import cors from 'cors'
import { quizzRouter } from '../routes/quizz'
import bodyParser from 'body-parser'

export const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/quizz', quizzRouter)