import { Request, Response, NextFunction } from 'express'
import { quizzModel } from '../models/quizz'
import { iQuestion } from '../models/quizz'


export class Quizz {

    static async getQuestions(req: Request, res: Response) {

        const category = req.params.category ? { category: req.params.category } : {}
        const limit = req.query.limit ? +req.query.limit : 0
        

        try {
            const quizzByCategory = await quizzModel.find(category).limit(limit)
            res.status(200).json(quizzByCategory)
        } catch (error) {
            res.status(404).json({ message: `No questions found` })
        }
    }


    static async getQuestionById(req: Request, res: Response, next: NextFunction) {
        let question
        try {
            question = await quizzModel.findById(req.params.id)
            if (question == null) {
                return res.status(404).json({ message: 'Could not find the question' })
            }
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message })
        }
        res.locals.question = question
        next()
    }


    static async createQuestion(req: Request<iQuestion>, res: Response) {

        const { question, category, answers } = req.body

        if (!answers) {
            res.status(400).json({ error: 'Please provide the answers to your question'})
            return
        }

        const newQuestion = new quizzModel({
            question: question,
            category: category,
            answers: answers
        })
    
        try {
            const created = await newQuestion.save()
            res.status(201).json(created)
        } catch (error) {
            res.status(400).json({ message: 'unable to create question' })
        }
    }


    static async deteleQuestion(req: Request, res: Response) {
        try {
            await res.locals.question.remove()
            res.status(204).json({ message: 'Question successfully removed!'})
        } catch (error) {
            res.status(404).json({ message: 'Could not find and delete the question' })
        }
    }


    static async updateQuestion(req: Request, res: Response) {
        const { category } = req.body
        try {
            res.locals.question.category = category
            await res.locals.question.save()
            res.status(200).json(res.locals.question)
        } catch (error) {
            res.status(404).json({ message: 'Could not update the question' })
        }
    }


}
