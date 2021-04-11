<template>
  <div>
    <p>{{ getVideoUrl(vidUrl) }}</p>
    <video
      ref="video"
      controls
      autoPlay
      muted
      @timeupdate="syncCurrentTime"
    >
      <source :src="getVideoUrl(vidUrl)">
    </video>
    <p>curTime {{ curTime }}</p>
    <!-- <div>
      <chatbubble
        v-for="(cmt,ind) in getVisibleComments(commentList)"
        :key="ind"
        :message="cmt.message"
        :timestamp="cmt.timestamp"
      />
      {{ cmt.sender }}: {{ cmt.message }} [{{ cmt.timestamp }}]
    </div> -->
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
      this.curTime = this.$refs.video.currentTime
    },

    getVideoUrl (videoName) {
      return API_URL + '/vids/' + videoName + '.mp4'
    },

    getVisibleComments () {
      return this.commentList.filter(cmt => parseInt(cmt.timestamp) < this.curTime)
    }

  }

}
</script>

<style>

</style>
