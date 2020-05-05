<template>
  <div class="nav-wrapper flex items-center w-full fixed top-0 left-0 bg-mdarktwo text-mwhite z-10">
    <nav class="nav-main w-full flex flex-row justify-between px-8 max-w-screen-xl mx-auto">
      <nuxt-link to="/">
        <logo />
      </nuxt-link>
      <div class="nav-link">
        <nuxt-link to="/projects">
          Projects
        </nuxt-link>
        <span class="mx-1">//</span>
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

.nav-link > .nuxt-link-active{
  border-bottom: 2px solid var(--mwhite)
}

</style>
