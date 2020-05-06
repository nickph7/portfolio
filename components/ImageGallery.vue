<template>
  <div class="gallery-wrapper relative bg-mdarkone">
    <client-only>
      <swiper class="swiper gallery" :options="gallerySwiperOptions">
        <swiper-slide v-for="(img, index) in imgSrc" :key="index" class="gallery-slide">
          <img :src="require(`~/assets/img/${img}`)" class="gallery-img">
        </swiper-slide>
      </swiper>
    </client-only>
    <div class="gal-navigation absolute bottom-0 w-full z-10 flex items-center">
      <div class="gal-controls inline-flex bg-mdarktwo">
        <m-button :class="id + 'gallery-swiper-prev'" class="gal-button gal-next">
          <i class="icon-left-dir" />
        </m-button>
        <div
          :class="id + 'gallery-swiper-fract'"
          class="px-4 gal-fract text-mwhite font-acuminXcondensed self-center"
        />
        <m-button :class="id + 'gallery-swiper-next'" class="gal-button gal-prev">
          <i class="icon-right-dir" />
        </m-button>
      </div>
      <div v-if="title" class="gallery-title text-mwhite font-acuminCondensed flex-grow self-stretch bg-mdarktwo">
        <div class="flex justify-center items-center h-full">
          <p>{{ title }}</p>
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
    imgSrc: {
      type: Array,
      default () {
        return ['https://picsum.photos/500', 'https://picsum.photos/200', 'https://picsum.photos/200']
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      gallerySwiperOptions: {
        allowTouchMove: false,
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
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  .gallery-wrapper {
    width: 100%;
  }

  .gallery{
    max-height: 85vh;
  }

  .gallery-slide {
    height: auto;
  }

  .gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gal-next{
    border-right: 1px solid var(--mdarkthree);
  }

  .gal-prev, .gallery-title{
    border-left: 1px solid var(--mdarkthree);
  }

  .gal-navigation{
    border-top: 1px solid var(--mdarkthree);
  }
</style>
