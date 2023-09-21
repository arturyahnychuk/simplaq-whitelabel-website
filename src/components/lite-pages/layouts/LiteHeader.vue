<template>
  <header class="w-full relative lg:mb-[56px]">
    <div class="max-w-[1600px] mx-auto px-[25px]">
      <div class="header_top py-[16px] border-b-[1px] border-gray flex items-center justify-between">
        <div class="header_top-left flex items-center gap-[40px]">
          <a href="#" class="flex brand items-center">
            <img class="w-[112px]" src="@/assets/logo.svg" alt="logo" />
          </a>
        </div>

        <div v-if="!authorized" class="header_top-right flex items-center gap-[8px]">
          <router-link :to="{ name: $Routes.LOGIN }"
            class="px-[26px] py-[13px] min-w-[120px] flex items-center justify-center rounded-[16px] transparent border-[1px] border-graylight text-sm font-semibold transition-all">{{ $t('login') }}</router-link>
          <router-link :to="{ name: $Routes.CREATE_ACCOUNT }"
            class="px-[26px] py-[13px] min-w-[120px] hidden md:flex items-center justify-center rounded-[16px] transparent border-[1px] border-transparent text-sm font-semibold bg-orange text-white transition-all">{{ $t('create_account') }}</router-link>
        </div>
        <div v-else class="header_top-right flex items-center gap-[8px]">
          <div class="hidden  bg-gray px-[16px] rounded-full min-w-max py-[12px] sm:flex items-center gap-[12px]">
            <img src="@/assets/imgs/logo-notitle.svg" class="w-[29px]" alt="">

            <p class="font-medium text-sm leading-[20px] tracking-[-0.2px] text-black">
              {{ $t('loyalty_points') }} : <span class="text-orange text-base font-bold">120 {{ $t('pt') }}</span>
            </p>
          </div>
          <div class="flex items-center gap-[8px] cursor-pointer">
            <div class="relative w-[48px] overflow-hidden flex items-end justify-center h-[48px] rounded-full bg-gray">
              <img class="w-full max-w-[37px]" src="@/assets/imgs/image.svg" alt="" />
            </div>
            <Icon icon="octicon:chevron-down-24" class="text-lg text-grayDark2" />

          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      authorized: true
    }
  }
}
</script>
