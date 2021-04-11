<template>
  <div class="h-full flex space-x-4 overflow-hidden">
    <div class="object-scale-down mx-4 container w-1/2">
      <div class="md:p-8 p-6 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row flex-col gap-12">
        <div>
          <span class="text-bold text-gray-700 dark:text-gray-400 block">
            Debator 1 Word Count:
          </span>
          <span class="text-yellow-500 text-4xl md:text-5xl mt-2 font-black block">
            75,858,724
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
              10 filler words
            </p>
          </div>
          <p class="text-lg text-gray-600 md:text-right text-left dark:text-gray-400 md:block inline-block md:mb-0">
            Most Used word:
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
            75,858,724
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
              10 filler words
            </p>
          </div>
          <p class="text-lg text-gray-600 md:text-right text-left dark:text-gray-400 md:block inline-block md:mb-0">
            Most Used Word:
          </p>
        </div>
      </div>
    </div>

    <!--{{ cmt.sender }}: {{ cmt.message }} [{{ cmt.timestamp }}]-->
  </div>
</template>

<script>
import { API_URL } from '../config'
import { getCommentByName } from '../services/videos.service'

export default {

  name: 'VideoPlayer',

  props: {
    vidUrl: {
      type: String,
      default: 'https://www.youtube.com/watch?v=14FOPsSCIPs'
    }
  },

  data () {
    return {
      curTime: 0,
      commentList: []
    }
  },

  async mounted () {
    this.commentList = await getCommentByName(this.vidUrl)
  },

  methods: {
    syncCurrentTime () {
      this.curTime = this.$refs?.video?.currentTime
    },

    getVideoUrl (videoName) {
      return API_URL + '/vids/' + videoName + '.mp4'
    },

    getVisibleComments () {
      // this.commentList.filter(cmt => parseInt(cmt.timestamp) < this.curTime)
      return [
        {
          message: 'Debate is not for the weak.',
          timestamp: 1
        },
        {
          message: 'I love your debate. I came in my pants.',
          timestamp: 12
        },
        {
          message: 'why u always gotta bring hitler into the argument',
          timestamp: 22
        },
        {
          message: 'good job show feet pics next time',
          timestamp: 24
        },
        {
          message: 'good job show feet pics next time',
          timestamp: 24
        },
        {
          message: 'good job show feet pics next time',
          timestamp: 24
        },
        {
          message: 'good job show feet pics next time',
          timestamp: 24
        },
        {
          message: 'good job show feet pics next time',
          timestamp: 24
        },
        {
          message: 'good job show feet pics next time',
          timestamp: 24
        },
        {
          message: 'good job show feet pics next time',
          timestamp: 24
        },
        {
          message: 'good job show feet pics next time',
          timestamp: 24
        }
      ].filter(cmt => parseInt(cmt.timestamp) < this.curTime)
    },
    seek (time) {
      this.$refs.video.currentTime = time
    }

  }

}
</script>

<style>
.chatbubble {
  cursor: pointer;
}
</style>
