const { Survey } = require('../models')

async function create(req, res) {
  try {
    console.log("REQ DOT BODY IS", req.body);
    const survey = await Survey.create(req.body)
    console.log("SURVEY IS", survey);
    res.status(200).json(survey)
  } catch (error) {
    console.log("ERROR IS", error);
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
}