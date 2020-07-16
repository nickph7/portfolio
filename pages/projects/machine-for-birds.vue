<template>
  <div>
    <cover>
      <img src="~/assets/img/m4b-screenshots/m4b-synth-fm-patch.jpg">
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
      <p>
        Keeping with the spirit of the original track, <em>Machine to hang with birds</em> consists of three main
        components: the playback of the bird soundscape, the step sequencer, and a synthesizer. These three
        components were first developed individually, then put together in the main patch called Machine 4 birds,
        where the user can control individual components, tweak the final mix, play and pause the sequence, change
        the tempo, and trigger random variations.
      </p>
    </p-text-box>
    <m-vimeo-player :id="386896207" title="Machine to hand with birds Demo" />
    <image-gallery
      id="m4b"
      class="mborder-top"
      :src="gallery.src"
      :alt="gallery.alt"
    />
    <mobile-projects-nav
      :prev="{
        link: '/projects/equilibria',
        title: 'Equilibria'
      }"
      :next="{
        link: '/projects/ruinism',
        title: 'Ruinism'
      }"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover'
import PTextBox from '~/components/PTextBox'
import MobileProjectsNav from '~/components/MobileProjectsNav'
import ImageGallery from '~/components/ImageGallery'
import MVimeoPlayer from '~/components/MVimeoPlayer'

export default {
  name: 'MachineForBirds',
  components: { MVimeoPlayer, ImageGallery, MobileProjectsNav, PTextBox, Cover },
  layout: 'project',
  data () {
    return {
      gallery: {
        src: [
          'm4b-screenshots/m4b-fullview.jpg',
          'm4b-screenshots/m4b-bird-playback.jpg',
          'm4b-screenshots/m4b-steps.jpg',
          'm4b-screenshots/m4b-synth-fm-patch.jpg',
          'm4b-screenshots/m4b-synth-interface.jpg'
        ],
        alt: [
          'Full view of the patch',
          'Picking a random bird soundscape using the dictionary',
          'Internal logic of the step sequencer',
          'Partial view of the fm routing of the synth',
          'Interface of the synth'
        ]
      }
    }
  }
}
</script>
