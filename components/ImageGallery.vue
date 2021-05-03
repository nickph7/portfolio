<template>
  <div class="gallery-wrapper">
    <!-- TODO: fix this title too-->
    <title-bar>
      <h3>{{ title }}</h3>
    </title-bar>
    <client-only>
      <swiper ref="imageGallery" class="swiper gallery" :options="gallerySwiperOptions">
        <!-- custom slides -->
        <template v-if="custom">
          <slot name="customSlides" />
        </template>
        <!-- default image slides -->
        <template v-else>
          <swiper-slide v-for="(img, index) in source" :key="index" class="img-slide">
            <img :src="img.src" :alt="img.alt" class="gallery-img">
          </swiper-slide>
        </template>
      </swiper>
    </client-only>
    <!-- NAVI -->
    <div class="gal-navigation">
      <div class="gal-controls">
        <m-button :class="id + 'gallery-swiper-prev'" class="gal-button gal-next" :size="buttonSize">
          <i class="icon-left-dir" />
        </m-button>
        <div
          :class="id + 'gallery-swiper-fract'"
          class="self-center text-center text-mwhite font-acuminXcondensed"
        />
        <m-button :class="id + 'gallery-swiper-next'" class="gal-button gal-prev" :size="buttonSize">
          <i class="icon-right-dir" />
        </m-button>
      </div>
      <div class="self-stretch flex-auto gallery-title text-mwhite font-acuminCondensed bg-mdarktwo">
        <div class="flex items-center justify-center h-full text-center">
          <p>{{ custom ? alt[currentIndex] : source[currentIndex].alt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from '~/components/MButton'
import TitleBar from '~/components/TitleBar'
export default {
  name: 'ImageGallery',
  components: { TitleBar, MButton },
  props: {
    custom: {
      type: Boolean,
      default: false
    },
    // REQUIRED TO IDENTIFY MULTIPLE GALLERIES
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    source: {
      type: Array,
      required: false, // if this is not custom this is required
      default () { return [] }
    },
    alt: {
      type: Array,
      required: false,
      default () { return [] }
    }
  },
  data () {
    return {
      currentIndex: 0,
      gallerySwiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: false,
        centeredSlides: true,
        normalizeSlideIndex: false,
        init: false,
        breakpoints: {
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 60
          }
        },
        pagination: {
          el: '.' + this.id + 'gallery-swiper-fract',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.' + this.id + 'gallery-swiper-next',
          prevEl: '.' + this.id + 'gallery-swiper-prev'
        },
        on: {
          slideChange: () => {
            if (this.$refs.imageGallery.$swiper !== undefined) {
              this.currentIndex = this.$refs.imageGallery.$swiper.activeIndex
            }
          }
        }
      },
      buttonSize: 40
    }
  },
  computed: {
    swiper () {
      return this.$refs.imageGallery.$swiper
    }
  },
  mounted () {
    const interval = setInterval(() => {
      if (this.$refs.imageGallery) {
        this.swiper.init()
        clearInterval(interval)
      }
    }, 50)
  }
}

// validator (prop) {
//   return prop.every(el => 'src' in el && 'alt' in el && Object.keys(el).length === 2) && prop.length > 0
// }
</script>

<style>
  /** SWIPER-CONTAINER
   ** gallery-wraper > swiper-container (gallery) > swiper-wrapper (the track) > gallery-slide (swiper-slide) > gallery-img
   */

  .gallery-wrapper {
    width: 100%;
    position: relative;
    background-color: var(--mdarkone);
  }

  .swiper-wrapper {
    align-items: center;
  }

  /* applied directly to swiper-slide inner element */
  /* WARN: This might applied unwanted style on custom slides */
  .gallery .swiper-slide > *{
    margin: 0 auto;
    max-height:70vh;
    min-height: 45vh;
    object-fit: contain;
  }

  @media (min-width: 1280px){
    .gallery .swiper-slide.img-slide {
      width: auto !important;
    }
  }

  /* SWIPER NAVIGATION */
  .gal-next{
    border-right: 1px solid var(--mdarkthree);
  }

  .gal-prev, .gallery-title{
    border-left: 1px solid var(--mdarkthree);
  }

  /* TODO: Improve buttons and controls */
  .gal-navigation {
    width: 100%;
    display: flex;
    align-items: center;
    border-top: 1px solid var(--mdarkthree);
  }

  .gal-controls{
    display: inline-flex;
    background-color: var(--mdarktwo);
    flex: none;
    width: 140px;
  }

  .gallery-title{
    font-size: 0.875rem;
    line-height: 1.2;
  }
</style>
