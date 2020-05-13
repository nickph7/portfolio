<template>
  <div class="homepage-content flex flex-col items-center overflow-hidden ">
    <vue-plyr v-if="isMobile" :options="options" class="h-full my-plyr-mobile">
      <div class="my-video" data-plyr-provider="vimeo" data-plyr-embed-id="418107870" />
    </vue-plyr>
    <vue-plyr v-else :options="mobileOptions" class="h-full my-plyr">
      <div class="my-video" data-plyr-provider="vimeo" data-plyr-embed-id="417326836" />
    </vue-plyr>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  data () {
    return {
      isMobile: false,
      options: {
        autoplay: true,
        muted: true,
        loop: { active: true },
        controls: false
      }
    }
  },
  computed: {
    mobileOptions () {
      return Object.assign({ ratio: '76:135' }, this.options)
    }
  },
  mounted () {
    window.addEventListener('resize', this.myWindowResize)
    this.updateSize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.myWindowResize)
  },
  methods: {
    myWindowResize: debounce(function () {
      this.updateSize()
    }, 200),
    updateSize () {
      this.isMobile = window.innerWidth <= 600
    }
  }
}
</script>

<style>
  .my-plyr{
    width: 100%;
    min-width: 1440px;
  }

  .my-plyr-mobile{
    width: 100%;
  }

  .my-plyr .plyr--video{
    background: var(--mdarkone);
  }

  .homepage-content{
    height: 100%;
    max-height: 0;
    justify-content: center;
    background-color: #000000;
  }

</style>
