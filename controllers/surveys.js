const { Survey, Question } = require('../models')

async function create(req, res) {
  try {
    const survey = await Survey.create(req.body)
    res.status(200).json(survey)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const survey = await Survey.findByPk(req.params.surveyId)
    
    if(survey) {
      survey.title = req.body.title
      survey.description = req.body.description
      await survey.save()
    }

    res.status(200).json(survey)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function createQuestion(req, res) {
  try {
    req.body.surveyId = req.params.surveyId
    const question = await Question.create(req.body)
    res.status(200).json(question)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
  update,
  createQuestion
}