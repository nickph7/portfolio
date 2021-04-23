<template>
  <div>
    <cover>
      <img src="~/assets/img/ruinism/ruin-cover.jpg" alt="cover">
    </cover>
    <p-text-box>
      <template v-slot:header>
        <h1 class="title">
          Ruinism
        </h1>
        <h2 class="date">
          January 2019
        </h2>
      </template>
      <p class="text">
        Stuart Howard's third album <em>Ruinism</em> certainly didn't go unnoticed. Considered by most as an affirmation
        of his musical career, Lapalux's compositions veer off into the abstract, somewhere between a classical and
        post-electro mindset. Prominently featuring women collaborator, the record can feels as much cold and dystopic
        as sensitive and humane.
      </p>
      <p class="text">
        For this project I was tasked to redesign the vinyl sleeve of this album. Applying the iterative design
        methodology, I meticulously explored various concepts and refined my ideas to create a strong design for the
        sleeve. The final piece is a portrait of my listening experience of the album. The colour palette is evocative
        of the strong feminine contribution to the album, while the shape and texture is a depiction of the abstract
        quality of Howard's composition.
      </p>
    </p-text-box>
    <div class="galleries">
      <image-gallery
        v-for="gallery in galleries"
        :id="gallery.id"
        :key="gallery.id"
        class="gallery"
        :src="gallery.src"
        :alt="gallery.alt"
      />
    </div>
    <mobile-projects-nav
      :prev="{
        link: '/projects/equilibria',
        title: 'Equilibria'
      }"
      :next="{
        link: '/projects/flick-up',
        title: 'Flick Up'
      }"
    />
  </div>
</template>

<script>
import Cover from '~/components/Cover'
import PTextBox from '~/components/PTextBox'
import ImageGallery from '~/components/ImageGallery'
import MobileProjectsNav from '~/components/MobileProjectsNav'

export default {
  name: 'Ruinism',
  components: { ImageGallery, PTextBox, Cover, MobileProjectsNav },
  layout: 'project',
  data () {
    return {
      galleries: [
        {
          id: 'earlyConcepts',
          src: [
            'ruinism/ruin-concept1.jpg',
            'ruinism/ruin-concept2.jpg',
            'ruinism/ruin-concept3.jpg'
          ],
          alt: [
            'Iteration 1: Early Sketches of concepts',
            'Iteration 1: Early Sketches of concepts',
            'Iteration 1: Early Sketches of concepts'
          ]
        },
        {
          id: 'digitalConcepts',
          src: [
            'ruinism/ruin-explo1.jpg',
            'ruinism/ruin-explo2.jpg',
            'ruinism/ruin-explo3.jpg',
            'ruinism/ruin-explo4.jpg',
            'ruinism/ruin-explo-texture.jpg'
          ],
          alt: [
            'Iteration 2: Digital exploration of stronger concepts',
            'Iteration 2: Digital exploration of stronger concepts',
            'Iteration 2: Digital exploration of stronger concepts',
            'Iteration 2: Digital exploration of stronger concepts',
            'Exploration of textures for the vinyl disk stickers'
          ]
        },
        {
          id: 'finalRender',
          src: [
            'ruinism/ruin-front.jpg',
            'ruinism/ruin-back.jpg'
          ],
          alt: [
            'Final render digital',
            'Final render digital'
          ]
        },
        {
          id: 'analogCover',
          src: [
            'ruinism/ruin-anacover-back.jpg',
            'ruinism/ruin-anacover-front.jpg'
          ],
          alt: [
            'Final render analog',
            'Final render analog'
          ]
        }
      ]
    }
  },
  head () {
    return {
      title: 'Ruinism'
    }
  }
}
</script>

<style scoped>
.galleries .gallery:not(:last-child){
  border-bottom: 1px solid var(--mdarkthree);
}
</style>
