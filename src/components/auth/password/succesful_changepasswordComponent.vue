<template>
  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col">
        <div class="flex max-w-[136px] w-full">
          <img src="@/assets/imgs/MaskGroup.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('password_has_been_changed') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px] text-center">
          {{ $t('now_you_can_enjoy_all_the_benefits_of_our_app_again') }}
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-[8px] w-full max-w-[360px]">
      <div class="flex flex-col gap-[8px]">
        <RouterLink :to="{ name: $Routes.LOGIN }"
          class="flex justify-center bg-orange border-[1px] border-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px]">
          {{ $t('login') }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
export default {
  name: 'Successful_sending'
}
</script>
  