<template>
  <div class="container">
    <div>
      <h1 class="title mb-10">
        DiscourseVR
      </h1>
      <div class="flex flex-wrap gap-4 justify-center">
        <div
          v-for="(vidLink,ind) in vidList"
          :key="ind"
          class="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden"
        >
          <img alt="moto" :src="'/debate/podium.png'" class="absolute -right-20 -bottom-8 h-40 w-40 mb-4">
          <div class="w-4/6">
            <p class="text-gray-800 text-lg font-medium mb-2">
              Debate Recording
            </p>
            <p class="text-gray-400 text-xs">
              {{ vidLink.name }}
            </p>
            <NuxtLink :to="`/videos/${vidLink.name}`" class="text-indigo-500 text-xl font-medium">
              View More ->
            </NuxtLink>
          </div>
        </div>

        <!-- <button @click="testAnalytics">
          ANAYLSE!
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getVideoIndex } from '../services/videos.service'
// import { getRawAudio, beginAsyncTranscript, getTranscript } from '../services/transcript.service'
// import { speechAnalysis } from '../services/analytics.service'

export default {

  name: 'Index',

  data () {
    return {
      vidList: [],
      topicList: [
        'This house would abolish homework.',
        'This house would abolish homework.',
        'This house would abolish homework.'
      ]
    }
  },

  async mounted () {
    const response = await getVideoIndex()
    this.vidList = response.map((vid) => {
      return {
        ...vid,
        name: ('' + vid.name).replace('.mp4', '')
      }
    }
    )
  },

  methods: {
    testAnalytics (e) {
      e.preventDefault()
      // const raw = await getRawAudio('2021-04-10-21-49-24.mp3')
      // const raw = await getRawAudio('RecordingB.mp3')
      // const res = await beginAsyncTranscript(raw)
      // setTimeout(async () => {
      //   const transcription = await getTranscript(res.data.name)
      //   console.log(transcription)
      // }, 30000)
    }
  }

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
