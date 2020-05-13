<template>
  <client-only>
    <div class="video-frame mborder-bottom mborder-top my-8">
      <div class="vimeo-player-wrapper bg-mdarkone">
        <vimeo-player
          ref="player"
          class="my-vimeo-player"
          :video-id="id"
          :options="options"
        />
      </div>
      <div class="video-title text-center text-mwhite font-acuminCondensed my-4">
        <h3>{{ title }}</h3>
      </div>
    </div>
  </client-only>
</template>
<script>
export default {
  name: 'MVimeoPlayer',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      options: {
        responsive: true
      }
    }
  }
}
</script>

<style scoped>
.my-vimeo-player{
  max-width: 135vh;
  margin: 0 auto;
}
</style>
