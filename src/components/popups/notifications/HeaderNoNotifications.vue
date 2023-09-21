<template>
  <div class="w-full flex flex-col items-center justify-center gap-[24px] pt-[28px] px-[20px]">
    <div class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]">
      <img class="w-full max-w-[136px]" src="@/assets/imgs/notification.svg" alt="" />
    </div>
    <div class="flex flex-col items-center justify-center gap-[8px]">
      <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t('no_new_notifications') }}</p>
      <p class="text-grayDark text-sm font-regular leading-[24px] text-center tracking-[-0.1px]">{{ $t('no_new_notifications_text') }}</p>
    </div>
    <img class="w-full" src="@/assets/imgs/BrandDivider.svg" alt="">
  </div>
</template>

<script lang=ts>
export default {
    name: "HeaderNoNotifications"
}
</script>
