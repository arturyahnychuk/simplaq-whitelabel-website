<template>
  <div class="w-full mb-[48px]">
    <div class="relative max-w-[1600px] mx-auto px-[25px]">
      <h5 class="mb-[24px] text-black xl:text-xl 2xl:text-2xl font-bold leading-[38px] tracking-[-0.4px]">
        {{ $t('rewards') }}</h5>

      <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] gap-y-[24px]">
        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
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
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
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
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
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
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
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
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
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
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
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
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
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
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
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
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>


      </div>

      <div class="w-full flex flex-col md:flex-row items-center justify-between gap-[30px] mt-[40px] mb-[100px]">
        <div class="flex items-center gap-[16px]">
          <p class="text-sm text-black font-medium leading-[20px]">{{ $t('show_result') }}:</p>
          <select name="" id="" class="px-[24px] py-[10px] bg-gray rounded-[12px]">
            <option value="8" selected>8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        <ul class="flex items-center gap-[2px]">
          <li
            class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            <Icon icon="formkit:arrowleft" class="text-sm text-black" />
          </li>
          <li
            class="font-medium w-[40px] h-[40px] bg-gray hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            1
          </li>
          <li
            class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            2
          </li>
          <li
            class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            3
          </li>
        <li
          class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
          4
        </li>
        <li
          class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
          ...
        </li>
        <li
          class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
          200
        </li>
        <li
          class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
          <Icon icon="formkit:arrowright" class="text-sm text-black" />
        </li>
      </ul>
    </div>
  </div>
</div></template>

<script></script>
