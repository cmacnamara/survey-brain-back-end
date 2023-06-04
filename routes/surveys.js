const router = require('express').Router()
const surveysCtrl = require('../controllers/surveys.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, surveysCtrl.create)
router.post('/:surveyId/questions', surveysCtrl.createQuestion)

router.put('/:surveyId', checkAuth, surveysCtrl.update)
router.put('/:surveyId/questions/:questionId', checkAuth, surveysCtrl.updateQuestion)

module.exports = router