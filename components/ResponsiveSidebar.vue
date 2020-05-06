<template>
  <div id="sidebar" class="responsive-sidebar-wrapper hidden">
    <div class="responsive-sidebar">
      <ul>
        <li class="responsive-sidebar--link">
          <nuxt-link to="/projects/equilibria">
            Equilibria
          </nuxt-link>
        </li>
        <li class="responsive-sidebar--link">
          <nuxt-link to="/projects/machine-for-birds">
            Machine For Birds
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResponsiveSidebar'
}
</script>
<style scoped lang="postcss">
  /* TODO: Style this */
  .responsive-sidebar-wrapper {
    @apply bg-yellow-700;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  .responsive-sidebar {
    @apply bg-blue-300 z-10;
    width: 200px;
    position: sticky;
    top: var(--nav-height-mob); /*Top should be equal to nav bar height*/
  }

  .responsive-sidebar--link {
    @apply border border-solid border-gray-500 text-center py-2 mb-1;
  }

  @media screen and (min-width: 1024px){
    #sidebar{
      display: none !important;
    }
  }
</style>
