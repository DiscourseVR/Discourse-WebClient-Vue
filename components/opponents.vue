<template>
  <div class="h-full flex space-x-4 overflow-hidden">
    <div class="object-scale-down mx-4 container w-1/2">
      <div class="md:p-8 p-6 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row flex-col gap-12">
        <div>
          <span class="text-bold text-gray-700 dark:text-gray-400 block">
            Debator 1 Word Count:
          </span>
          <span class="text-yellow-500 text-4xl md:text-5xl mt-2 font-black block">
            {{ playerOneStats.word_count }}
          </span>
        </div>
        <div class="self-end">
          <div class="md:text-right text-left md:block">
            <p class="text-xl md:mb-2 mb-0 dark:text-gray-100 flex items-center increase">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-red-500 mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
              </svg>
              {{ playerOneStats.fillerCount }} filler words
            </p>
          </div>
          <p class="text-lg text-gray-600 md:text-right text-left dark:text-gray-400 md:block inline-block md:mb-0">
            Most Used Word: {{ playerOneStats.mostUsed }}
          </p>
        </div>
      </div>
    </div>
    <div class="object-scale-down mx-4 container w-1/2">
      <div class="md:p-8 p-6 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row flex-col gap-12">
        <div>
          <span class="text-bold text-gray-700 dark:text-gray-400 block">
            Debator 2 Word Count:
          </span>
          <span class="text-blue-500 text-4xl md:text-5xl mt-2 font-black block">
            {{ playerTwoStats.word_count }}
          </span>
        </div>
        <div class="self-end">
          <div class="md:text-right text-left md:block">
            <p class="text-xl md:mb-2 mb-0 dark:text-gray-100 flex items-center increase">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-red-500 mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
              </svg>
              {{ playerTwoStats.fillerCount }} filler words
            </p>
          </div>
          <p class="text-lg text-gray-600 md:text-right text-left dark:text-gray-400 md:block inline-block md:mb-0">
            Most Used Word: {{ playerTwoStats.mostUsed }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { speechAnalysis } from '../services/analytics.service'
import { getRawAudio, getTranscript, beginAsyncTranscript } from '../services/transcript.service'

export default {

  name: 'Opponents',

  props: {
    vidUrl: {
      type: String,
      default: 'https://www.youtube.com/watch?v=14FOPsSCIPs'
    }
  },

  data () {
    return {
      playerOneTranscript: '',
      playerTwoTranscript: '',
      playerOneStats: {
        word_count: 0,
        uniqueWords: 0,
        fillerCount: 0,
        mostUsed: ''
      },
      playerTwoStats: {
        word_count: 0,
        uniqueWords: 0,
        fillerCount: 0,
        mostUsed: ''
      }
    }
  },

  async mounted () {
    const raw1 = await getRawAudio(this.vidUrl + '_0.mp3')
    const res1 = await beginAsyncTranscript(raw1)
    setTimeout(async () => {
      const transcription = await getTranscript(res1.data.name)
      this.playerOneTranscript = speechAnalysis(transcription)
    }, 30000)
    const raw2 = await getRawAudio(this.vidUrl + '_1.mp3')
    const res2 = await beginAsyncTranscript(raw2)
    setTimeout(async () => {
      const transcription = await getTranscript(res2.data.name)
      this.playerOneTranscript = speechAnalysis(transcription)
    }, 30000)
  },

  methods: {

  }

}
</script>

<style>
.chatbubble {
  cursor: pointer;
}
</style>
