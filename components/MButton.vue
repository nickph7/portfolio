<template>
  <button class="btn" @click="onClick">
    <slot>?</slot>
  </button>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    onClick: {
      type: Function,
      required: false,
      default () {}
    }
  }
}
</script>

<style scoped lang="postcss">
  .btn{
    @apply bg-mdarktwo text-mwhite p-2 transition duration-150 ease-out;
  }

  .btn:hover{
    @apply bg-mwhite text-mdarktwo;
  }
</style>
