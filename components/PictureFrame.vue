<template>
  <div class="border-b border-t">
    <figure>
      <div class="bg-mdarkone">
        <slot />
      </div>
      <figcaption>
        <h3>{{ description }}</h3>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'PictureFrame',
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="postcss">

  figcaption{
    @apply text-center font-acuminCondensed text-mwhite my-4;
  }

</style>
