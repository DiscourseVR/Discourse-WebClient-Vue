<template>
  <div class="overflow-hidden">
    <!-- eslint-disable -->
    <videoplayer :vidUrl="$route.params.slug" />

    <opponents :vidUrl="$route.params.slug" />
  </div>

</template>

<script>
import videoplayer from '../../components/videoplayer'

export default {
  components: { videoplayer }

  // head () {
  //   return {
  //     title: 'DiscourseVR',
  //     meta: [
  //       { hid: 'description', name: 'description', content: 'The video' }
  //     ]
  //   }
  // }
}
</script>
