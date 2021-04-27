<template>
  <footer class="flex flex-col items-center justify-center h-12 text-center text-mwhite font-acuminCondensed mborder-top">
    <p>Created by Nicolas Prud'homme &copy; 2021</p>
  </footer>
</template>

<script>

export default {
  name: 'MFooter',
  computed: {
    yearNow () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
