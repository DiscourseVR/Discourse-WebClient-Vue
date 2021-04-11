<template>
  <div class="h-full flex space-x-4 overflow-hidden">
    <div class="object-scale-down mx-4 container w-2/3">
      <video
        ref="video"
        controls
        autoPlay
        muted
        @timeupdate="syncCurrentTime"
      >
        <source :src="getVideoUrl(vidUrl)">
      </video>
    </div>
    <div class="overflow-y-auto overflow-x-hidden w-1/4 bg-indigo-50 flex flex-col items-center">
      <h1 class="font-bold text-3xl m-10">
        Comments:
      </h1>
      <chatbubble
        v-for="(cmt,ind) in getVisibleComments(commentList)"
        :key="ind"
        :message="cmt.message"
        :timestamp="cmt.timestamp"
        class="chatbubble"
        @click.native="seek(cmt.timestamp)"
      />
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
