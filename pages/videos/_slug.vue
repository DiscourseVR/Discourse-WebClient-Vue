<template>
  <div>
    <!-- eslint-disable -->
    <videoplayer :vidUrl="$route.params.slug" />
  </div>
</template>

<script>
import videoplayer from '../../components/videoplayer'

export default {
  components: { videoplayer },

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
