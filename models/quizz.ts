import mongoose from "mongoose";
import { Document } from 'mongoose'

export interface iQuestion extends Document {
    question: string,
    category: string,
    answers: [
        {text: string, correct: boolean},
        {text: string, correct: boolean},
        {text: string, correct: boolean},
        {text: string, correct: boolean}
    ]
}

const answer = new mongoose.Schema({
    text: {type: String, required: true},
    correct: {type: Boolean, required: true},
})

export const quizzSchema = new mongoose.Schema<iQuestion>({
    question: {
        type: String,
        required: true
    },

    category: {
        required: true,
        type: String,
    },

    answers: {
        required: true,
        type: [answer, answer, answer, answer]
    }
})

export const quizzModel = mongoose.model<iQuestion>('Question', quizzSchema)