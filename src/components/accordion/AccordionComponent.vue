<template>
  <div class="w-full rounded-[16px] border-[1px] border-gray pl-[12px] py-[8px] pr-[20px] cursor-pointer">
    <div @click="accordionClicked" :id="title" class="accordion-item flex w-full items-center justify-between">
      <div class="flex items-center gap-[12px]">
        <div
          :class="activeIs === title ? 'bg-yellowLight' : 'bg-gray'"
          class="icon flex items-center justify-center gap-[8px] w-[48px] h-[48px] rounded-full transition-all"
        >
          <Icon :icon="icon" :class="activeIs === title ? 'text-orange' : 'text-black'" />
        </div>
        <p
          :class="activeIs === title ? 'text-orange' : 'text-black'"
          class="title font-bold text-sm leading-[20px] capitalize"
        >
          {{ title }}
        </p>
      </div>
      <Icon
        icon="octicon:chevron-down-24"
        :class="activeIs === `accordion` + title ? 'rotate-180 text-orange' : 'text-grayDark4'"
        class="text-xl accordion-icon transition-all"
      />
    </div>
    <div class="cursor-default">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Accordion',
  data() {
    return {
      activeAccordion: '' as string,
    }
  },
  emits: ['accordionClicked'],
  props: {
    activeIs: {
      required: true,
      type: String
    },
    icon: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  },
  methods: {
    accordionClicked(e: Event) {
      const target = e.target as Element
      const accordion = target.closest(`.accordion-item`).getAttribute('id')
      
      this.activeAccordion = accordion
      this.$emit('accordionClicked', this.activeAccordion)
    }
  }
}
</script>

<style>
.accordion-item.active .accordion-icon {
  transform: scale(-1);
}
</style>
