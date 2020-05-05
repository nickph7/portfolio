<template>
  <div class="bottom-bar bg-blue-300">
    <MButton :on-click="toggleSidebar">
      <i class="icon-up-dir" />
    </MButton>
    <slot>Put your links here</slot>
  </div>
</template>

<script>
import MButton from '~/components/MButton'
export default {
  name: 'MobileProjectsNav',
  components: {
    MButton
  },
  data () {
    return {
      sidebarIsToggled: false
    }
  },
  beforeDestroy () {
    document.getElementById('sidebar').style.display = 'none'
  },
  methods: {
    toggleSidebar () {
      this.sidebarIsToggled = !this.sidebarIsToggled
      // console.log(this.sidebarIsToggled)
      const sb = document.getElementById('sidebar')
      this.sidebarIsToggled ? sb.style.display = 'block' : sb.style.display = 'none'
    }
  }
}
</script>

<style scoped lang="postcss">

.bottom-bar{
  position: sticky;
  bottom: 0;
}
</style>
