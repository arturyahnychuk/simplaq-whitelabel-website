<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex ">
      <div class="rellative w-full py-[40px] overflow-auto flex">
        <div class="w-full px-[40px] max-w-[664px] m-auto pt-[56px] pb-[40px] bg-white rounded-[24px]">
          <div class="w-full h-full">
            <div class="flex items-center justify-between pb-[16px] border-b border-gray">
              <div class="flex flex-col gap-[4px]">
                <p class="text-lg font-bold text-black leading-[26px] tracking-[-0.4px]">{{ $t('filter') }}</p>
                <p class="text-sm font-normal text-grayDark leading-[24px] tracking-[0.1px]">
                  {{ $t('here_you_can_configure_the_filters') }}
                </p>
              </div>

              <div
                @click="closeFilterComponent"
                class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer"
              >
              <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />

              </div>
            </div>

            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Filter',
  emits: ['closeFilterComponent', 'filterOptions'],
  data() {
    return {}
  },
  methods: {
    closeFilterComponent() {
      this.$emit('closeFilterComponent', '')
    }
  }
}
</script>

<style></style>
