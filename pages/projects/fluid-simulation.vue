<template>
  <div>
    <cover>
      <img :src="require('~/assets/img/fluid-sim/10k-2_2x.jpg')">
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
    <m-vimeo-player :id="488361910" title="Evolution of my fluid solver" />
    <image-gallery
      id="fs"
      class="mborder-top"
      :src="gallery.src"
      :alt="gallery.alt"
    />
    <!-- TODO: CHANGE FLUID SIMULATION NAVIGATION -->
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
  name: 'MachineForBirds',
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
      gallery: {
        src: [
          'fluid-sim/ui-view.jpg',
          'fluid-sim/n-search1.jpg',
          'fluid-sim/n-search2.jpg',
          'fluid-sim/collision.jpg',
          'fluid-sim/collision2.jpg',
          'fluid-sim/collision3.jpg',
          'fluid-sim/wall1.jpg',
          'fluid-sim/wall2.jpg',
          'fluid-sim/wall3.jpg',
          'fluid-sim/wall4.jpg',
          'fluid-sim/2k.jpg',
          'fluid-sim/2k-2.jpg',
          'fluid-sim/5k-1.jpg',
          'fluid-sim/10k-1.jpg',
          'fluid-sim/10k-3.jpg',
          'fluid-sim/10k-2.jpg'
        ],
        alt: [
          'Application window with changeable parameters',
          'Testing spatial hash grid accuracy',
          'Balls turn red if neighbour of yellow',
          'Testing collision detection',
          'Each walls uses cubes of the grid in front and behind them',
          "Balls turn red as they enter the wall's field",
          'Particles closing in...',
          'Particles closing in...',
          'After playing with the rest density parameters',
          'Modifying the parameters in real time creates intricate visual effects',
          '2,000 particles',
          '2,000 particles',
          '5,000 particles',
          '10,000 particles',
          '10,000 particles',
          '10,000 particles'
        ]
      }
    }
  },
  head () {
    return {
      title: 'Fluid Simulation'
    }
  }
}
</script>
