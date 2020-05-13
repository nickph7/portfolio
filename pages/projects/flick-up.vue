<template>
  <div>
    <p-text-box>
      <template v-slot:header>
        <h1 class="title">
          Flick Up
        </h1>
        <h2 class="date">
          December 2019
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
    <m-vimeo-player :id="258301704" title="Flick Up 2016" />
    <image-gallery
      id="flickup"
      :src="gallery.src"
      :alt="gallery.alt"
      title="deprecated"
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
import MVimeoPlayer from '~/components/MVimeoPlayer'
import ImageGallery from '~/components/ImageGallery'
import MobileProjectsNav from '~/components/MobileProjectsNav'
export default {
  name: 'FlickUp',
  components: { MobileProjectsNav, MVimeoPlayer, PTextBox, ImageGallery },
  layout: 'project',
  data () {
    return {
      gallery: {
        src: [
          'fu-screenshots/1-idea.jpg',
          'fu-screenshots/2-game changer.jpg',
          'fu-screenshots/3-cure.jpg',
          'fu-screenshots/4-symbol.jpg',
          'fu-screenshots/5-knight.jpg',
          'fu-screenshots/6-lighthouse.jpg',
          'fu-screenshots/7-kick.jpg',
          'fu-screenshots/8-momentum.jpg',
          'fu-screenshots/9-time.jpg',
          'fu-screenshots/10-flight_or_fight.jpg',
          'fu-screenshots/11-toss.jpg'
        ],
        alt: [
          'An Idea',
          'Game Changer',
          'A Cure',
          'A Symbol',
          'A weapon',
          'A beacon',
          'Time to kick it up',
          'Momentum',
          "It's time",
          'Flight of fight',
          'Toss'
        ]
      }
    }
  },
  computed: {
    alt () {
      return Array(this.gallery.src.length).fill('Stills')
    }
  }
}
</script>

<style scoped>

</style>
