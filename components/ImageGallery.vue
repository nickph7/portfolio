<template>
  <div class="gallery-wrapper">
    <client-only>
      <swiper ref="imageGallery" class="swiper gallery" :options="gallerySwiperOptions">
        <template v-if="custom">
          <slot name="customSlides" />
        </template>
        <template v-else>
          <swiper-slide v-for="(img, index) in src" :key="index" class="gallery-slide">
            <img :src="require(`~/assets/img/${img}`)" class="gallery-img" :alt="alt[index]">
          </swiper-slide>
        </template>
      </swiper>
    </client-only>
    <div class="gal-navigation">
      <div class="gal-controls">
        <m-button :class="id + 'gallery-swiper-prev'" class="gal-button gal-next" :size="buttonSize">
          <i class="icon-left-dir" />
        </m-button>
        <div
          :class="id + 'gallery-swiper-fract'"
          class="px-4 gal-fract text-mwhite font-acuminXcondensed self-center text-center"
        />
        <m-button :class="id + 'gallery-swiper-next'" class="gal-button gal-prev" :size="buttonSize">
          <i class="icon-right-dir" />
        </m-button>
      </div>
      <div class="gallery-title text-mwhite font-acuminCondensed flex-auto self-stretch bg-mdarktwo">
        <div class="flex justify-center items-center h-full text-center">
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
  .gallery-wrapper {
    width: 100%;
    position: relative;
    background-color: var(--mdarkone);
  }

  /*Need to offset because of borders */
  .swiper .swiper-wrapper{
    bottom: 2px;
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
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 10;
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
