<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full max-w-[664px] px-[40px] pt-[56px] pb-[40px] bg-white rounded-[24px]">
        <div class="w-full h-full">
          <div class="flex relative mx-auto mb-[24px] bg-gray rounded-full w-[72px] h-[72px] flex items-center justify-center gap-[10px]">
            <Icon icon="fluent:delete-28-regular" class="text-lg text-black" />
          </div>

          <h6 class="font-bold text-black text-xl mb-[8px] text-center">{{ $t('log_out') }}</h6>

          <p class="max-w-[342px] w-full mx-auto font-medium text-sm text-grayDark text-center leading-[24px]">{{ $t('are_you_sure_you_want_to_log_out_of_your_account') }}</p>

          <div class="flex gap-[8px] mt-[33px] w-full items-center justify-center">
            <button
              @click="deleteAccount"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
            >
              {{ $t('yes_log_out') }}
            </button>
            <button
              @click="cancelLogout"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
            >
              {{ $t('no') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['cancelLogout'],
  methods: {
    cancelLogout() {
      this.$emit('cancelLogout')
    },
    deleteAccount() {
      alert('logout')
    }
  }
}
</script>
