<template>
  <div class="hero-slider w-full mb-[48px]">
    <div class="relative max-w-[1600px] mx-auto lg:px-[25px]">
      <h5
        class="mb-[24px] mt-[40px] lg:mt-[0] text-black xl:text-xl px-[25px] 2xl:text-2xl font-bold leading-[38px] tracking-[-0.4x]">
        Receipts</h5>

      <div class="relative w-full h-[290px] xl:h-[542px] 2xl:h-[623px] sm:h-[420px] overflow-hidden lg:rounded-[32px]">
        <div class="w-full relative lg:rounded-[32px] h-full border-[1px] border-graylight">
          <div class="w-full grid grid-cols-[60%,auto] gap-[45px] h-full items-center">
            <div class="">
              <div
                class="flex-col items-center flex lg:block hero-content z-50 absolute top-[50%] left-[50%] translate-x-[-50%] lg:translate-x-[0] lg:left-[102px] translate-y-[-50%] w-[90%] sm:max-w-[364px] lg:max-w-[400px] xl:max-w-[600px]">
                <h3
                  class="text-lg sm:text-2xl md:text-2.5xl xl:text-3xl lg:text-start text-center text-black font-bold sm:leading-[32px] md:leading-[48px]">
                  {{ $t('scan_your_receipt_and') }} <span class="text-orange">{{ $t('get_points_for_rewards') }}</span>
                </h3>
                <p
                  class="font-medium lg:text-start text-center text-black lg:text-sm xl:text-base lg:leading-[20px] xl:leading-[22px] mt-[12px] mb-[24px] lg:mt-[12px] xl:mt-[20px] sm:mt-[8px] sm:mb-[24px] xl:mb-[40px]">
                  {{ $t('lite_hero_text') }}
                </p>

                <div class="hero-actions flex items-center gap-[8px]">
                  <a href="#"
                    class="min-w-[160px] sm:min-w-[210px] flex items-center justify-center gap-[16px] py-[19px] px-[9px] sm:px-[24px] border-[1px] border-white rounded-full bg-orange">
                    <p class="text-sm leading-[20px] tracking-[-0.2px] text-white">{{ $t('upload_my_receipt') }}</p>
                  </a>
                  <a href="#"
                    class="min-w-[160px] sm:min-w-[210px] flex items-center justify-center gap-[16px] py-[19px] px-[9px] sm:px-[24px] border-[1px] border-graylight rounded-full bg-transparent">
                    <p class="text-sm leading-[20px] tracking-[-0.2px] text-black">{{ $t('download_app') }}</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="lg:block hidden w-full max-w-[464px]">
              <img class="w-full" src="@/assets/imgs/rt-bg.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>
