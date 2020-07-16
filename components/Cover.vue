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
  /* TODO: Change this so covers always have the same height */
  .cover img {
    height: 70vh;
    object-fit: cover;
    width: 100%;
  }
</style>
