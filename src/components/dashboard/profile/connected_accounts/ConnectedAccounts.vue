<template>
  <div class="w-full pt-[20px] pb-[25px] pl-[60px]">
    <div class="w-full flex items-center justify-between border-b border-gray px-[12px] py-[8px]">
      <div class="flex items-center gap-[12px]">
        <div class="relative bg-gray h-[48px] w-[48px] flex items-center justify-center rounded-full">
          <img class="w-[20px]" src="@/assets/imgs/Google.svg" alt="" />
        </div>
        <p class="font-bold text-sm text-black leading-[20px]">Google</p>
      </div>
      <a class="text-orange font-bold text-sm leading-[20px]" href="#">{{$t('disconnect')}}</a>
    </div>
    <div class="w-full flex items-center justify-between border-b border-gray px-[12px] py-[8px]">
      <div class="flex items-center gap-[12px]">
        <div class="relative bg-gray h-[48px] w-[48px] flex items-center justify-center rounded-full">
          <img class="w-[20px]" src="@/assets/imgs/facebook.svg" alt="" />
        </div>
        <p class="font-bold text-sm text-black leading-[20px]">Facebook</p>
      </div>
      <a class="text-orange font-bold text-sm leading-[20px]" href="#">{{$t('connect')}}</a>
    </div>
    <div class="w-full flex items-center justify-between border-b border-transparent px-[12px] py-[8px]">
      <div class="flex items-center gap-[12px]">
        <div class="relative bg-gray h-[48px] w-[48px] flex items-center justify-center rounded-full">
          <img class="w-[20px]" src="@/assets/imgs/Apple.svg" alt="" />
        </div>
        <p class="font-bold text-sm text-black leading-[20px]">Apple</p>
      </div>
      <a class="text-orange font-bold text-sm leading-[20px]" href="#">{{$t('connect')}}</a>
    </div>
  </div>
</template>
