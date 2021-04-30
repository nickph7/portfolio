<template>
  <client-only>
    <div class="video-frame border-t">
      <title-bar>
        <h3>{{ vimeoTitle }}</h3>
      </title-bar>
      <div class="vimeo-player-wrapper bg-mdarkone w-full">
        <div
          class="inner-wrapper"
          :style="{'max-width': wrapperMaxWidth + 'vh'}"
        >
          <vimeo-player
            ref="player"
            class="my-vimeo-player"
            :style="{'padding-bottom': aspectRatio + '%'}"
            :video-id="id"
            :options="options"
            @ready="playerReady"
          />
        </div>
      </div>
      <!-- TODO: what to do with this text? Suggestion: fetch video title and put it above and keep the title at the bottom -->
      <div class="my-4 text-center text-mwhite font-acuminCondensed">
        <h3>{{ title }}</h3>
      </div>
    </div>
  </client-only>
</template>
<script>
import TitleBar from '~/components/TitleBar'
export default {
  name: 'MVimeoPlayer',
  components: { TitleBar },
  props: {
    // TODO: Needs to be a string (warning)
    id: {
      type: String,
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
        responsive: false,
        portrait: false,
        title: false
      },
      vimeoTitle: '',
      aspectRatio: 56.25,
      wrapperMaxWidth: 120
    }
  },
  // beforeUpdate () {
  //   this.$nextTick(() => {
  //     this.$refs.player.getVideoTitle().then((title) => { this.vimeoTitle = title })
  //   })
  // },
  methods: {
    playerReady () {
      const myPlayer = this.$refs.player.player
      myPlayer.getVideoTitle().then((title) => { this.vimeoTitle = title })
      Promise.all([myPlayer.getVideoWidth(), myPlayer.getVideoHeight()]).then((dimensions) => {
        const width = dimensions[0]
        const height = dimensions[1]
        // console.log(`Video has width: ${width}, and height: ${height}`)
        this.aspectRatio = (height / width) * 100
        this.wrapperMaxWidth = (width / height) * 68
      })
    }
  }
}
</script>

<style>
/* NOT SCOPED to reach iframe*/

.inner-wrapper{
  margin: 0 auto;
  max-width: 120vh;
}

.my-vimeo-player {
  position: relative;
  height: 0;
}

.my-vimeo-player iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
