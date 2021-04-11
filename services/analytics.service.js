
export const fillerWords = [
  'well', 'um', 'like', 'okay', 'literally'
]

export const speechAnalysis = (rawText) => {
  const analysis = {
    word_count: 0,
    uniqueWords: 0,
    fillerCount: 0,
    mostUsed: ''
  }

  const cleaned = ('' + rawText).toLowerCase().replaceAll(/^[a-z\r\n' ]/g, '').replaceAll(/\r?\n|\r/g, '')
  const wordDict = {}

  for (const word of cleaned.split(' ')) {
    if (word in wordDict) { wordDict[word] += 1 } else { wordDict[word] = 1 }
  }

  analysis.word_count = cleaned.split(' ').length
  analysis.uniqueWords = Object.keys(wordDict).length

  let fillerCount = 0
  for (const fword of fillerWords) {
    fillerCount += (fword in wordDict) ? wordDict[fword] : 0
  }
  analysis.fillerCount = fillerCount

  let maxOccur = -100000
  let maxWord = ''
  for (const word of Object.keys(wordDict)) {
    if (wordDict[word] > maxOccur) {
      maxOccur = wordDict[word]
      maxWord = word
    }
  }
  analysis.mostUsed = maxWord

  return analysis
}
