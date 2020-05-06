<template>
  <div class="min-h-screen h-auto mb-10">
    <navbar />
    <main class="main-container relative w-full">
      <responsive-sidebar />
      <div class="flex w-full">
        <div class="content" style="min-width: 0 !important;">
          <nuxt />
        </div>
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
  },
  data () {
    return {
      isToggled: false
    }
  }
}
</script>
