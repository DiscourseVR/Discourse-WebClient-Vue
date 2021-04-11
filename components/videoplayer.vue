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
    <div>
      <p
        v-for="cmt in commentList"
        :key="cmt"
      >
        {{ cmt }}
      </p>
    </div>
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
    }

  }

}
</script>

<style>

</style>
