const router = require('express').Router()
const surveysCtrl = require('../controllers/surveys.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', checkAuth, surveysCtrl.index)

router.post('/', checkAuth, surveysCtrl.create)
router.post('/:surveyId/questions', surveysCtrl.createQuestion)

router.put('/:surveyId', checkAuth, surveysCtrl.update)
router.put('/:surveyId/questions/:questionId', checkAuth, surveysCtrl.updateQuestion)

router.delete('/:surveyId', checkAuth, surveysCtrl.deleteSurvey)
router.delete('/:surveyId/questions/:questionId', checkAuth, surveysCtrl.deleteQuestion)

module.exports = router