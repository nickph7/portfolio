<template>
  <div class="picture-frame mborder-bottom mborder-top my-8">
    <figure>
      <slot />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'PictureFrame'
}
</script>

<style scoped lang="postcss">

  .picture-frame figcaption{
    @apply text-center font-acuminCondensed text-mwhite my-2;
  }

</style>
