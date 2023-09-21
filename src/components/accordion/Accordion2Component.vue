<template>
  <div
    @click="accordion"
    ref="accordion"
    class="accordion flex flex-col gap-[12px] mt-[16px] pb-[12px] border-b-[1px] border-gray-light-500"
  >
    <div class="flex w-full items-center justify-between cursor-pointer">
      <h6 class="text-base text-dark font-bold leading-[24px]">{{ title }}</h6>
      <Icon icon="octicon:chevron-up-24" class="chevron text-xl text-black" />
    </div>
    <div class="accordion-menu hidden">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Accordion2',
  props: {
    title: {
      required: true,
      type: String
    }
  },
  methods: {
    accordion(e) {
      if (!e.target.closest('.accordion-menu')) {
        const accordionMenu = this.$refs.accordion.querySelector('.accordion-menu')
        const accordionArrow = this.$refs.accordion.querySelector('.chevron')
        if (accordionMenu.classList.contains('hidden')) {
          accordionMenu.classList.remove('hidden')
          accordionArrow.classList.remove('rotate-[0deg]')
          accordionArrow.classList.add('rotate-[180deg]')
        } else {
          accordionMenu.classList.add('hidden')
          accordionArrow.classList.add('rotate-[0deg]')
          accordionArrow.classList.remove('rotate-[180deg]')
        }
      }
    }
  }
}
</script>
