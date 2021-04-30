<template>
  <div class="fixed top-0 left-0 z-30 flex items-center w-full nav-wrapper bg-mdarktwo text-mwhite">
    <nav class="flex flex-row items-center justify-between w-full max-w-screen-xl px-8 mx-auto nav-main">
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
