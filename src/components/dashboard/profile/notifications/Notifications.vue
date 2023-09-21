<template>
  <div class="w-full pt-[20px] pb-[25px] pl-[60px]">
    <div class="w-full flex flex-col gap-[24px]">
      <label class="relative w-full flex items-center justify-between cursor-pointer">
        <p class="text-back font-bold text-sm leading-[20px]">{{ $t('purchase_complete') }}</p>
        <input class="checkBtn z-[50] peer sr-only" type="checkbox" name="" id="" />
        <div
          class="relative w-[36px] h-[20px] bg-graylight peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-orange after:border-none after:content-[''] after:absolute after:top-[0.150em] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all"
        ></div>
      </label>

      <label class="relative w-full flex items-center justify-between cursor-pointer">
        <p class="text-back font-bold text-sm leading-[20px]">{{ $t('events') }}</p>
        <input class="checkBtn z-[50] peer sr-only" type="checkbox" name="" id="" />
        <div
          class="relative w-[36px] h-[20px] bg-graylight peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-orange after:border-none after:content-[''] after:absolute after:top-[0.150em] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all"
        ></div>
      </label>

      <label class="relative w-full flex items-center justify-between cursor-pointer">
        <p class="text-back font-bold text-sm leading-[20px]">{{ $t('news') }}</p>
        <input class="checkBtn z-[50] peer sr-only" type="checkbox" name="" id="" />
        <div
          class="relative w-[36px] h-[20px] bg-graylight peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-orange after:border-none after:content-[''] after:absolute after:top-[0.150em] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all"
        ></div>
      </label>

      <label class="relative w-full flex items-center justify-between cursor-pointer">
        <p class="text-back font-bold text-sm leading-[20px]">{{ $t('saved_items_on_sale') }}</p>
        <input class="checkBtn z-[50] peer sr-only" type="checkbox" name="" id="" />
        <div
          class="relative w-[36px] h-[20px] bg-graylight peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-orange after:border-none after:content-[''] after:absolute after:top-[0.150em] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all"
        ></div>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Profile_Notifications_Toggle'
}
</script>
