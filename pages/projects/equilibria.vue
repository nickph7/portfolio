<template>
  <div class="bg-mdarktwo">
    <div class="cover">
      <img src="~/assets/img/equilibria/eq-fullview2.jpg">
    </div>
    <p-text-box class="text-box p-4">
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
    <!-- picture frame -->
    <picture-frame class="picture-frame">
      <img src="~/assets/img/equilibria/eq-fullview.jpg">
      <figcaption>Full view of the structure</figcaption>
    </picture-frame>
    <p-text-box>
      <p class="text">
        For this project, I was tasked to design and build the central structure, and program our interactive branches
        via Arduino and UDP protocol. In addition, I worked actively with my team on the design of the forest and
        how we would kill section of the forest when visitors would stay too long in one part of the installation.
        With the help of my teammates Emily and Audrey, we went on the top of the Mount Royal to get some footage
        for the installation
      </p>
    </p-text-box>
    <!-- tall gallery -->
    <image-gallery
      id="equilibria"
      class=""
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
import PTextBox from '~/components/PTextBox'
import PictureFrame from '~/components/PictureFrame'
export default {
  name: 'Equilibria',
  components: { PictureFrame, PTextBox, ImageGallery, MobileProjectsNav },
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
