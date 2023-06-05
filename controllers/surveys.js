const { Survey, Question, Response } = require('../models')

async function create(req, res) {
  try {
    req.body.profileId = req.user.id
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
    req.body.edited = false
    const question = await Question.create(req.body)
    res.status(200).json(question)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function updateQuestion(req, res) {
  try {
    const question = await Question.findByPk(req.params.questionId)
    
    if(question) {
      question.prompt = req.body.prompt
      question.type = req.body.type
      question.answerChoices = req.body.answerChoices
      question.required = req.body.required
      question.edited = true
      await question.save()
    }

    res.status(200).json(question)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const surveys = await Survey.findAll(
      { where: { profileId: req.user.id }}
    )
    res.status(200).json(surveys)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function show(req, res) {
  try {
    const survey = await Survey.findByPk(
      req.params.surveyId,
      { include: [{ all: true, nested: true }]}
    )
    res.status(200).json(survey)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteSurvey(req, res) {
  try {
    const numRowsRemoved = await Survey.destroy(
      { where: { id: req.params.surveyId }}
    )
    res.status(200).json(numRowsRemoved)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteQuestion(req, res) {
  try {
    const numRowsRemoved = await Question.destroy(
      { where: { id: req.params.questionId }}
    )
    res.status(200).json(numRowsRemoved)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function createResponse(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    req.body.questionId = parseInt(req.params.questionId)
    const response = await Response.create(req.body)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function indexResponses(req, res) {
  try {
    const responses = await Response.findAll(
      { where: { questionId: req.params.questionId }}
    )
    res.status(200).json(responses)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
  update,
  createQuestion,
  updateQuestion,
  index,
  deleteSurvey,
  deleteQuestion,
  createResponse,
  indexResponses,
  show,
}