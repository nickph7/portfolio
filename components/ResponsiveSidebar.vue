<template>
  <div id="sidebar" class="responsive-sidebar-wrapper border-r" :class="opened ? 'w-64' : 'w-0'">
    <div class="text-center responsive-sidebar lg:flex" :class="opened ? 'flex' : 'hidden'">
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
      ],
      opened: false
    }
  },
  created () {
    this.$nuxt.$on('sidebar-toggled', () => {
      this.opened = !this.opened
    })

    this.$nuxt.$on('close-sidebar', () => {
      this.opened = false
    })
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
    display: block;
    z-index: 20;
    transition: 0.2s;
  }

  .responsive-sidebar {
    position: sticky;
    top: var(--nav-height-mob); /*Top should be equal to nav bar height*/
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - var(--nav-height-mob));
  }

  .content-link {
    margin-bottom: 1rem;
  }

  .responsive-sidebar--link {
    /*@apply border border-solid border-gray-500;*/
    @apply text-center py-2 mb-1 text-mgreyone;
  }

  .responsive-sidebar--link a:hover {
    @apply text-mwhite;
    border-bottom: 1px solid var(--mwhite);
  }

  .responsive-sidebar--link .nuxt-link-active {
    @apply text-mwhite font-bold;
  }

  @media screen and (min-width: 1024px){
    .responsive-sidebar-wrapper {
      display: block !important; /* Prevent it from hiding if it was turned hidden in mobile view*/
      position: relative;
      height: auto;
      align-self: stretch;
      min-width: 16rem;
    }
  }
</style>
