<template>
  <div class="cover">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Cover'
}
</script>
<style scoped>
  .cover img {
    height: 70vh;
    object-fit: cover;
    width: 100%;
  }
</style>
