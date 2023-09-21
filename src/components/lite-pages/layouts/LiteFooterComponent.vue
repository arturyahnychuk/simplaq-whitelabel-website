<template>
  <footer class="footer w-full">
    <div class="relative max-w-[1600px] mx-auto px-[25px]">
      <img class="absolute top h-max left-[50%] translate-x-[-50%] w-[calc(100%-50px)]" src="@/assets/imgs/divider.svg"
        alt="" />

      <div class="w-full flex items-center justify-between pb-[24px] pt-[24px]">
        <a href="#" class="brand flex items-center">
          <img class="w-[112px]" src="@/assets/logo.svg" alt="logo" />
        </a>

        <div class="flex items-center gap-[32px]">
          <a href="#"
            class="text-sm font-semibold leading-[20px] tracking-[-0.2px] text-black">{{ $t('privacy_terms') }}</a>
          <a href="#"
            class="text-sm font-semibold leading-[20px] tracking-[-0.2px] text-black">{{ $t('terms_service') }}</a>
        </div>
      </div>


    </div>
  </footer></template>
  