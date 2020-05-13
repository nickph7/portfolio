<template>
  <div class="p-text-box p-4 md:p-8 mx-auto mt-4 mb-6 max-w-4xl">
    <header>
      <slot name="header" />
    </header>
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PTextBox'
}
</script>

<style scoped lang="postcss">
    .p-text-box .title {
        @apply py-4
    }

    .p-text-box .collaborator {
        @apply py-2;
    }

    .p-text-box .date {
        @apply pt-1 pb-2;
    }

    .p-text-box > .text p:not(:last-child){
        @apply mb-4;
    }

</style>
