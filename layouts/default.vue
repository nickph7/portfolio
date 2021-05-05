<template>
  <div>
    <navbar />
    <nuxt class="main-container" />
    <m-footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'
import MFooter from '~/components/MFooter'
export default {
  name: 'DefaultLayout',
  components: { MFooter, Navbar }
}
</script>

<style>

</style>

<style scoped>

</style>
