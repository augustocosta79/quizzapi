import mongoose from "mongoose";

export interface iQuestion {
    question: string,
    category: string,
    answers: [
        {text: string, correct: boolean},
        {text: string, correct: boolean},
        {text: string, correct: boolean},
        {text: string, correct: boolean}
    ]
}

export const quizzSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    answers: [
        {
            text: {type: String, required: true},
            correct: { type: Boolean, required: true}
        },

        {
            text: {type: String, required: true},
            correct: { type: Boolean, required: true}
        },

        {
            text: {type: String, required: true},
            correct: { type: Boolean, required: true}
        },

        {
            text: {type: String, required: true},
            correct: { type: Boolean, required: true}
        },
    ]
})

export const quizzModel = mongoose.model('Question', quizzSchema)