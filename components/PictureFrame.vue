<template>
  <div class="picture-frame mborder-bottom mborder-top my-8">
    <figure>
      <template v-if="custom">
        <slot name="customFrame" />
      </template>
      <template v-else>
        <img
          :src="require(`~/assets/img/${src}`)"
          :alt="title"
        >
      </template>
      <figcaption>
        <h3>{{ title }}</h3>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'PictureFrame',
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    custom: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="postcss">

  .picture-frame figcaption{
    @apply text-center font-acuminCondensed text-mwhite my-4;
  }

</style>
