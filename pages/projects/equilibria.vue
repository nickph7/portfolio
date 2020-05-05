<template>
  <div class="bg-mdarktwo">
    <div class="cover">
      <img src="~/assets/img/equilibria/eq-fullview2.jpg">
    </div>
    <div class="text-box p-4">
      <h1 class="title uppercase text-5xl">
        Equilibria
      </h1>
      <h2 class="subtitle">
        December 2019
      </h2>
      <p class="text">
        Equilibria is a dialogue between an ecosystem in peril and the viewer. As visitors interact with an interactive
        sculpture, they are forced to confront the reality that their consumption ultimately leads to the system’s
        destruction.
        This realization prompts viewers to consider how best to conserve the experience for future visitors, who serve
        as a proxy for future generations. Equilibria invites viewers to think about their place within the global
        ecosystem and hopes to develop an awareness of their own finite reality.
      </p>
    </div>
    <!-- picture frame -->
    <div class="picture-frame py-4">
      <img src="~/assets/img/equilibria/eq-fullview.jpg">
    </div>
    <div>
      <p class="text p-4">
        For this project, I was tasked to design and build the central structure, and program our interactive branches
        via Arduino and UDP protocol. In addition, I worked actively with my team on the design of the forest and
        how we would kill section of the forest when visitors would stay too long in one part of the installation.
        With the help of my teammates Emily and Audrey, we went on the top of the Mount Royal to get some footage
        for the installation
      </p>
    </div>
    <!-- tall -->
    <image-gallery
      id="equilibria"
      :img-src="gallery.urlone"
      title="Some pictures of the process"
    />
    <mobile-projects-nav
      :next="{
        link: '/projects/machine-for-birds',
        title: 'Machine For Birds'
      }"
    />
  </div>
</template>

<script>
import MobileProjectsNav from '~/components/MobileProjectsNav'
import ImageGallery from '~/components/ImageGallery'
export default {
  name: 'Equilibria',
  components: { ImageGallery, MobileProjectsNav },
  layout: 'project',
  data () {
    return {
      gallery: {
        urlone: [
          'equilibria/eq-ball.jpg',
          'equilibria/eq-tree.jpg',
          'equilibria/eq-water.jpg',
          'equilibria/eq-light.jpg',
          'equilibria/eq-structure.jpg'
        ]
      }
    }
  }
}
</script>

<style scoped>
.cover img{
  min-height: 60vh;
  object-fit: cover;
}
</style>
