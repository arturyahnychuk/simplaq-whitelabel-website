<template>
  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col">
        <div class="flex max-w-[136px] w-full">
          <img src="@/assets/imgs/profilecreation.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('congratulations') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px] text-center">{{
          $t('you_have_your_first') }} <span class="text-black">10 {{ $t('points') }}</span> {{
    $t('for_signing_up_earn_more_points_by_visiting_our_app') }}</p>
      </div>
    </div>

    <div
      class="bg-gray lowercase border-graylight p-[12px] rounded-[12px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
      +10 {{ $t('points') }}
    </div>

    <div class="flex flex-col gap-[8px] w-full max-w-[360px]">
      <div class="flex flex-col gap-[8px]">
        <button
          class="bg-orange border-[1px] border-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
          {{ $t('got_it') }}
        </button>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
export default {
  name: 'Successful_sending'
}
</script>
  
  