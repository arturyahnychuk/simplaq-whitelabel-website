<template>
  <div
    class="header_notifications_wrapper absolute top-[calc(100%+8px)] z-[99] right-0 w-[383px] bg-white border border-gray rounded-[16px] py-[20px] pb-[24px] shadow-md">
    <div class="w-full flex items-center gap-[12px] pb-[16px] mb-[12px] border-b border-gray px-[20px]">
      <div class="flex items-end flex overflow-hidden justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full">
        <img class="w-[80%]" src="@/assets/imgs/profile.svg" alt="" />
      </div>
      <div class="flex flex-col">
        <h6 class="text-black text-base leading-[24px] font-bold">Ann Haiduk</h6>
        <p class="text-grayDark text-xs leading-[20px] font-normal tracking-[0.2px]">120 {{ $t('loyalty_points') }}</p>
      </div>
    </div>

    <div
      class="w-full flex flex-col py-[16px] px-[20px] gap-[16px] max-h-[calc(100vh-300px)] overflow-auto custom-scrollbar">
      <ul class="flex flex-col gap-[8px]">
        <li class="w-full">
          <RouterLink @click="closeProfileMenu" :to="{ name: $Dashboard_ENUMS.PROFILE_TAB }"
            class="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[16px] border border-gray hover:border-yellowLight group transition-alll">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all group-hover:bg-yellowLight transition-all">
              <Icon icon="solar:user-linear" class="text-lg text-black group-hover:text-orange transition-all" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px] group-hover:text-orange transition-all">{{ $t('profile')
            }}</p>
          </RouterLink>
        </li>
        <li class="w-full">
          <RouterLink @click="closeProfileMenu" :to="{ name: $Dashboard_ENUMS.SUPPORT_TAB }"
            class="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[16px] border border-gray hover:border-yellowLight group transition-alll">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all group-hover:bg-yellowLight transition-all">
              <Icon icon="ph:chats-circle-light" class="text-lg text-black group-hover:text-orange transition-all" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px] group-hover:text-orange transition-all">{{ $t('support')
            }}</p>
          </RouterLink>
        </li>
      </ul>

      <div class="flex flex-col gap-[12px]">
        <h6 class="text-sm text-black font-medium leading-[20px] tracking-[-0.2px]">{{ $t('rewards') }}</h6>
        <ul class="flex flex-col gap-[8px]">
          <li class="w-full">
            <RouterLink @click="closeProfileMenu" :to="{ name: $Dashboard_ENUMS.MY_POINTS_TAB }"
              class="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[16px] border border-gray hover:border-yellowLight group transition-alll">
              <div
                class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all group-hover:bg-yellowLight transition-all">
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="group-hover:fill-orange"
                    d="M12.4448 18.0052C12.4346 18.0464 12.4244 18.0979 12.4244 18.1493C11.1525 14.6698 7.92685 9.37836 2.44223 9.05922C2.44223 9.05922 2.8289 7.2165 5.82052 5.83702C5.73911 6.16645 5.66788 6.4547 5.55595 6.89736C5.43384 7.41209 5.42367 8.01947 5.5356 8.54449C5.55595 8.62685 5.58648 8.88422 5.70858 8.88422C5.83069 8.88422 5.88157 8.60626 5.89174 8.54449C6.05455 7.84446 6.14613 7.51504 6.30894 6.8253C6.40052 6.43411 6.43105 6.00174 6.39035 5.58995C7.09246 5.312 7.9065 5.06493 8.87318 4.85904C8.62897 6.08409 8.38475 7.34003 8.14054 8.55479C8.03878 9.07981 8.04896 9.6769 8.18124 10.2019C8.20159 10.2843 8.25247 10.5416 8.3644 10.5416C8.47633 10.5416 8.52721 10.2534 8.53739 10.2019C8.81213 8.82245 9.09704 7.37091 9.37178 5.98115C9.44301 5.60025 9.46336 5.16788 9.41248 4.76639C9.67705 4.71491 9.94161 4.67374 10.2265 4.63256C10.8472 4.53991 11.3967 4.44726 11.8953 4.3546C11.529 6.22822 11.0711 8.59597 10.7251 10.3666C10.6743 10.6343 10.6234 10.9122 10.5623 11.1799C10.4606 11.7049 10.4707 12.302 10.603 12.827C10.6234 12.9094 10.6743 13.1668 10.7862 13.1668C10.9083 13.1668 10.949 12.8785 10.9592 12.827C11.3357 10.8814 11.8648 8.19448 12.2413 6.2591C12.2922 5.99144 12.343 5.71349 12.4041 5.44583C12.4753 5.06493 12.4957 4.65315 12.4448 4.25166C13.5845 3.984 14.4596 3.65457 15.3347 3.17073C15.0803 4.48843 14.8157 5.84732 14.5918 6.95913L14.6122 6.90766L12.8823 15.8125C12.7399 16.5125 12.5974 17.2537 12.4448 18.0052ZM17.5631 0.257364C17.441 0.216186 16.861 1.09122 16.3115 1.65743L16.3013 1.66772C16.3522 1.22505 16.3217 0.761798 16.2199 0.339721C16.1996 0.257364 16.1487 0 16.0368 0C15.9147 0 15.874 0.288248 15.8638 0.339721C15.7519 0.895628 15.6297 1.5133 15.5076 2.15157C13.2894 3.38691 11.1118 3.42809 8.39493 4.04577C2.7068 5.35318 1.81135 8.57538 1.66889 9.56366C1.64854 9.71808 1.76047 9.85191 1.92328 9.85191C7.57071 9.8622 11.2034 16.0081 12.516 19.7347C12.6483 20.0641 12.8009 20.1156 12.8722 19.7244C13.8897 14.5668 14.8768 9.39894 15.874 4.23107C15.9859 3.67516 16.0876 3.10896 16.1996 2.55305C16.8915 1.97656 17.4613 1.1427 17.5733 0.823566C17.614 0.72062 17.7666 0.319132 17.5631 0.257364Z"
                    fill="#17181B" />
                </svg>
              </div>
              <p class="font-bold text-sm text-black leading-[20px] group-hover:text-orange transition-all">{{
                $t('points') }}</p>
            </RouterLink>
          </li>
          <li class="w-full">
            <RouterLink @click="closeProfileMenu" :to="{ name: $Dashboard_ENUMS.MY_RECEIPTS_TAB }"
              class="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[16px] border border-gray hover:border-yellowLight group transition-alll">
              <div
                class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all group-hover:bg-yellowLight transition-all">
                <Icon icon="ph:receipt-thin" class="text-lg text-black group-hover:text-orange transition-all" />
              </div>
              <p class="font-bold text-sm text-black leading-[20px] group-hover:text-orange transition-all">{{
                $t('my_receipts') }}</p>
            </RouterLink>
          </li>
          <li class="w-full">
            <RouterLink @click="closeProfileMenu" :to="{ name: $Dashboard_ENUMS.MY_REWARDS_TAB }"
              class="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[16px] border border-gray hover:border-yellowLight group transition-alll">
              <div
                class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all group-hover:bg-yellowLight transition-all">
                <Icon icon="solar:medal-star-linear" class="text-lg text-black group-hover:text-orange transition-all" />
              </div>
              <p class="font-bold text-sm text-black leading-[20px] group-hover:text-orange transition-all">{{
                $t('my_rewards') }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-[12px]">
        <h6 class="text-sm text-black font-medium leading-[20px] tracking-[-0.2px]">{{ $t('shopping') }}</h6>
        <ul class="flex flex-col gap-[8px]">
          <li class="w-full">
            <RouterLink @click="closeProfileMenu" :to="{ name: $Dashboard_ENUMS.PAYMENT_METHODS_TAB }"
              class="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[16px] border border-gray hover:border-yellowLight group transition-alll">
              <div
                class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all group-hover:bg-yellowLight transition-all">
                <Icon icon="la:wallet" class="text-lg text-black group-hover:text-orange transition-all" />
              </div>
              <p class="font-bold text-sm text-black leading-[20px] group-hover:text-orange transition-all">{{
                $t('payment_methods') }}</p>
            </RouterLink>
          </li>
          <li class="w-full">
            <RouterLink @click="closeProfileMenu" :to="{ name: $Dashboard_ENUMS.PURCHASES_TAB }"
              class="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[16px] border border-gray hover:border-yellowLight group transition-alll">
              <div
                class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all group-hover:bg-yellowLight transition-all">
                <Icon icon="fluent:vehicle-car-24-regular"
                  class="text-lg text-black group-hover:text-orange transition-all" />
              </div>
              <p class="font-bold text-sm text-black leading-[20px] group-hover:text-orange transition-all">{{
                $t('purchases') }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="px-[20px] mt-[16px]">
      <img class="w-full" src="@/assets/imgs/BrandDivider.svg" alt="">
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "ProfileMenu",
  emits: ['closeProfileMenu'],
  methods: {
    closeProfileMenu() {
      this.$emit('closeProfileMenu')
    }
  }
}
</script>



