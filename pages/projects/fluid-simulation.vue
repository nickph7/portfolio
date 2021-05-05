<template>
  <div>
    <cover>
      <div v-lazy-container="{ selector: 'img' }">
        <img
          :data-src="require('~/assets/img/fluid-sim/10k-2_2x.jpg?original')"
          :data-loading="require('~/assets/img/fluid-sim/10k-2_2x.jpg?lqip')"
          alt="Fluid simulation project cover"
        >
      </div>
      <!--      <img :src="require('~/assets/img/fluid-sim/10k-2_2x.jpg?original')">-->
    </cover>
    <p-text-box>
      <template v-slot:header>
        <h1 class="title">
          Fluid Simulation
        </h1>
        <h2 class="date">
          December 2020
        </h2>
      </template>
      <p>
        I have been thinking for some time about creating compelling visuals
        based on fluid movements. More precisely, I wanted to focus on blobs of
        fluid movements, something that would look like a lava lamp. After
        spending some time looking at different fluid simulations, I came across
        a rather interesting implementation designed for fast simulation at
        interactive framerates. Clavet et al.&lsquo;s SPH Fluid model, named
        Particle-based Viscoelastic Fluid Simulation, appears to bear many of
        the features I was looking forward to implementing. The resulting liquid
        looked very &ldquo;blobby&rdquo; and highly viscous. From a technical
        point of view, their implementation looked quite robust, stable and
        efficient to simulate splash, filament, and drops of fluid. The core of
        their algorithm consists of a unique procedure that enforces
        incompressibility and particle anti-clustering. This procedure, called
        Double Density Relaxation, takes two different particle densities
        measurements to predict the particles&rsquo; next positions.
      </p>
      <p>
        Going through their publication, the authors presented the method
        intuitively, and I thought it was the perfect level of challenge to
        implement. As such, I set myself to implement their method as my term
        project. To realize this project, I made use of openFrameworks: a C++
        toolkit for creative coding. It includes several libraries commonly used
        in computer graphics, such as OpenGL, GLEW and GLUT. It also comes with
        FreeImage for image saving. The final program consists of a robust
        particle-rendering system, a mouse-controlled camera, a small GUI to
        play with the different parameters of the fluid simulation, and an
        offline rendering function to export the simulation as a sequence of
        images.
      </p>
    </p-text-box>
    <m-vimeo-player id="488361910" title="Evolution of my fluid solver" />
    <!-- <div class="w-full h-1 bg-mdarkone" style="background-color: black;" /> -->
    <image-gallery
      id="fs"
      class="border-t"
      :source="gallery"
      title="Process Photos"
    />
    <mobile-projects-nav
      :next="{
        link: '/projects/voidfilling',
        title: 'Voidfilling',
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
  name: 'FluidSimulation',
  components: {
    MVimeoPlayer,
    ImageGallery,
    MobileProjectsNav,
    PTextBox,
    Cover
  },
  layout: 'project',
  data () {
    return {
      gallery: [
        { src: require('~/assets/img/fluid-sim/ui-view.jpg?original'), alt: 'Application window with changeable parameters' },
        { src: require('~/assets/img/fluid-sim/n-search1.jpg?original'), alt: 'Testing spatial hash grid accuracy' },
        { src: require('~/assets/img/fluid-sim/n-search2.jpg?original'), alt: 'Balls turn red if neighbour of yellow' },
        { src: require('~/assets/img/fluid-sim/collision.jpg?original'), alt: 'Testing collision detection' },
        { src: require('~/assets/img/fluid-sim/collision2.jpg?original'), alt: 'Each walls uses cubes of the grid in front and behind them' },
        { src: require('~/assets/img/fluid-sim/collision3.jpg?original'), alt: "Balls turn red as they enter the wall's field" },
        { src: require('~/assets/img/fluid-sim/wall1.jpg?original'), alt: 'Particles closing in...' },
        { src: require('~/assets/img/fluid-sim/wall2.jpg?original'), alt: 'Particles closing in...' },
        { src: require('~/assets/img/fluid-sim/wall3.jpg?original'), alt: 'After playing with the rest density parameters' },
        { src: require('~/assets/img/fluid-sim/wall4.jpg?original'), alt: 'Modifying the parameters in real time creates intricate visual effects' },
        { src: require('~/assets/img/fluid-sim/2k.jpg?original'), alt: '2,000 particles' },
        { src: require('~/assets/img/fluid-sim/2k-2.jpg?original'), alt: '2,000 particles' },
        { src: require('~/assets/img/fluid-sim/5k-1.jpg?original'), alt: '5,000 particles' },
        { src: require('~/assets/img/fluid-sim/10k-1.jpg?original'), alt: '10,000 particles' },
        { src: require('~/assets/img/fluid-sim/10k-3.jpg?original'), alt: '10,000 particles' },
        { src: require('~/assets/img/fluid-sim/10k-2.jpg?original'), alt: '10,000 particles' }
      ]
    }
  },
  head () {
    return {
      title: 'Fluid Simulation'
    }
  }
}
</script>
