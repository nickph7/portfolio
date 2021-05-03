<template>
  <div class="">
    <cover>
      <img src="~/assets/img/equilibria/eq-fullview2.jpg">
    </cover>
    <p-text-box class="p-4 text-box">
      <template v-slot:header>
        <h1 class="title">
          Equilibria
        </h1>
        <h2 class="collaborator">
          Collaborator: Audrey Laure St-Louis, Allan Pichardo, Emily Wu, Dylan Hancock
        </h2>
        <h2 class="date">
          December 2019
        </h2>
      </template>
      <p class="text">
        Equilibria is a dialogue between an ecosystem in peril and the viewer. As visitors interact with an interactive
        sculpture, they are forced to confront the reality that their consumption ultimately leads to the system’s
        destruction.
        This realization prompts viewers to consider how best to conserve the experience for future visitors, who serve
        as a proxy for future generations. Equilibria invites viewers to think about their place within the global
        ecosystem and hopes to develop an awareness of their own finite reality.
      </p>
    </p-text-box>
    <picture-frame
      :source="{ src: require('~/assets/img/equilibria/eq-fullview.jpg'), alt: 'Full view of the structure' }"
    />
    <p-text-box>
      <p class="text">
        For this project, I was tasked to design and build the central structure, and program our interactive branches
        via Arduino and UDP protocol. In addition, I worked actively with my team on the design of the forest and
        how we would kill section of the forest when visitors would stay too long in one part of the installation.
        With the help of my teammates Emily and Audrey, we went on the top of the Mount Royal to get some footage
        for the installation.
      </p>
      <p class="text">
        Equilibria was selected to be part of Concordia's Design and Computation Arts year end show of 2020, and earned the award for best artwork in the category of Sustainability and Environmental Awareness. For the occasion, we have designed a stripped-down version of the piece suitable for different exhibition environments.
      </p>
    </p-text-box>
    <image-gallery
      id="youtube-gallery"
      class="border-b border-t"
      :custom="true"
      :alt="youtubeAlts"
    >
      <template v-slot:customSlides>
        <swiper-slide class="gallery-slide">
          <div class="inner-wrapper">
            <div class="youtube-player">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UwcoFXKnpOw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="gallery-slide">
          <div class="inner-wrapper">
            <div class="youtube-player">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/alJGOYO-9xU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </swiper-slide>
      </template>
    </image-gallery>
    <!-- tall gallery -->
    <image-gallery
      id="equilibria"
      class=""
      :source="gallery"
    />
    <mobile-projects-nav
      :prev="{
        link: '/projects/infinite',
        title: 'In.finite'
      }"
      :next="{
        link: '/projects/ruinism',
        title: 'Ruinism'
      }"
    />
  </div>
</template>

<script>
import MobileProjectsNav from '~/components/MobileProjectsNav'
import ImageGallery from '~/components/ImageGallery'
import PTextBox from '~/components/PTextBox'
import PictureFrame from '~/components/PictureFrame'
import Cover from '~/components/Cover'

export default {
  name: 'Equilibria',
  // eslint-disable-next-line vue/no-unused-components
  components: { Cover, PictureFrame, PTextBox, ImageGallery, MobileProjectsNav },
  layout: 'project',
  data () {
    return {
      gallery: [
        { src: require('~/assets/img/equilibria/eq-ball.jpg'), alt: 'View of the ball' },
        { src: require('~/assets/img/equilibria/eq-tree.jpg'), alt: 'Test with vellum paper' },
        { src: require('~/assets/img/equilibria/eq-water.jpg'), alt: 'Ink drops in the water' },
        { src: require('~/assets/img/equilibria/eq-light.jpg'), alt: 'Programming the lights' },
        { src: require('~/assets/img/equilibria/eq-structure.jpg'), alt: 'Finishing the structure' }
      ],
      youtubeAlts: [
        'Demonstration of the artwork',
        'Trailer for the stripped-down version'
      ]
    }
  },
  head () {
    return {
      title: 'Equilibria'
    }
  }
}
</script>

<style scoped>
.inner-wrapper{
  margin: 0 auto;
  max-width: 120vh;
}

.youtube-player{
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
}

.youtube-player iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
