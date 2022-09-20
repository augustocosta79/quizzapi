import { Router } from 'express'
import { Quizz } from '../controllers/quizz'

export const quizzRouter = Router()

//GET AVAILABLE CATEGORIES
quizzRouter.get('/categories', Quizz.getCategories)


// GET ALL QUESTIONS FROM QUIZZ /all
quizzRouter.get('/questions', Quizz.getQuestions)

// GET QUIZZ QUESTIONS FROM SPECIFIC CATEGORY /:category
quizzRouter.get('/:category', Quizz.getQuestions)

// CREATE NEW QUIZZ QUESTION
quizzRouter.post('/create', Quizz.createQuestion)

//DELETE QUESTION
quizzRouter.delete('/delete/:id', Quizz.getQuestionById, Quizz.deteleQuestion)

// UPDATE QUESTION
quizzRouter.patch('/update/:id', Quizz.getQuestionById, Quizz.updateQuestion)

