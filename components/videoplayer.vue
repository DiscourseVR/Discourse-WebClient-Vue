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
      <source :src="vidUrl">
    </video>
    <p>curTime {{ curTime }}</p>
  </div>
</template>

<script>
import { API_URL } from '../config'

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
      curTime: 0
    }
  },

  methods: {
    syncCurrentTime () {
      this.curTime = this.$refs.video.currentTime
    },

    getVideoUrl (videoName) {
      return API_URL + '/vids/' + videoName
    }

  }

}
</script>

<style>

</style>
