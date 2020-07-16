<template>
  <footer class="text-center flex flex-col items-center h-12 justify-center text-mwhite font-acuminCondensed mborder-top">
    <p>Created by Nicolas Prud'homme &copy; 2020</p>
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
