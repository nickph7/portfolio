<template>
  <div class="h-auto min-h-screen mx-auto main-container">
    <navbar />
    <main class="relative flex w-full">
      <responsive-sidebar />
      <div class="content lg:container" style="min-width: 0 !important;">
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

</style>
