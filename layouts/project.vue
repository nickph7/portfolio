<template>
  <div class="min-h-screen content h-auto mb-10">
    <navbar />
    <main class="main-container relative">
      <div id="sidebar" class="sidebar-wrapper hidden">
        <div class="sidebar">
          <ul>
            <li class="sidebar-link">
              <nuxt-link to="/projects/equilibria">
                Equilibria
              </nuxt-link>
            </li>
            <li class="sidebar-link">
              <nuxt-link to="/projects/machine-for-birds">
                Machine For Birds
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <nuxt />
    </main>
    <m-footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'
import MFooter from '~/components/MFooter'
export default {
  name: 'Main',
  components: {
    MFooter,
    Navbar
  },
  data () {
    return {
      isToggled: false
    }
  }
}
</script>

<style scoped lang="postcss">
.sidebar-wrapper{
  @apply bg-yellow-700;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

.sidebar{
  @apply bg-blue-300 z-10;
  width: 200px;
  position: sticky;
  top: var(--nav-height-mob); /*Top should be equal to nav bar height*/
}

.sidebar-link{
  @apply border border-solid border-gray-500 text-center py-2 mb-1;
}
</style>
