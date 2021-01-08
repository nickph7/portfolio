<template>
  <div>
    <cover>
      <img src="~/assets/img/infinite/cover.jpg" alt="In.finite cover">
    </cover>
    <p-text-box>
      <template v-slot:header>
        <h1 class="title">
          In.Finite
        </h1>
        <h2 class="collaborator">
          Collaborator: Markus Specogna, David Rawalia, Wednesday Laplante, Tyasha Ghattak
        </h2>
        <h2 class="date">
          April 2020
        </h2>
      </template>
      <p class="text">
        Every year, the students of Design and Computation Arts have the opportunity to exhibit their best work at the
        D/CART year-end exhibition. For the year of 2020, the COVID-19 prompted a unique challenge to finding an
        alternate platform to showcase the student's work. As part of the web team, we were charged to create a unique web
        experience by building a website to host this year's collection of artworks and integrate livestream functionalities for
        the online vernissage.
      </p>
      <p class="text">
        During the initial phase, Markus and I have worked on several design proposals for the website. Through the
        process, we worked closely with the catalogue team and the visual identity team to make sure that our design was
        coherent with their work.
      </p>
    </p-text-box>
    <image-gallery
      :id="galleries[0].id"
      class="mborder-bottom"
      :src="galleries[0].src"
      :alt="galleries[0].alt"
    />
    <p-text-box>
      <p class="text">
        As soon as our team made a decision on the final layout of the website, we started working on figuring out the
        technology stack we were going to use. I put forward a plan for structuring the website that would allow for an
        uninterrupted experience browsing through the different projects while watching the live stream. The website
        utilizes Kirby CMS to organize and serve the content while the front-end was implemented with Vue JS &mdash; a
        javascript front-end framework. Thanks to the Kirby API, we were able to easily create functions to retrieve the
        content from the CMS using javascript.
      </p>
      <p class="text">
        After successfully setting up the server routings and the API calls, Markus and I worked on the presentation of
        the website using tailwind css and some javascript while David worked on the stream functionalities, and
        Wednesday and Tyasha working on content organization. This project was a great opportunity to develop advanced
        skills using Vue JS asynchronously with API calls, and to get organized in a small team to work the most
        efficiently.
      </p>
      <a class="ext-link" href="http://www.in-finite.ca">Visit the exhibition's website</a>
    </p-text-box>
    <image-gallery
      :id="galleries[1].id"
      :custom="true"
      :alt="galleries[1].alt"
    >
      <template v-slot:customSlides>
        <!-- eslint-disable-next-line vue/valid-v-for -->
        <swiper-slide v-for="n in 5" :key="n" class="gallery-slide">
          <video autoplay loop muted class="gallery-img">
            <source :src="require(`~/assets/img/infinite/Infinite${n}.mp4`)" type="video/mp4">
          </video>
        </swiper-slide>
      </template>
    </image-gallery>
    <mobile-project-nav
      :prev="{
        link: '/projects/stupefiant',
        title: 'Stupéfiant'
      }"
      :next="{
        link: '/projects/equilibria',
        title: 'Equilibria'
      }"
    />
  </div>
</template>

<script>
// TODO: Videos are not played on mobile.

import Cover from '~/components/Cover'
import PTextBox from '~/components/PTextBox'
import ImageGallery from '~/components/ImageGallery'
import MobileProjectNav from '~/components/MobileProjectsNav'

export default {
  name: 'InfiniteVue',
  layout: 'project',
  components: { ImageGallery, PTextBox, Cover, MobileProjectNav },
  data () {
    return {
      galleries: [
        {
          id: 'mockup',
          src: [
            'infinite/mockup1.jpg',
            'infinite/mockup2.jpg',
            'infinite/mockup3.jpg'
          ],
          alt: [
            'Some Mock ups for the website - project page',
            'Some Mock ups for the website - project list',
            'another project page option with split view of process and final'
          ]
        },
        {
          id: 'video',
          alt: [
            'Homepage',
            'Project List with hover interaction',
            'All projects grid',
            'Project page and navigation',
            'Streaming is uninterrupted navigating the different pages'
          ]
        }
      ]
    }
  },
  head () {
    return {
      title: 'In.finite'
    }
  }
}
</script>

<style scoped>

</style>
