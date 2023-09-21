<template>
  <notifications v-if="notificationsElement" #body="props" position="bottom left" :duration="5000" :max="1">
    <div class="flex items-center justify-between max-w-[360px] w-full bg-white rounded-[20px] p-[16px] shadow-md">
      <div class="flex items-center gap-[12px]">
        <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
        <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px]">
          {{ props.item.title }}
        </p>
      </div>

      <Icon @click="props.close()" icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
    </div>
  </notifications>

  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-[999]">
    <div class="w-full h-full flex overflow-auto md:py-[20px] bg-white md:bg-transparent">
      <div class="w-full max-w-[664px] h-full md:min-h-[640px] md:h-max m-auto px-[40px] py-[40px] bg-white md:rounded-[24px]">
        <div class="w-full h-full flex flex-col justify-between">
          <div class="flex flex-col gap-[11px]">
            <div class="flex items-center gap-[8px]">
              <div
                @click="() => tabFilter('privacyPolicy')"
                :class="tab === 'privacyPolicy' ? 'bg-orange text-white' : 'bg-gray text-black'"
                class="cursor-pointer hover:bg-orange transition-all hover:text-white rounded-[12px] flex items-center justify-center px-[16px] py-[12px]"
              >
                <p class="font-semibold text-xs leading-[16px] tracking-[-0.1px] capitalize">{{ $t('privacy_policy') }}</p>
              </div>
              <div
                @click="() => tabFilter('termsConditions')"
                :class="tab === 'termsConditions' ? 'bg-orange text-white' : 'bg-gray text-black'"
                class="cursor-pointer hover:bg-orange transition-all hover:text-white rounded-[12px] flex items-center justify-center px-[16px] py-[12px]"
              >
                <p class="font-semibold text-xs leading-[16px] tracking-[-0.1px] capitalize">{{ $t('terms_&_conditions') }}</p>
              </div>
            </div>

            <div class="w-full" v-if="tab === 'privacyPolicy'">
              <div class="flex flex-col gap-[4px]">
                <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('privacy_policy') }}</p>
                <p class="text-sm leading-[24px] text-grayDark font-normal">{{ $t('last_updated') }}: June 27, 2002</p>
              </div>

              <div
                class="mt-[11px] w-full flex flex-col gap-[11px] h-full max-h-[400px] md:max-h-[330px] custom-scrollbar overflow-auto pr-[25px]"
              >
                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('overview') }}</p>
                  <p class="text-xs leading-[24px] text-grayDark font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('our_privacy_statement') }}</p>
                  <p class="text-xs leading-[24px] text-grayDark font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div class="flex flex-col gap-[4px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('privacy_policy') }}</p>
                  <p class="text-sm leading-[24px] text-grayDark font-normal">{{ $t('last_updated') }}: June 27, 2002</p>
                </div>

                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('overview') }}</p>
                  <p class="text-xs leading-[24px] text-grayDark font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('our_privacy_statement') }}</p>
                  <p class="text-xs leading-[24px] text-grayDark font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full" v-if="tab === 'termsConditions'">
              <div class="flex flex-col gap-[4px]">
                <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('terms_&_conditions') }}</p>
                <p class="text-sm leading-[24px] text-grayDark font-normal">{{ $t('last_updated') }}: June 27, 2002</p>
              </div>

              <div
                class="mt-[11px] w-full flex flex-col gap-[11px] h-full max-h-[400px] md:max-h-[330px] custom-scrollbar overflow-auto pr-[25px]"
              >
                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('overview') }}</p>
                  <p class="text-xs leading-[24px] text-grayDark font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('our_privacy_statement') }}</p>
                  <p class="text-xs leading-[24px] text-grayDark font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div class="flex flex-col gap-[4px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('privacy_policy') }}</p>
                  <p class="text-sm leading-[24px] text-grayDark font-normal">{{ $t('last_updated') }}: June 27, 2002</p>
                </div>

                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('overview') }}</p>
                  <p class="text-xs leading-[24px] text-grayDark font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-base2 leading-[26px] capitalize">{{ $t('our_privacy_statement') }}</p>
                  <p class="text-xs leading-[24px] text-grayDark font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full flex flex-col gap-[8px] py-[16px]">
            <label for="privacyPolicy" class="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                v-model="policyAccepted"
                id="privacyPolicy"
                class="absolute sr-only border-[4px] w-[24px] h-[24px] border-none outline-none text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
              />
              <div
                class="relative checkmark border-graylight w-[24px] h-[24px] border rounded-[4px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
              ></div>
              <p class="ml-[15px] text-sm leading-[24px] text-grayDark font-normal tracking-[0.1px]">
                {{ $t('i_accept') }}
                <span class="font-semibold leading-[20px] text-pink">{{ $t('privacy_policy') }}</span>
              </p>
            </label>
            <label for="terms&conditions" class="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                v-model="termsAccepted"
                id="terms&conditions"
                class="absolute sr-only border-[4px] w-[24px] h-[24px] border-none outline-none text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
              />
              <div
                class="relative checkmark border-graylight w-[24px] h-[24px] border rounded-[4px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
              ></div>
              <p class="ml-[15px] text-sm leading-[24px] text-grayDark font-normal tracking-[0.1px]">
                {{ $t('i_accept') }}
                <span class="font-semibold leading-[20px] text-pink">{{ $t('terms_&_conditions') }}</span>
              </p>
            </label>
            <label for="receiveOffers" class="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                v-model="offersAccepted"
                id="receiveOffers"
                class="absolute sr-only border-[4px] w-[24px] h-[24px] border-none outline-none text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
              />
              <div
                class="relative checkmark border-graylight w-[24px] h-[24px] border rounded-[4px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
              ></div>
              <p class="ml-[15px] text-sm leading-[24px] text-grayDark font-normal tracking-[0.1px]">
                {{ $t('i_want_to_receive_commercial_offers_from_mall_&_stores') }}
              </p>
            </label>
          </div>

          <div class="flex gap-[8px] pt-[16px] border-gray w-full items-center justify-center">
            <button
              @click="cancelTerms"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
            >
              {{ $t(`cancel`) }}
            </button>
            <routerLink
              :to="{ name: $Routes.REGISTER }"
              v-if="termsAccepted && policyAccepted"
              class="border-[1px] flex items-ceter justify-center max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-white bg-orange text-sm font-semibold transition-all"
            >
              {{ $t('accept_terms') }}
            </routerLink>
            <button
              v-else
              @click="handleSubmit"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-black text-sm font-semibold transition-all"
            >
              {{ $t('accept_terms') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tab: 'privacyPolicy' as string,
      policyAccepted: false,
      termsAccepted: false,
      offersAccepted: false
    }
  },
  props: {
    notificationsElement: {
      required: false,
      type: Boolean
    }
  },
  emits: ['cancelTerms'],
  methods: {
    cancelTerms() {
      this.$emit('cancelTerms')
    },
    tabFilter(tab: string) {
      this.tab = tab
    },
    handleSubmit() {
      if (!this.policyAccepted || !this.termsAccepted) {
        this.$notify({
          title: this.$t('please_accept_the_terms_to_continue'),
          component: {
            template: `
    <div class="flex items-center gap-[12px]">
      <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
      <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px]">{{$t('invalid_password_confirmation')}}</p>
    </div>
    <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
  `
          }
        })
      }
    }
  }
}
</script>

<style>
.checkmark::before {
  content: '';
  position: absolite;
  display: flex;
  top: 39%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  width: 8px;
  height: 12px;
  border-bottom: 2px solid theme('colors.white');
  border-right: 2px solid theme('colors.white');
  opacity: 0;
}

input:checked ~ .checkmark::before {
  opacity: 1;
  transition: all 0.2s ease;
  position: absolute;
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
