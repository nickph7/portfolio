<template>
  <div class="gallery-wrapper relative bg-mdarkone">
    <client-only>
      <swiper ref="imageGallery" class="swiper gallery" :options="gallerySwiperOptions">
        <swiper-slide v-for="(img, index) in src" :key="index" class="gallery-slide">
          <img :src="require(`~/assets/img/${img}`)" class="gallery-img" :alt="alt[index]">
        </swiper-slide>
      </swiper>
    </client-only>
    <div class="gal-navigation absolute bottom-0 w-full z-10 flex items-center">
      <div class="gal-controls inline-flex bg-mdarktwo flex-none">
        <m-button :class="id + 'gallery-swiper-prev'" class="gal-button gal-next" :size="buttonSize">
          <i class="icon-left-dir" />
        </m-button>
        <div
          :class="id + 'gallery-swiper-fract'"
          class="px-4 gal-fract text-mwhite font-acuminXcondensed self-center"
        />
        <m-button :class="id + 'gallery-swiper-next'" class="gal-button gal-prev" :size="buttonSize">
          <i class="icon-right-dir" />
        </m-button>
      </div>
      <div v-if="title" class="gallery-title text-mwhite font-acuminCondensed flex-auto self-stretch bg-mdarktwo">
        <div class="flex justify-center items-center h-full">
          <p>{{ alt[currentIndex] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from '~/components/MButton'
export default {
  name: 'ImageGallery',
  components: { MButton },
  props: {
    id: {
      type: String,
      required: true
    },
    src: {
      type: Array,
      default () {
        return ['dummy.jpg']
      }
    },
    alt: {
      type: Array,
      default () {
        return ['Picture -1']
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentIndex: 0,
      gallerySwiperOptions: {
        allowTouchMove: false,
        centeredSlides: true,
        pagination: {
          el: '.' + this.id + 'gallery-swiper-fract',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.' + this.id + 'gallery-swiper-next',
          prevEl: '.' + this.id + 'gallery-swiper-prev'
        },
        on: {
          init: () => {
            setTimeout(() => {
              window.dispatchEvent(new Event('resize'))
            }, 200)
          },
          slideChange: () => {
            this.currentIndex = this.$refs.imageGallery.$swiper.activeIndex
          }
        }
      },
      buttonSize: 40
    }
  }
}
</script>

<style scoped lang="postcss">
  .gallery-wrapper {
    width: 100%;
    /* min-width: 0; */
  }

  .gallery{
    height: 85vh;
  }

  .gallery-slide {
    height: auto;
  }

  .gallery-img {
    margin: 0 auto;
    height: 100%;
    object-fit: contain;
  }

  .gal-next{
    border-right: 1px solid var(--mdarkthree);
  }

  .gal-prev, .gallery-title{
    border-left: 1px solid var(--mdarkthree);
  }

  .gal-navigation {
    border-top: 1px solid var(--mdarkthree);
  }

  .gal-controls{
    width: 140px;
  }

  .gallery-title{
    @apply text-sm;
    line-height: 1.2;
  }
</style>
