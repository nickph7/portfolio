<template>
  <div class="min-h-screen h-auto mb-10">
    <navbar />
    <main class="main-container flex relative w-full">
      <responsive-sidebar />
      <div class="content" style="min-width: 0 !important;">
        <nuxt />
      </div>
    </main>
    <m-footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'
import MFooter from '~/components/MFooter'
import ResponsiveSidebar from '~/components/ResponsiveSidebar'

export default {
  name: 'Main',
  components: {
    ResponsiveSidebar,
    MFooter,
    Navbar
  }
}
</script>

<style scoped lang="postcss">
@media screen and (min-width: 1024px) {
    .sidebar-wrapper{
      @apply self-stretch bg-purple-500;
      width: 30%;
    }

    .sidebar {
        @apply border border-solid border-orange-500 bg-green-500 uppercase text-center text-xl;
        position: sticky;
        align-self: flex-start;
        /* TODO: Change this variable for navigation laptop */
        top: var(--nav-height-mob);
        padding-top: 35vh;
    }
    .content {
        width: 70%;
    }
}
</style>
