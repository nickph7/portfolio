<template>
  <div class="nav-wrapper w-full fixed top-0 left-0 bg-white z-10">
    <nav class="nav-main flex flex-col items-center md:flex-row justify-between px-8 max-w-screen-xl mx-auto">
      <nuxt-link to="/">
        <logo />
      </nuxt-link>
      <div class="">
        <nuxt-link to="/projects">
          Projects
        </nuxt-link>
        <nuxt-link to="/about">
          About
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'Navbar',
  components: {
    Logo
  }
}
</script>

<style scoped>
.nav-wrapper{
  height: var(--nav-height-mob);
  border-bottom: 1px solid #47494E;
}

</style>
