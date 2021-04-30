<template>
  <div class="text-xs font-bold uppercase lg:text-sm text-mwhite font-acuminCondensed border-b title-bar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style scoped>
.title-bar{
  padding: 0.125rem;
  padding-left: 0.25rem;
  min-height: 1rem;
  background-image: linear-gradient(to right, var(--mdarkone), var(--mdarktwo), var(--mdarkthree), var(--mgreyone));
}

</style>
