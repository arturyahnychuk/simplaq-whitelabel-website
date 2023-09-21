<template>
  <aside class="relative w-full h-fit max-w-[300px] rounded-[24px] bg-white px-[20px] pt-[20px] pb-[24px]">
    <div class="w-full flex flex-col items-start">
      <div class="w-full flex flex-col gap-[4px]">
        <div class="w-full flex flex-col gap-[12px]">
          <div class="flex items-center gap-[12px]">
            <div class="flex items-end flex overflow-hidden justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all">
              <img class="w-[80%]" src="@/assets/imgs/profile.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[2px]">
              <p class="font-bold text-sm leading-[20px] text-black">Ann Haiduk</p>
              <p class="font-medium text-xs leading-[20px] tracking-[-0.2px] text-grayDark">120 {{ $t('loyalty_points') }}</p>
            </div>
          </div>
          <div class="w-full bg-gray p-[16px] rounded-[16px] flex items-center justify-between">
            <div class="flex items-center gap-[12px]">
              <Icon icon="solar:shield-user-outline" class="text-lg text-black" />
              <p v-if="!userIdCopied" class="capitalize text-black font-bold leading-[20px] text-sm">{{ $t('user_id') }}: {{ userId }}</p>
              <p v-else class="capitalize text-black font-bold leading-[20px] text-sm">
                {{ $t('user_id') }}: <span class="text-green">{{ $t('copied') }}</span>
              </p>
            </div>
            <Icon
              :class="hide ? 'hide' : ''"
              v-if="!userIdCopied"
              @click="copyUserId"
              icon="solar:copy-outline"
              class="copy-icon text-lg text-black cursor-pointer"
            />
            <Icon :class="!hide ? 'show' : ''" v-else icon="lucide:copy-check" class="copied-icon text-lg text-green cursor-pointer" />
          </div>
        </div>

        <div class="w-full flex flex-col gap-[2px]">
          <RouterLink :to="{ name: $Dashboard_ENUMS.PROFILE_TAB }" class="sidebar-link w-full flex p-[8px] items-center gap-[12px]">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
            >
              <Icon icon="solar:user-linear" class="text-lg text-black" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px]">{{ $t('profile') }}</p>
          </RouterLink>
          <RouterLink :to="{ name: $Dashboard_ENUMS.FAVORITES_TAB }" class="sidebar-link w-full flex p-[8px] items-center gap-[12px]">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
            >
              <Icon icon="solar:heart-outline" class="text-lg text-black" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px]">{{ $t('favorites') }}</p>
          </RouterLink>
          <RouterLink :to="{ name: $Dashboard_ENUMS.SUPPORT_TAB }" class="sidebar-link w-full flex p-[8px] items-center gap-[12px]">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
            >
              <Icon icon="ph:chats-circle-light" class="text-xl text-black" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px]">{{ $t('support') }}</p>
          </RouterLink>
          <RouterLink :to="{ name: $Dashboard_ENUMS.MY_POINTS_TAB }" class="sidebar-link w-full flex p-[8px] items-center gap-[12px]">
            <div
              class="icon stroke flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
            >
              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="group-hover:fill-orange"
                  d="M12.4448 18.0052C12.4346 18.0464 12.4244 18.0979 12.4244 18.1493C11.1525 14.6698 7.92685 9.37836 2.44223 9.05922C2.44223 9.05922 2.8289 7.2165 5.82052 5.83702C5.73911 6.16645 5.66788 6.4547 5.55595 6.89736C5.43384 7.41209 5.42367 8.01947 5.5356 8.54449C5.55595 8.62685 5.58648 8.88422 5.70858 8.88422C5.83069 8.88422 5.88157 8.60626 5.89174 8.54449C6.05455 7.84446 6.14613 7.51504 6.30894 6.8253C6.40052 6.43411 6.43105 6.00174 6.39035 5.58995C7.09246 5.312 7.9065 5.06493 8.87318 4.85904C8.62897 6.08409 8.38475 7.34003 8.14054 8.55479C8.03878 9.07981 8.04896 9.6769 8.18124 10.2019C8.20159 10.2843 8.25247 10.5416 8.3644 10.5416C8.47633 10.5416 8.52721 10.2534 8.53739 10.2019C8.81213 8.82245 9.09704 7.37091 9.37178 5.98115C9.44301 5.60025 9.46336 5.16788 9.41248 4.76639C9.67705 4.71491 9.94161 4.67374 10.2265 4.63256C10.8472 4.53991 11.3967 4.44726 11.8953 4.3546C11.529 6.22822 11.0711 8.59597 10.7251 10.3666C10.6743 10.6343 10.6234 10.9122 10.5623 11.1799C10.4606 11.7049 10.4707 12.302 10.603 12.827C10.6234 12.9094 10.6743 13.1668 10.7862 13.1668C10.9083 13.1668 10.949 12.8785 10.9592 12.827C11.3357 10.8814 11.8648 8.19448 12.2413 6.2591C12.2922 5.99144 12.343 5.71349 12.4041 5.44583C12.4753 5.06493 12.4957 4.65315 12.4448 4.25166C13.5845 3.984 14.4596 3.65457 15.3347 3.17073C15.0803 4.48843 14.8157 5.84732 14.5918 6.95913L14.6122 6.90766L12.8823 15.8125C12.7399 16.5125 12.5974 17.2537 12.4448 18.0052ZM17.5631 0.257364C17.441 0.216186 16.861 1.09122 16.3115 1.65743L16.3013 1.66772C16.3522 1.22505 16.3217 0.761798 16.2199 0.339721C16.1996 0.257364 16.1487 0 16.0368 0C15.9147 0 15.874 0.288248 15.8638 0.339721C15.7519 0.895628 15.6297 1.5133 15.5076 2.15157C13.2894 3.38691 11.1118 3.42809 8.39493 4.04577C2.7068 5.35318 1.81135 8.57538 1.66889 9.56366C1.64854 9.71808 1.76047 9.85191 1.92328 9.85191C7.57071 9.8622 11.2034 16.0081 12.516 19.7347C12.6483 20.0641 12.8009 20.1156 12.8722 19.7244C13.8897 14.5668 14.8768 9.39894 15.874 4.23107C15.9859 3.67516 16.0876 3.10896 16.1996 2.55305C16.8915 1.97656 17.4613 1.1427 17.5733 0.823566C17.614 0.72062 17.7666 0.319132 17.5631 0.257364Z"
                  fill="#17181B"
                />
              </svg>
            </div>
            <p class="font-bold text-sm text-black leading-[20px]">{{ $t('points') }}</p>
          </RouterLink>
          <RouterLink :to="{ name: $Dashboard_ENUMS.MY_RECEIPTS_TAB }" class="sidebar-link w-full flex p-[8px] items-center gap-[12px]">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
            >
              <Icon icon="ph:receipt-thin" class="text-lg text-black group-hover:text-orange transition-all" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px]">{{ $t('my_receipts') }}</p>
          </RouterLink>
          <RouterLink :to="{ name: $Dashboard_ENUMS.MY_REWARDS_TAB }" class="sidebar-link w-full flex p-[8px] items-center gap-[12px]">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
            >
              <Icon icon="solar:medal-star-linear" class="text-lg text-black group-hover:text-orange transition-all" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px]">{{ $t('my_rewards') }}</p>
          </RouterLink>
          <RouterLink :to="{ name: $Dashboard_ENUMS.PAYMENT_METHODS_TAB }" class="sidebar-link w-full flex p-[8px] items-center gap-[12px]">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
            >
              <Icon icon="la:wallet" class="text-lg text-black group-hover:text-orange transition-all" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px]">{{ $t('payment_methods') }}</p>
          </RouterLink>
          <RouterLink :to="{ name: $Dashboard_ENUMS.PURCHASES_TAB }" class="sidebar-link w-full flex p-[8px] items-center gap-[12px]">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
            >
              <Icon icon="ion:car-sport-outline" class="text-lg text-black group-hover:text-orange transition-all" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px]">{{ $t('purchases') }}</p>
          </RouterLink>
          <div
            @click="logout"
            class="w-full flex items-center justify-between rounded-[16px] border-gray pl-[12px] py-[8px] pr-[20px] cursor-pointer"
          >
            <div class="flex items-center gap-[12px]">
              <div class="icon flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all">
                <Icon icon="solar:logout-linear" class="text-lg text-black" />
              </div>
              <p class="font-bold text-sm text-black leading-[20px] capitalize">{{ $t('log_out') }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </aside>
  <Logout @cancelLogout="cancelLogout" v-if="activeLogout" />

</template>

<script lang="ts">
import Logout from '@/components/modals/logoutComponent.vue'

export default {
  name: 'Profile-Sidebar',
  components: {
    Logout,
  },
  data() {
    return {
      userId: 2434334 as number,
      userIdCopied: false as boolean,
      hide: false as boolean, // for animation
      activeLogout: false as boolean,
    }
  },
  methods: {
    copyUserId() {
      if (!navigator.clipboard) {
        console.error('Clipboard API not supported on this device.');
        return;
      }

      navigator.clipboard
        .writeText(this.userId.toString())
        .then(() => {
          this.hide = true;
          setTimeout(() => {
            this.userIdCopied = true;
            this.hide = false;
          }, 100);
          setTimeout(() => {
            this.userIdCopied = false;
          }, 3000);
        })
        .catch((error) => {
          console.error('Failed to copy user ID:', error);
        });
    },
    logout() {
      this.activeLogout = true
    },
    cancelLogout() {
      this.activeLogout = false
    }
  }
}
</script>
