<template>
  <div class="btn" :style="{width: size + 'px', height: size + 'px'}" @click="onClick">
    <div class="content">
      <slot>?</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    onClick: {
      type: Function,
      required: false,
      default () {}
    },
    size: {
      type: Number,
      required: false,
      default: 30
    }
  }
}
</script>

<style scoped lang="postcss">
  .btn{
    @apply bg-mdarktwo text-mwhite transition duration-150 ease-out;
    position: relative;
    flex-shrink: 0;
  }

  .btn:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .btn:hover{
    @apply bg-mwhite text-mdarktwo;
  }
</style>
