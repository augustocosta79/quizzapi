import { Router } from 'express'
import { Quizz } from '../controllers/quizz'


export const quizzRouter = Router()


// GET ALL QUESTIONS FROM QUIZZ /all
quizzRouter.get('/all', Quizz.getQuestions)


// GET QUIZZ QUESTIONS FROM SPECIFIC CATEGORY /:category
quizzRouter.get('/:category', Quizz.getQuestions)

// CREATE NEW QUIZZ QUESTION
quizzRouter.post('/newquestion', Quizz.createQuestion)

//DELETE QUESTION
quizzRouter.delete('/question', Quizz.deteleQuestion)

// UPDATE QUESTION
quizzRouter.patch('/update', Quizz.updateQuestion)
