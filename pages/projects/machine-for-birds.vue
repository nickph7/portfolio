<template>
  <div>
    <cover>
      <img src="~/assets/img/m4b-screenshots/m4b-synth-fm-patch.png">
    </cover>
    <p-text-box>
      <template v-slot:header>
        <h1 class="title">
          Machine to hang with birds
        </h1>
        <h2 class="date">
          December 2019
        </h2>
      </template>
      <p>
        <em>Machine to hang with birds</em> is a generative music project made in Max MSP based on the song
        <em>Hanging with the birds</em> by Dwayne Parris. In the original piece, Parris layered different bird soundscapes with
        gentle tumbling sub bass and subtle, lo-fi keys. Several one-shots sampled sounds — a video game bleep,
        cartoonish sound effects and other exotic percussions — are superposed above the stripped down composition
        which feels refreshing and intriguing. The whole feels carefully constructed yet unhurried.
      </p>
    </p-text-box>
    <image-gallery
      id="m4b"
      :img-src="gallery.urls"
      title="different views of the process"
    />
    <mobile-projects-nav
      :prev="{
        link: '/projects/equilibria',
        title: 'Equilibria'
      }"
      :next="{
        link: '/projects/flick-up',
        title: 'Flick Up'
      }"
    />.
  </div>
</template>

<script>
import Cover from '@/components/Cover'
import PTextBox from '~/components/PTextBox'
import MobileProjectsNav from '~/components/MobileProjectsNav'
import ImageGallery from '~/components/ImageGallery'
export default {
  name: 'MachineForBirds',
  components: { ImageGallery, MobileProjectsNav, PTextBox, Cover },
  layout: 'project',
  data () {
    return {
      gallery: {
        urls: [
          'm4b-screenshots/m4b-fullview.png',
          'm4b-screenshots/m4b-bird-playback.png'
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
