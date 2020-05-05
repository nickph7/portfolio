<template>
  <div class="content bg-green-200">
    <h1>List of projects</h1>
    <div style="height: 1000px;">
      Fake content
    </div>
    <MobileProjectsNav />
  </div>
</template>

<script>
import MobileProjectsNav from '~/components/MobileProjectsNav'

export default {
  name: 'Index',
  layout: 'project',
  components: {
    MobileProjectsNav
  }
}
</script>

<style scoped>
  .content {
    height: 100%;
  }
</style>
