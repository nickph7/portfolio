<template>
  <div id="sidebar" class="responsive-sidebar-wrapper mborder-right">
    <div class="responsive-sidebar text-center">
      <ul class="content-link project-links uppercase text-xl">
        <li v-for="project in projects" :key="project.link" class="responsive-sidebar--link">
          <nuxt-link :to="`/projects/${project.link}`">
            {{ project.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResponsiveSidebar',
  data () {
    return {
      projects: [
        { title: 'Fluid Simulation', link: 'fluid-simulation' },
        { title: 'Voidfilling', link: 'voidfilling' },
        { title: 'Stupéfiant', link: 'stupefiant' },
        { title: 'In.finite', link: 'infinite' },
        { title: 'Equilibria', link: 'equilibria' },
        { title: 'Ruinism', link: 'ruinism' },
        { title: 'Flick Up', link: 'flick-up' }
      ]
    }
  }
}
</script>

<style scoped lang="postcss">
  .responsive-sidebar-wrapper {
    @apply bg-mdarktwo;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    display: none;
    z-index: 20;
  }

  .responsive-sidebar {
    position: sticky;
    top: var(--nav-height-mob); /*Top should be equal to nav bar height*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - var(--nav-height-mob));
  }

  .content-link {
    margin-bottom: 1rem;
  }

  .index-link--text{
    @apply pl-2;
    vertical-align: -1.5pt;
  }

  .responsive-sidebar--link {
    /*@apply border border-solid border-gray-500;*/
    @apply text-center py-2 mb-1;
  }

  .responsive-sidebar--link .nuxt-link-active {
    font-weight: 700;
    border-bottom: 2px solid white;
  }

  /* remove padding on narrow screen */
  @media screen and (max-height: 500px){
    .responsive-sidebar{
      height: auto;
    }

    .responsive-sidebar--link{
      @apply py-1;
    }
  }

  @media screen and (min-width: 640px){
    .responsive-sidebar-wrapper {
      width: 35%;
    }
  }

  @media screen and (min-width: 1024px){
    .responsive-sidebar-wrapper {
      display: block !important; /* Prevent it from hiding if it was turned hidden in mobile view*/
      position: relative;
      height: auto;
      align-self: stretch;
      width: 25%; /* Check content width */
    }
  }
</style>
