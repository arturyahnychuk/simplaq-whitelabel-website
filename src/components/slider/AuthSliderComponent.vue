<template>
  <div class="w-full min-h-screen bg-gray">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-[20px] h-full">
        <div class="hidden lg:flex items-center justify-center auth-slider">
          <SliderComponentVue @swiper="onSwiper"  :autoplay="{ delay: 3500, disableOnIteraction: false }" :pagination="true" :controllers="false"
            space-between="24" slides-per-view="1">
            <swiper-slide>
              <div class="flex flex-col mx-auto items-center justify-center gap-[84px] max-w-[460px]">
                <div class="relative w-full w-full items-center justify-center rounded-[16px] flex flex-col">
                  <img class="w-full w-[430px] object-cover" src="@/assets/imgs/mall.svg" alt="" />
                </div>
                <div class="flex flex-col items-center gap-[12px] justify-center max-w-[343px]">
                  <h6 class="text-black text-center font-xl leading-[28px] tracking-[-0.4px] font-bold">
                    {{ $t('galerie_harfa_mall_mobile_app') }}</h6>
                  <p class="text-grayDark text-center font-normal text-sm leading-[28px] tracking-[0.1px]">
                    {{ $t('galerie_harfa_mall_mobile_app_text') }}
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex flex-col mx-auto items-center justify-center gap-[84px] max-w-[460px]">
                <div class="relative w-full w-full items-center justify-center rounded-[16px] flex flex-col">
                  <img class="w-full max-w-[377px] object-cover" src="@/assets/imgs/easyMap.svg" alt="" />
                </div>
                <div class="flex flex-col items-center gap-[12px] justify-center max-w-[343px]">
                  <h6 class="text-black text-center font-xl leading-[28px] tracking-[-0.4px] font-bold">
                    {{ $t('easy_map_navigation') }}</h6>
                  <p class="text-grayDark text-center font-normal text-sm leading-[28px] tracking-[0.1px]">
                    {{ $t('easy_map_navigation_text') }}
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex flex-col mx-auto items-center justify-center gap-[84px] max-w-[460px]">
                <div class="relative w-full w-full items-center justify-center rounded-[16px] flex flex-col">
                  <img class="w-full w-[430px] object-cover" src="@/assets/imgs/earnPoints.svg" alt="" />
                </div>
                <div class="flex flex-col items-center gap-[12px] justify-center max-w-[343px]">
                  <h6 class="text-black text-center font-xl leading-[28px] tracking-[-0.4px] font-bold">
                    {{ $t('earn_points_for_every_purchase') }}</h6>
                  <p class="text-grayDark text-center font-normal text-sm leading-[28px] tracking-[0.1px]">
                    {{ $t('earn_points_for_every_purchase_text') }}
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex flex-col mx-auto items-center justify-center gap-[84px] max-w-[460px]">
                <div class="relative w-full w-full items-center justify-center rounded-[16px] flex flex-col">
                  <img class="w-full max-w-[377px] object-cover" src="@/assets/imgs/quickPay.svg" alt="" />
                </div>
                <div class="flex flex-col items-center gap-[12px] justify-center max-w-[343px]">
                  <h6 class="text-black text-center font-xl leading-[28px] tracking-[-0.4px] font-bold">
                    {{ $t('quick_pay_for_parking') }}</h6>
                  <p class="text-grayDark text-center font-normal text-sm leading-[28px] tracking-[0.1px]">
                    {{ $t('quick_pay_for_parking_text') }}
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex flex-col mx-auto items-center justify-center gap-[84px] max-w-[460px]">
                <div class="relative w-full w-full items-center justify-center rounded-[16px] flex flex-col">
                  <img class="w-full w-[430px] object-cover" src="@/assets/imgs/everythingLove.svg" alt="" />
                </div>
                <div class="flex flex-col items-center gap-[12px] justify-center max-w-[343px]">
                  <h6 class="text-black text-center font-xl leading-[28px] tracking-[-0.4px] font-bold">
                    {{ $t('everything_you_love') }}</h6>
                  <p class="text-grayDark text-center font-normal text-sm leading-[28px] tracking-[0.1px]">
                    {{ $t('everything_you_love_text') }}
                  </p>
                </div>
              </div>
            </swiper-slide>
          </SliderComponentVue>
        </div>
        <div class="flex items-center justify-center bg-white min-h-screen">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import SliderComponentVue from '@/components/slider/SliderComponent.vue'
export default {
  name: 'Login',
  components: {
    SliderComponentVue,

    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = swiper => {
      
    }
    const onSlideChange = () => {
      
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation]
    }
  },
}
</script>
