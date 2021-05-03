<template>
  <div>
    <p-text-box>
      <template v-slot:header>
        <h1 class="title">
          Flick Up
        </h1>
        <h2 class="date">
          December 2015
        </h2>
      </template>
      <p>
        Flick Up is a sport toy product developed by a Manchester based social entrepreneur company <em>A Little Idea</em>
        that aims to raise awareness of discrimination in the context of sports whilst raising sums for various charities.
        Flick Up, as a symbol, can be compared to the iconic Poppy for Remembrance Day or the Red Nose associated with Comic Relief.
        However, Flick Up as product is intended to enable consumers, players and all strata of society to become the agents
        of a hopeful cultural movement.
      </p>
      <p>
        For this project, I was in charge of developing a logo and a presentation video of the toy. Similar to a Jianzi
        (or chinese hacky sack), the toy features a trapezoidal base made of rubber with several colourful feathers fixed
        to the base. The presentation video was to be shown to various charity organizations in the UK. It was a great
        occasion to test what I learned in my graphic design foundation courses and to perfect my skills in drawing and
        using vector-graphic software.
      </p>
    </p-text-box>
    <picture-frame
      description="Flick Up Video"
    >
      <div class="inner-wrapper">
        <div class="vimeo-player">
          <iframe
            src="https://player.vimeo.com/video/258301704"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        </div>
      </div>
    </picture-frame>
    <image-gallery
      id="flickup"
      :source="gallery"
    />
    <mobile-projects-nav
      :prev="{
        link: '/projects/ruinism',
        title: 'Ruinism'
      }"
    />
  </div>
</template>

<script>
import PTextBox from '~/components/PTextBox'
import ImageGallery from '~/components/ImageGallery'
import MobileProjectsNav from '~/components/MobileProjectsNav'
import PictureFrame from '~/components/PictureFrame'
export default {
  name: 'FlickUp',
  components: { PictureFrame, MobileProjectsNav, PTextBox, ImageGallery },
  layout: 'project',
  data () {
    return {
      gallery: [
        { src: require('~/assets/img/fu-screenshots/1-idea.jpg'), alt: 'An Idea' },
        { src: require('~/assets/img/fu-screenshots/2-game changer.jpg'), alt: 'Game Changer' },
        { src: require('~/assets/img/fu-screenshots/3-cure.jpg'), alt: 'A Cure' },
        { src: require('~/assets/img/fu-screenshots/4-symbol.jpg'), alt: 'A Symbol' },
        { src: require('~/assets/img/fu-screenshots/5-knight.jpg'), alt: 'A weapon' },
        { src: require('~/assets/img/fu-screenshots/6-lighthouse.jpg'), alt: 'A beacon' },
        { src: require('~/assets/img/fu-screenshots/7-kick.jpg'), alt: 'Time to kick it up' },
        { src: require('~/assets/img/fu-screenshots/8-momentum.jpg'), alt: 'Momentum' },
        { src: require('~/assets/img/fu-screenshots/9-time.jpg'), alt: "It's time" },
        { src: require('~/assets/img/fu-screenshots/10-flight_or_fight.jpg'), alt: 'Flight of fight' },
        { src: require('~/assets/img/fu-screenshots/11-toss.jpg'), alt: 'Toss' }
      ]
    }
  },
  head () {
    return {
      title: 'Flick Up'
    }
  }
}
</script>

<style scoped>
  .inner-wrapper{
    margin: 0 auto;
    max-width: 125vh;
  }

  .vimeo-player{
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }

  .vimeo-player iframe{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>
