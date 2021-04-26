<template>
  <div class="gallery-wrapper">
    <client-only>
      <swiper ref="imageGallery" class="swiper gallery" :options="gallerySwiperOptions">
        <!-- custom slides -->
        <template v-if="custom">
          <slot name="customSlides" />
        </template>
        <!-- default image slides -->
        <template v-else>
          <swiper-slide v-for="(img, index) in src" :key="index">
            <img :src="require(`~/assets/img/${img}`)" :alt="alt[index]">
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
          class="self-center px-4 text-center gal-fract text-mwhite font-acuminXcondensed"
        />
        <m-button :class="id + 'gallery-swiper-next'" class="gal-button gal-prev" :size="buttonSize">
          <i class="icon-right-dir" />
        </m-button>
      </div>
      <div class="self-stretch flex-auto gallery-title text-mwhite font-acuminCondensed bg-mdarktwo">
        <div class="flex items-center justify-center h-full text-center">
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
    custom: {
      type: Boolean,
      default: false
    },
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
      required: true,
      default () {
        return ['Picture -1']
      }
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

<style>
  /** SWIPER-CONTAINER
   ** gallery-wraper > swiper-container (gallery) > swiper-wrapper (the track) > gallery-slide (swiper-slide) > gallery-img
   */

  .gallery-wrapper {
    width: 100%;
    position: relative;
    background-color: var(--mdarkone);
  }

  /* Overrides swiper-slide height: 100% */
  /* Class applied on swiper-slide el (CHANGE SO DON"T NEED TO APPLY IT TO ELEMENTS)*/
  .gallery .swiper-slide {
    height: auto;
    min-height: 45vh;
  }

  /* applied directly to swiper-slide inner element */
  .gallery .swiper-slide > *{
    margin: 0 auto;
    height: 100%;
    max-height:70vh;
    object-fit: contain;
  }

  /* Gallery navigation */
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
    height: 50px;
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
