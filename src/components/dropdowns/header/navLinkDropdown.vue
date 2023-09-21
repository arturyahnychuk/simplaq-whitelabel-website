<template>
  <div class="absolute left-0 top-full w-full bg-white z-[999] shadow-xl h-[0px] transition-all overflow-hidden" ref="dropdown" id="dropdown">
    <div class="w-full max-w-[1600px] mx-auto py-[25px] px-[25px]">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NavlinkDropdown',
  props: {
    active: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      activeTab: this.active
    }
  },
  mounted() {
    this.$nextTick(() => {
      const dropdown = this.$refs.dropdown
      dropdown.style.height = dropdown.children[0].scrollHeight + 'px'
    })
  },
  watch: {
    active(newVal) {
      if (this.activeTab !== null) {
        this.activeTab = newVal
        this.$nextTick(() => {
          const dropdown = this.$refs.dropdown
          dropdown.style.height = dropdown.children[0].scrollHeight + 'px'
        })
      }
    }
  }
}
</script>
