<template>
  <div class="mx-2">
    <div
      class="items-center bg-purple-300 w-52 mx-4 my-2 p-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl transition duration-500 ease-in-out hover:scale-110 transform"
    >
      {{ message }}
    </div>
    <div
      class="font-thin float-right"
    >
      {{ timestamp }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'File name'
    },
    timestamp: {
      type: Number,
      default: 0
    }
  },
  methods: {
    setTime () {
      this.$refs.video.currentTime = this.timestamp
    }
  }
}
</script>
<style scoped>
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
