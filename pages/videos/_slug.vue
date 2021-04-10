<template>
  <v-col>
    <p>{{ filename }}</p>
    <video
      ref="videoPlayer"
      controls
    >
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    </video>
  </v-col>
</template>

<script>
export default {
  props: {
    filename: {
      type: String,
      default: 'File name'
    }
  },
  head () {
    return {
      title: this.filename,
      meta: [
        { hid: 'description', name: 'description', content: 'The video' }
      ]
    }
  }
}
</script>
