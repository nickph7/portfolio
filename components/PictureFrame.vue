<template>
  <div class="picture-frame">
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
  .picture-frame{
    @apply border border-solid border-mdarkthree py-4;
  }

  .picture-frame img {
    @apply pb-2;
  }

  .picture-frame figcaption{
    @apply text-center font-acuminCondensed text-mwhite;
  }
</style>
