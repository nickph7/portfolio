<template>
  <div class="flex items-center w-full bottom-bar bg-mdarktwo">
    <MButton :on-click="toggleSidebar" class="cursor-pointer sidebar-button lg:hidden" :class="{'sidebar-active' : sidebarIsToggled}">
      <div class="transition duration-200 transform" :class="{'rotate-90' : sidebarIsToggled}">
        <i class="icon-up-dir" />
      </div>
    </MButton>
    <div class="inline-flex justify-between flex-grow mx-2 lg:mx-4">
      <div class="link-wrapper">
        <nuxt-link v-if="hasPrev" :to="prev.link ? prev.link : '/'">
          <i class="icon-left tiny-arrow mr-1" />
          <span class="uppercase font-acuminCondensed text-mwhite link-text">{{ prev.title }}</span>
        </nuxt-link>
      </div>
      <div class="link-wrapper">
        <nuxt-link v-if="hasNext" :to="next.link ? next.link : '/'">
          <span class="uppercase font-acuminCondensed text-mwhite link-text">{{ next.title }}</span>
          <i class="icon-right tiny-arrow ml-1" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from '~/components/MButton'
export default {
  name: 'MobileProjectsNav',
  components: {
    MButton
  },
  props: {
    prev: {
      type: Object,
      default () { return {} }
    },
    next: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      sidebarIsToggled: false
    }
  },
  computed: {
    hasNext () {
      return Object.keys(this.next).length
    },
    hasPrev () {
      return Object.keys(this.prev).length
    }
  },
  beforeDestroy () {
    this.$nuxt.$emit('close-sidebar')
    this.sidebarIsToggled = false
  },
  methods: {
    toggleSidebar () {
      this.$nuxt.$emit('sidebar-toggled')
      this.sidebarIsToggled = !this.sidebarIsToggled
    }
  }
}
</script>

<style scoped lang="postcss">
  .bottom-bar{
    position: sticky;
    bottom: -1px;
    border-top: 1px solid var(--mdarkthree);
    z-index: 30;
    height: var(--bottom-bar-height);
  }

  .sidebar-button{
    width: var(--bottom-bar-height) !important;
    height: calc(var(--bottom-bar-height) - 1px) !important;
    border-right: 1px solid var(--mdarkthree);
  }

  .tiny-arrow{
    @apply text-xs bg-mwhite rounded-sm;
    padding: 1px 0;
  }

  .sidebar-active{
    @apply bg-mgreytwo text-mdarktwo;
  }
</style>
