<template>
  <div class="w-full relative flex py-[16px] max-w-[1600px] mx-auto px-[25px] gap-[40px]">
    <div class="w-full mb-[24px]">
      <img class="w-full" src="@/assets/imgs/divider2.svg" alt="" />
      <div class="grid grid-cols-2 gap-[50px] pl-[92px] items-center pt-[24px]">
        <div class="flex flex-col max-w-[414px] gap-[40px]">
          <Icon icon="mdi-light:email" class="text-xl text-black" />
          <div class="flex flex-col gap-[8px]">
            <h6 class="text-2xl font-bold text-black leading-[38px] tracking-[-0.4px]">
              {{ $t('get_exclusive_offers_and_weekly_updates') }}
            </h6>
            <p class="font-normal text-grayDark text-base leading-[24px] tracking-[0.1px]">
              {{ $t('stacks_is_a_production-ready_library_of_stackable_content_blocks_built_in_react_bative') }}
            </p>
          </div>
          <div class="w-full relative bg-gray h-[56px] grid grid-cols-[auto,148px] rounded-[16px]">
            <div class="flex items-center gap-[12px] px-[20px]">
              <Icon icon="mdi-light:email" class="text-xl text-black" />

              <input type="text" class="w-full h-full bg-transparent outline-none text-black" placeholder="Email" />
            </div>
            <button
              type="submit"
              class="bg-orange w-full h-[56px] rounded-[20px] text-white font-semibold text-sm leading-[20px] tracking-[-0.2px]"
            >
              {{$t('subscribe')}}
            </button>
          </div>
          <div class="flex items-center gap-[12px]">
            <div class="cursor-pointer group bg-blueLight-300 w-[64px] h-[64px] rounded-full flex items-center justify-center">
                <img class="w-full max-w-[32px] transition-all" src="@/assets/imgs/twitter.svg" alt="">
            </div>
            <div class="cursor-pointer group bg-pinkLight-300 w-[64px] h-[64px] rounded-full flex items-center justify-center">
                <img class="w-full max-w-[32px] transition-all" src="@/assets/imgs/instagram.svg" alt="">
            </div>
            <div class="cursor-pointer group bg-blueLight-500 w-[64px] h-[64px] rounded-full flex items-center justify-center">
                <img class="w-full max-w-[32px] transition-all" src="@/assets/imgs/facebook.svg" alt="">
            </div>
          </div>
        </div>
        <div class="w-full">
            <img class="w-full max-w-[646px]" src="@/assets/imgs/subscribe_image.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Subscribe'
}
</script>
