import { Request, Response } from 'express'
import { quizzModel } from '../models/quizz'
import { iQuestion } from '../models/quizz'


export class Quizz {
    static async getQuestions(req: Request, res: Response) {
        
    }

    static async createQuestion(req: Request<iQuestion>, res: Response) {

    }

    static async deteleQuestion(req: Request, res: Response) {

    }

    static async updateQuestion(req: Request, res: Response) {

    }


}
