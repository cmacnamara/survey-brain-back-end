async function getSentimentAnalysis(req,res) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': process.env.TEXT_ANALYSIS_API_KEY,
        'X-RapidAPI-Host': 'twinword-twinword-bundle-v1.p.rapidapi.com'
      },
      body: new URLSearchParams({
        text: req.query.query
      })
    }
    const apiResponse = await fetch(`https://twinword-twinword-bundle-v1.p.rapidapi.com/sentiment_analyze/`, options)
    const analysisData = await apiResponse.json()
    return res.json(analysisData)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  getSentimentAnalysis,
}