<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex overflow-auto md:py-[20px] bg-white md:bg-transparent ">
      <div
        class="w-full max-w-[664px] h-full md:min-h-[640px] md:h-[640px] m-auto px-[40px] pt-[56px] pb-[40px] bg-white md:rounded-[24px]">
        <div class="w-full h-full flex flex-col justify-between">
          <div class="flex flex-col max-w-[360px] mx-auto w-full">
            <div class="flex items-center justify-between pb-[16px]">
              <div></div>

              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center cursor-pointer"></div>
            </div>

            <div class="flex relative w-full mb-[24px] rounded-[16px] flex items-start justify-center gap-[10px]">
              <img class="w-full max-w-[136px]" src="@/assets/imgs/completeProfile.svg" alt="" />
            </div>

            <h6 class="font-bold text-black text-xl mb-[8px] text-center">{{ $t('complete_your_profile') }}</h6>

            <p class="font-medium text-sm text-grayDark max-w-[380px] mx-auto text-center leading-[24px]">
              {{ $t('complete_your_profile_text') }}
            </p>
          </div>

          <div class="flex gap-[8px] mt-[84px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button @click="closeCompleteProfileComponent"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all">
              {{ $t(`i'll_do_it_later`) }}
            </button>
            <button @click="nextDatePickerComponent"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all">
              {{ $t('continue') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['closeCompleteProfileComponent', 'nextDatePickerComponent'],
  methods: {
    closeCompleteProfileComponent() {
      this.$emit('closeCompleteProfileComponent')
    },
    nextDatePickerComponent() {
      this.$emit('nextDatePickerComponent')
    }
  }
}
</script>
