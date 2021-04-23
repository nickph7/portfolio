<template>
  <div id="sidebar" class="flex-grow responsive-sidebar-wrapper mborder-right">
    <div class="text-center responsive-sidebar">
      <ul class="text-xl uppercase content-link project-links">
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
    min-width: 250px;
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

  @media screen and (min-width: 1024px){
    .responsive-sidebar-wrapper {
      display: block !important; /* Prevent it from hiding if it was turned hidden in mobile view*/
      position: relative;
      height: auto;
      align-self: stretch;
    }
  }
</style>
