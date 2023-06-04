const router = require('express').Router()
const surveysCtrl = require('../controllers/surveys.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, surveysCtrl.create)

router.put('/:surveyId', checkAuth, surveysCtrl.update)

module.exports = router