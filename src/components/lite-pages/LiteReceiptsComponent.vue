<template>
  <div class="w-full mb-[48px]">
    <div class="relative max-w-[1600px] mx-auto px-[25px]">
      <h5 class="mb-[24px] text-black xl:text-xl 2xl:text-2xl font-bold leading-[38px] tracking-[-0.4px]">Receipts</h5>

      <div class="w-full flex flex-col gap-[25px] md:gap-[0] md:flex-row items-center justify-between">
        <ul class="flex flex-wrap items-center gap-[4px]">
          <li
            class="px-[24px] py-[10px] bg-orange text-sm font-semibold text-white leading-[20px] tracking-[-0.2px] rounded-[12px]">
            {{ $t('all') }}
          </li>
          <li
            class="px-[24px] py-[10px] bg-gray text-sm font-semibold text-black leading-[20px] tracking-[-0.2px] rounded-[12px]">
            {{ $t('approved') }}
          </li>
          <li
            class="px-[24px] py-[10px] bg-gray text-sm font-semibold text-black leading-[20px] tracking-[-0.2px] rounded-[12px]">
            {{ $t('rejected') }}
          </li>
          <li
            class="px-[24px] py-[10px] bg-gray text-sm font-semibold text-black leading-[20px] tracking-[-0.2px] rounded-[12px]">
            {{ $t('pending_approval') }}
          </li>
        </ul>

        <div class="flex items-center gap-[4px]">
          <div class="w-[48px] h-[48px] flex bg-gray rounded-full items-center justify-center">
            <Icon icon="ri:search-2-line" class="text-xl text-black" />

          </div>
          <button
            class="bg-orange text-white rounded-[16px] px-[23px] py-[14px] font-semibold leading-[20px] tracking-[-0.2px] text-sm">
            {{ $t('upload_my_receipt') }}
          </button>
        </div>
      </div>

      <div
        class="overflow-auto mt-[24px] w-full rounded-[24px] border-[1px] border-gray bg-white p-[24px] flex flex-col gap-[8px]">
        <div class="flex flex-col gap-[8px] min-w-[1100px]">
          <div class="w-full border-[1px] border-gray px-[20px] py-[12px] rounded-[16px]">
            <div class="grid grid-cols-5">
              <div class="flex items-center gap-[16px]">
                <div class="bg-gray flex items-center justify-center w-[42px] h-[42px] rounded-full">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/hm.svg" alt="" />
                </div>
                <p class="font-bold text-black text-sm leading-[20px]">H&M</p>
              </div>

              <div class="flex flex-col gap-[2px]">
                <p class="text-grayDark text-xs leading-[20px] tracking-[-0.2px] font-medium">{{ $t('date') }}</p>
                <p class="font-bold text-black text-sm leading-[20px]">12.07.2022</p>
              </div>

              <div class="flex flex-col gap-[2px]">
                <p class="text-grayDark text-xs leading-[20px] tracking-[-0.2px] font-medium">{{ $t('points') }}</p>
                <p class="font-bold text-black text-sm leading-[20px]">230</p>
              </div>

              <div class="flex flex-col gap-[2px]">
                <p class="font-bold text-orange text-end text-lg leading-[26px] tracking-[-0.4px]">$230.00</p>
              </div>

              <div class="flex items-center gap-[24px] justify-end">
                <div class="px-[11px] py-[6px] text-xs rounded-[16px] font-bold bg-greenLight text-green">
                  {{ $t('approved') }}</div>
                <Icon icon="octicon:chevron-down-24" class="text-2xl text-grayDark2" />

              </div>
            </div>
          </div>

          <div class="w-full border-[1px] border-gray px-[20px] py-[12px] rounded-[16px]">
            <div class="grid grid-cols-5">
              <div class="flex items-center gap-[16px]">
                <div class="bg-gray flex items-center justify-center w-[42px] h-[42px] rounded-full">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/hm.svg" alt="" />
                </div>
                <p class="font-bold text-black text-sm leading-[20px]">H&M</p>
              </div>

              <div class="flex flex-col gap-[2px]">
                <p class="text-grayDark text-xs leading-[20px] tracking-[-0.2px] font-medium">{{ $t('date') }}</p>
                <p class="font-bold text-black text-sm leading-[20px]">12.07.2022</p>
              </div>

              <div class="flex flex-col gap-[2px]">
                <p class="text-grayDark text-xs leading-[20px] tracking-[-0.2px] font-medium">{{}}</p>
                <p class="font-bold text-black text-sm leading-[20px]">230</p>
              </div>

              <div class="flex flex-col gap-[2px]">
                <p class="font-bold text-orange text-end text-lg leading-[26px] tracking-[-0.4px]">$230.00</p>
              </div>

              <div class="flex items-center gap-[24px] justify-end">
                <div class="px-[11px] py-[6px] text-xs rounded-[16px] font-bold bg-redLight text-red"> {{ $t('rejected') }}
                </div>
                <Icon icon="octicon:chevron-down-24" class="text-2xl text-grayDark2" />

              </div>
            </div>
          </div>

          <div class="w-full border-[1px] border-gray px-[20px] py-[12px] rounded-[16px]">
            <div class="grid grid-cols-5">
              <div class="flex items-center gap-[16px]">
                <div class="bg-gray flex items-center justify-center w-[42px] h-[42px] rounded-full">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/hm.svg" alt="" />
                </div>
                <p class="font-bold text-black text-sm leading-[20px]">H&M</p>
              </div>

              <div class="flex flex-col gap-[2px]">
                <p class="text-grayDark text-xs leading-[20px] tracking-[-0.2px] font-medium">{{ $t('date') }}</p>
                <p class="font-bold text-black text-sm leading-[20px]">12.07.2022</p>
              </div>

              <div class="flex flex-col gap-[2px]">
                <p class="text-grayDark text-xs leading-[20px] tracking-[-0.2px] font-medium">{{}}</p>
                <p class="font-bold text-black text-sm leading-[20px]">230</p>
              </div>

              <div class="flex flex-col gap-[2px]">
                <p class="font-bold text-orange text-end text-lg leading-[26px] tracking-[-0.4px]">$230.00</p>
              </div>

              <div class="flex items-center gap-[24px] justify-end">
                <div class="px-[11px] py-[6px] text-xs rounded-[16px] font-bold bg-yellowLight text-orange">
                  {{ $t('pending_approval') }}</div>
                <Icon icon="octicon:chevron-down-24" class="text-2xl text-grayDark2" />

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div></template>

<script lang="ts">
export default {

}
</script>
