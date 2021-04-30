<template>
  <div class="my-8 border-b border-t">
    <figure>
      <template v-if="custom">
        <slot name="customFrame" />
      </template>
      <template v-else>
        <img
          :src="source.src"
          :alt="source.alt"
          class="p-12 bg-mdarkone"
        >
      </template>
      <figcaption>
        <h3>{{ source.alt }}</h3>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'PictureFrame',
  props: {
    custom: {
      type: Boolean,
      default: false
    },
    source: {
      type: Object,
      required: true,
      default () {
        return { src: require('~/assets/img/dummy.jpg'), alt: 'No alt has been inserted or the source is not valid' }
      }
    }
  }
}
</script>

<style scoped lang="postcss">

  figcaption{
    @apply text-center font-acuminCondensed text-mwhite my-4;
  }

</style>
