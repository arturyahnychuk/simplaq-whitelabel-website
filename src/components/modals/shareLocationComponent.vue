<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full max-w-[664px] px-[40px] pt-[56px] pb-[40px] bg-white rounded-[24px]">
        <div class="w-full h-full">
          <div class="flex items-center justify-between pb-[16px]">
            <div></div>

            <div @click="closeShareLocation" class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
            </div>
          </div>

          <div class="flex relative w-full mb-[24px] rounded-[16px] flex items-start justify-center gap-[10px]">
            <img class="w-full max-w-[136px]" src="@/assets/imgs/location.svg" alt="" />
          </div>

          <h6 class="font-bold text-black text-xl mb-[8px] text-center">{{ $t('share_your_location') }}</h6>

          <p class="font-medium text-sm text-grayDark max-w-[380px] mx-auto text-center leading-[24px]">{{ $t('share_your_location_text') }}</p>

          <div class="flex gap-[8px] mt-[84px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button
              @click="closeShareLocation"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
            >
              {{ $t('not_now') }}
            </button>
            <button
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
            >
              {{ $t('allow_location') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Share_location',
  emits: ['closeShareLocation'],
  methods: {
    closeShareLocation() {
      this.$emit('closeShareLocation', '')
    }
  }
}
</script>
