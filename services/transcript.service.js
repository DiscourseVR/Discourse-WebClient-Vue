import axios from 'axios'
import { API_URL, GOOGLE_API_URL, GOOGLE_API_KEY } from '../config'

export const getRawAudio = (filename) => {
  return axios.get(`${API_URL}/audio/${filename}`, {
    responseType: 'arraybuffer'
  })
    .then(response => Buffer.from(response.data, 'binary').toString('base64'))
}

export const getTranscript = (opId) => {
  return axios.get(`${GOOGLE_API_URL}/operations/${opId}?key=${GOOGLE_API_KEY}`)
}

export const beginAsyncTranscript = (audioData) => {
  return axios.request({
    url: `${GOOGLE_API_URL}/speech:longrunningrecognize?key=${GOOGLE_API_KEY}`,
    method: 'POST',
    data: {
      audio: {
        content: audioData
      },
      config: {
        encoding: 'ENCODING_UNSPECIFIED',
        sampleRateHertz: 8000,
        languageCode: 'en-US',
        enableWordTimeOffsets: true
      }
    }
  })
}
