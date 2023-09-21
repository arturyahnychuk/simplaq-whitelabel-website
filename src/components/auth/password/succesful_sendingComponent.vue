<template>
  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col">
        <div class="flex max-w-[136px] w-full">
          <img src="@/assets/imgs/sendmail.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('check_your_email') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px] text-center">
          {{ $t('tap_the_button_in_the_email_we’ve_sent_to') }}
        </p>
        <p class="text-pink text-sm font-semibold leading-[20px] tracking-[-0.2px]">Gaydukegors@gmail.com</p>
      </div>
    </div>

    <div class="flex flex-col gap-[8px] w-full max-w-[360px]">
      <div class="flex flex-col gap-[8px]">
        <button
          class="bg-transparent border-[1px] border-graylight py-[16px] rounded-[16px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
        >
          {{ $t('lets_start') }}
        </button>
        <button
          class="bg-orange border-[1px] border-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
        >
          {{ $t('resend_email') }}
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
