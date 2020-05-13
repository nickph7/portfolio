<template>
  <div class="main-container min-h-screen h-auto mb-10">
    <navbar />
    <main class="flex relative w-full">
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
    .content {
        width: 75%;
    }
}
</style>
