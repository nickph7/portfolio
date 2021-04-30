<template>
  <div>
    <cover>
      <img src="~/assets/img/voidfilling/still2_2x.jpg">
    </cover>
    <p-text-box>
      <template v-slot:header>
        <h1 class="title">
          Voidfilling
        </h1>
        <h2 class="collaborator">
          Collaborator: Charles Rabbat
        </h2>
        <h2 class="date">
          December 2020
        </h2>
      </template>
      <p>
        The quarantine and self-isolation provoked by the COVID-19 pandemic have
        forced us to move our means of communication through cyberspace. This
        shift in the means of communication was significant for me to realize
        the charm and pitfalls of online interactions. As we navigate the web,
        our cyber presence is intangible. We can browse the web as an anonymous
        observer, unseen by others browsing the same website. When we decide to
        take action, raise our voice through our microphone and turn on our
        camera, our presence in the conversation still feels intangible. This
        lack of presence makes our only means of communicating unsatisfactory,
        unfulfilling and even upsetting. The intangibility of the cyber-presence
        manifests itself as a conspicuous void.
      </p>
      <p>
        VoidFilling is a generative artwork consisting of a low-poly human head,
        rendered with lines and sprawling pixels, sitting in a cloud of tweets.
        Tracking the activity on social media, the particles activate parts of
        the model's mesh, depicting our human quest to fill the void
        created by the immaterial attribute of digital communications. This
        momentary activation of the mesh will slowly go back to its original
        state, representing that our attempt to fulfill our need for real
        communication is non-lasting and futile. For this project, we used
        TouchDesigner to create the generative visuals and Python with
        Twitter's API for collecting social media activity.
      </p>
    </p-text-box>
    <m-vimeo-player id="501028450" title="Voidfilling Demo" />
    <image-gallery
      id="vf"
      class="border-t"
      :source="gallery"
    />
    <mobile-projects-nav
      :prev="{
        link: '/projects/fluid-simulation',
        title: 'Fluid Simulation',
      }"
      :next="{
        link: '/projects/stupefiant',
        title: 'Stupéfiant',
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
      gallery: [
        { src: require('~/assets/img/voidfilling/still1.jpg?original'), alt: 'View of the artwork' },
        { src: require('~/assets/img/voidfilling/still2.jpg?original'), alt: 'View of the artwork' }
      ]
    }
  },
  head () {
    return {
      title: 'Voidfilling'
    }
  }
}
</script>
