const router = require('express').Router()
const analysisCtrl = require('../controllers/analysis.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/

router.get('/sentiment', analysisCtrl.getSentimentAnalysis)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


module.exports = router