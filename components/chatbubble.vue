<template>
  <div>
    <div
      class="bg-gray-300 w-72 mx-4 my-2 p-2 rounded-3xl transition duration-500 ease-in-out hover:scale-110 transform"
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
  }
}
</script>
