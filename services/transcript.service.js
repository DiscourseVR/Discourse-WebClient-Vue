import axios from 'axios'
// import SpeechClient from '@google-cloud/speech'
import { GOOGLE_API_URL, GOOGLE_API_KEY } from '../config'

export const getRawAudio = () => {
  return axios.get('https://files.discoursevr.space/audio/Recording.mp3', {
    responseType: 'arraybuffer'
  })
    .then(response => Buffer.from(response.data, 'binary').toString('base64'))
}

export const beginAsyncTranscript = (audioData) => {
  return axios.request({
    url: `${GOOGLE_API_URL}/speech:recognize?key=${GOOGLE_API_KEY}`,
    method: 'POST',
    data: {
      audio: {
        content: audioData
      },
      config: {
        encoding: 'ENCODING_UNSPECIFIED',
        sampleRateHertz: 8000,
        languageCode: 'en-US'
      }
    }
  })
}
