<template>
  <client-only>
    <div class="flex flex-col items-center overflow-hidden homepage-content text-mwhite">
      <template v-if="isMobile">
        <vue-plyr :options="mobileOptionsComputed" class="h-full my-plyr-mobile">
          <div class="my-video" data-plyr-provider="vimeo" data-plyr-embed-id="418107870" />
        </vue-plyr>
      </template>
      <template v-else>
        <vue-plyr :options="options" class="h-full my-plyr">
          <div class="my-video" data-plyr-provider="vimeo" data-plyr-embed-id="417326836" />
          <!-- 417326836 test-id:259411563 -->
        </vue-plyr>
      </template>
    </div>
  </client-only>
</template>

<script>
export default {
  data () {
    return {
      isMobile: false,
      options: {
        storage: {
          enabled: false
        },
        muted: true,
        autoplay: true,
        loop: { active: true },
        controls: false
      }
    }
  },
  computed: {
    mobileOptionsComputed () {
      return Object.assign({ ratio: '76:135' }, this.options)
    }
  },
  mounted () {
    window.matchMedia('(max-width: 600px)').matches ? this.isMobile = true : this.isMobile = false
  },
  head () {
    return {
      title: 'Home'
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
