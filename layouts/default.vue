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
  components: { MFooter, Navbar }
}
</script>

<style>
/* TODO: Better strategy for defining global style */
  .main-container{
    margin-top: var(--nav-height-mob);
    /* TODO:  */
    min-height: calc(100vh - var(--nav-height-mob) - 3rem);
  }
</style>

<style scoped>

</style>
