const router = require('express').Router()
const surveysCtrl = require('../controllers/surveys.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', checkAuth, surveysCtrl.index)
router.get('/:surveyId/questions/:questionId/responses', checkAuth, surveysCtrl.indexResponses)

router.post('/', checkAuth, surveysCtrl.create)
router.post('/:surveyId/questions', checkAuth, surveysCtrl.createQuestion)
router.post('/:surveyId/questions/:questionId/responses', checkAuth, surveysCtrl.createResponse)

router.put('/:surveyId', checkAuth, surveysCtrl.update)
router.put('/:surveyId/questions/:questionId', checkAuth, surveysCtrl.updateQuestion)

router.delete('/:surveyId', checkAuth, surveysCtrl.deleteSurvey)
router.delete('/:surveyId/questions/:questionId', checkAuth, surveysCtrl.deleteQuestion)

module.exports = router