<template>
  <div class="w-full my-[32px]">
    <div class="relative max-w-[1600px] mx-auto">
      <div class="w-full max-w-[664px] mx-auto px-[25px] sm:px-[0px]">
        <div class="flex flex-col w-full">
          <h6 class="font-bold text-black text-xl">{{ $t('gift_card_sturbucks') }}</h6>

          <div class="w-full flex items-center justify-between my-[16px]">
            <div class="bg-gray rounded-[10px] px-[16px] py-[12px]">
              <p class="text-black font-bold text-base leading-[24px] lowercase">100 {{ $t('points') }}</p>
            </div>
            <div class="bg-gray rounded-full flex items-center justify-center w-[48px] h-[48px]">
              <Icon icon="solar:heart-outline" class="text-lg text-black" />
            </div>
          </div>

          <div class="w-full flex flex-col">
            <div class="relative w-full">
              <img
                v-if="!giftPicked"
                class="w-full rounded-[16px] max-h-[318px] object-cover object-top"
                src="@/assets/imgs/cover.jpg"
                alt=""
              />
              <div v-else class="w-full rounded-[16px] h-[318px] border-[1px] border-graylight flex items-center justify-center">
                <img src="@/assets/imgs/code.svg" alt="" />
              </div>
            </div>

            <div
              :class="giftPicked ? 'border-b-[1px] border-graylight pb-[16px]' : ''"
              class="w-full flex flex-col items-start sm:flex-row sm:items-center justify-between gap-[20px] mt-[32px] mb-[16px]"
            >
              <div class="flex flex-col gap-[20px] w-full max-w-[350px]">
                <div class="w-full flex items-center justify-between">
                  <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">32/50 {{ $t('in_stock') }}</p>
                  <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">
                    {{ $t('max') }} <span class="font-bold">3</span> {{ $t('items_per_person') }}
                  </p>
                </div>
                <div class="relative w-full bg-yellowLight h-[4px] rounded-[16px] overflow-hidden">
                  <div class="absolute top-0 left-0 w-[65%] h-full bg-orange"></div>
                </div>
              </div>
              <div @click="redeemPoints()" v-if="!giftPicked" class="cursor-pointer px-[55px] bg-orange min-w-max py-[18px] rounded-[20px]">
                <p class="text-white font-semibold text-sm leading-[20px] tracking-[-0.2px]">
                  {{ $t('redeem_for') }} 150 {{ $t('points') }}
                </p>
              </div>
              <div @click="pickUpReward()" v-else class="cursor-pointer px-[55px] bg-orange min-w-max py-[18px] rounded-[20px]">
                <p class="text-white font-semibold text-sm leading-[20px] tracking-[-0.2px]">{{ $t('pick_up_the_reward') }}</p>
              </div>
            </div>

            <div v-if="giftPicked" class="mb-[16px] w-full bg-gray flex items-center justify-center p-[12px]">
              <div class="flex items-center">
                <div class="flex flex-col items-center">
                  <p class="text-3xl font-bold text-orange font-regular leading-[130%] tracking-[-0.4px] font-nekst">00:</p>
                  <p class="text-xs text-grayDark leading-[20px] tracking-[-0.2px] font-nekst">Hrs</p>
                </div>
                <div class="flex flex-col items-center">
                  <p class="text-3xl font-bold text-orange font-regular leading-[130%] tracking-[-0.4px] font-nekst">00:</p>
                  <p class="text-xs text-grayDark leading-[20px] tracking-[-0.2px] font-nekst">Hrs</p>
                </div>
                <div class="flex flex-col items-center">
                  <p class="text-3xl font-bold text-orange font-regular leading-[130%] tracking-[-0.4px] font-nekst">24</p>
                  <p class="text-xs text-grayDark leading-[20px] tracking-[-0.2px] font-nekst">Hrs</p>
                </div>
              </div>
            </div>

            <div class="w-full py-[16px] border-b-[1px] border-t-[1px] border-gray-light-500 flex items-center justify-between">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] bg-gray rounded-full flex items-center justify-center">
                  <img class="w-full max-w-[48px]" src="@/assets/imgs/dines.svg" alt="" />
                </div>
                <div class="flex flex-col gap-[4px">
                  <p class="text-sm text-dark font-bold leading-[20px]">Sturbucks</p>
                  <p class="text-xs font-grayDark leading-[20px] tracking-[-0.2px] font-medium">Coffe</p>
                </div>
              </div>
              <div class="px-[52px] py-[14px] rounded-[16px] border-[1px] border-orange">
                <p class="text-pink font-semibold text-sm leading-[20px] tracking-[-0.2px]">{{ $t('follow') }}</p>
              </div>
            </div>

            <Accordion2Component :title="$t('terms_conditions')">
              <p class="text-xs font-normal text-grayDark leading-[20px] tracking-[0.2px]">
                Lorem ipsum dolor sit amet, aliquam ridiculus id vehicula, amet at neque tellus vestibulum, ut imperdiet congue erat
                tincidunt non nulla, repudiandae pellentesque, dictum non volutpat magnis pellentesque nulla.
              </p>
            </Accordion2Component>
            

            <div class="flex flex-col gap-[12px] mt-[16px]">
              <div class="flex w-full items-center justify-between pb-[12px] border-b-[1px] border-gray-light-500">
                <h6 class="text-base text-dark font-bold leading-[24px]">{{ $t('like_this_reward?') }}</h6>
                <div class="flex items-center gap-[12px]">
                  <Icon icon="iconamoon:like-fill" class="cursor-pointer text-lg text-orange" />
                  <Icon icon="iconamoon:dislike-fill" class="cursor-pointer text-lg text-graylight" />
                </div>
              </div>
              <div class="w-full grid grid-cols-2 gap-[12px]">
                <div class="bg-gray p-[12px] bg-gray rounded-[16px] flex items-center justify-center gap-[8px] cursor-pointer">
                  <img class="w-full max-w-[24px]" src="@/assets/imgs/twitter.svg" alt="" />
                  <p class="text-sm text-black font-semibold leading-[20px] tracking-[-0.2px]">{{ $t('share_in_twitter') }}</p>
                </div>
                <div class="bg-gray p-[12px] bg-gray rounded-[16px] flex items-center justify-center gap-[8px] cursor-pointer">
                  <img class="w-full max-w-[24px]" src="@/assets/imgs/facebook.svg" alt="" />
                  <p class="text-sm text-black font-semibold leading-[20px] tracking-[-0.2px]">{{ $t('share_in_facebook') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CongratulationPopupComponent v-if="pickReward" />
</template>

<script lang="ts">
import CongratulationPopupComponent from '@/components/popups/congratulationPopupComponent.vue'
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'
import Accordion2Component from '@/components/accordion/Accordion2Component.vue'

export default {
  components: {
    CongratulationPopupComponent,
    SubscribeComponent,
    Accordion2Component
  },
  data() {
    return {
      giftPicked: false as boolean,
      pickReward: false as boolean
    }
  },
  methods: {
    redeemPoints() {
      this.giftPicked = true
    },
    pickUpReward() {
      this.pickReward = true
    }
  }
}
</script>
