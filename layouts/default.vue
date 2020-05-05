<template>
  <div>
    <navbar />
    <nuxt class="main-container" />
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'
export default {
  components: { Navbar }
}
</script>

<style>
/* Default global style*/
  .main-container{
    margin-top: var(--nav-height-mob);
  }
</style>

<style scoped>

</style>
