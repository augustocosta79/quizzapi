import mongoose from "mongoose";
import { Document } from 'mongoose'

interface Answer { text: string, correct: boolean, _id: number }

export interface iQuestion extends Document {
    question: string,
    category: string,
    answers: Answer[]

}

export const quizzSchema = new mongoose.Schema<iQuestion>({
    question: {
        type: String,
        required: [true, 'Question  is required'],
        validate: {
            validator: (v: string) => { return v.length > 3},
            message: props => 'Question must have 3 characters minimum'
        },
    },

    category: {
        type: String,
        required: [true, 'Category is required'],
    },

    answers: {
        type: [
            { 
                text: {type: String, required: true},
                correct: {type: Boolean, required: true},
                _id: {select: false}
            }
            
        ],
        required: [true, 'Answers is required'],
    }
}, { versionKey: false })

quizzSchema.path('answers').validate(
    (answer: Answer[]) => { return answer.length >= 4 },
    'At least 4 answers required'
)

export const quizzModel = mongoose.model<iQuestion>('Question', quizzSchema)