<template>
  <div class="w-full mb-[48px]">
    <div class="relative max-w-[1600px] mx-auto px-[25px]">
      <h5 class="mb-[24px] text-black xl:text-xl 2xl:text-2xl font-bold leading-[38px] tracking-[-0.4px]">
        {{ $t("my_rewards") }}</h5>

      <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] gap-y-[24px]">
        <router-link :to="{ name: $Routes.MY_REWARD }" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: $Routes.MY_REWARD }" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: $Routes.MY_REWARD }" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script></script>
  