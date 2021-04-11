<template>
  <div
    class="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-3xl clearfix"
  >
    It will be used for a full tutorial about building a chat app with vue, tailwind and firebase.
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
  }
}
</script>
