<template>
  <div class="bottom-bar bg-mdarktwo w-full flex items-center">
    <MButton :on-click="toggleSidebar" class="sidebar-button lg:hidden">
      <i class="icon-up-dir" />
    </MButton>
    <div class="inline-flex justify-between flex-grow mx-2">
      <div class="link-wrapper">
        <nuxt-link v-if="hasPrev" :to="prev.link ? prev.link : '/'">
          <i class="icon-left tiny-arrow" />
          <span class="font-acuminCondensed uppercase text-mwhite">{{ prev.title }}</span>
        </nuxt-link>
      </div>
      <div class="link-wrapper">
        <nuxt-link v-if="hasNext" :to="next.link ? next.link : '/'">
          <span class="font-acuminCondensed uppercase text-mwhite">{{ next.title }}</span>
          <i class="icon-right tiny-arrow" />
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
    document.getElementById('sidebar').style.display = 'none'
  },
  methods: {
    toggleSidebar () {
      this.sidebarIsToggled = !this.sidebarIsToggled
      // console.log(this.sidebarIsToggled)
      const sb = document.getElementById('sidebar')
      this.sidebarIsToggled ? sb.style.display = 'block' : sb.style.display = 'none'
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

  .link-wrapper {
    /*Hello*/
  }

  .tiny-arrow{
    @apply text-xs bg-mwhite rounded-sm mr-1;
    padding: 1px 0;
  }
</style>
