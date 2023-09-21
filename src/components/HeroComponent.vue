<template>
  <div class="hero-slider w-full mb-[48px] lg:mt-[56px]" id="hero-slider-wrapper">
    <div class="relative max-w-[1600px] mx-auto lg:px-[25px]">
      <div
        class="relative w-full h-[290px] sm:h-[329px] md:h-[421px] xl:h-[542px] 2xl:h-[623px] lg:h-[500px] overflow-hidden lg:rounded-[32px]"
      >
        <div class="divider h-max absolute w-full flex bottom-0 z-50">
          <img class="w-full" src="@/assets/imgs/divider.svg" alt="" />
        </div>

        <div class="w-full relative lg:rounded-[32px] h-full">
          <swiper
            class="h-full w-full"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :slides-per-view="1"
            :space-between="0"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
          >
            <swiper-slide class="relative h-full">
              <div class="overlay absolute top-0 left-0 w-full h-full bg-linearPink z-10"></div>
              <img class="h-full w-full object-cover object-top" src="@/assets/imgs/HeroBanner.png" alt="hero-banner" />
              <div
                class="hero-slider-text-content flex-col items-center flex lg:block hero-content z-50 absolute top-[50%] left-[50%] translate-x-[-50%] lg:translate-x-[0] lg:left-[102px] translate-y-[-50%] w-[90%] sm:max-w-[364px] lg:max-w-[400px] xl:max-w-[500px]"
              >
                <h3
                  class="text-lg sm:text-2xl md:text-2.5xl xl:text-3xl lg:text-start text-center text-white font-bold sm:leading-[32px] md:leading-[48px]"
                >
                  Galerie Harfa Mall mobile app
                </h3>
                <p
                  class="font-medium lg:text-start text-center text-white lg:text-sm xl:text-base lg:leading-[20px] xl:leading-[22px] mt-[12px] mb-[24px] lg:mt-[12px] xl:mt-[20px] sm:mt-[8px] sm:mb-[24px] xl:mb-[40px]"
                >
                  Your favorite Mall now on your phone. Scan receipts and collect points. Find your favorite places and boutiques quickly
                  and easily
                </p>

                <div class="hero-actions flex items-center gap-[8px]">
                  <a
                    href="#"
                    class="min-w-[160px] sm:min-w-[210px] flex items-center gap-[16px] py-[11px] px-[9px] sm:px-[24px] border-2 border-white rounded-full"
                  >
                    <Icon icon="mdi:apple" class="text-xl text-white" />

                    <div class="flex flex-col">
                      <p class="text-xs leading-[20px] tracking-[-0.2px] text-white">{{ $t('download_on_the') }}</p>
                      <p class="text-base text-white leading-[22px] tracking-[-0.4px]">{{ $t('app_store') }}</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="min-w-[160px] sm:min-w-[210px] flex items-center gap-[16px] py-[11px] px-[9px] sm:px-[24px] border-2 border-white rounded-full"
                  >
                    <Icon icon="mdi:google-play" class="text-xl text-white" />

                    <div class="flex flex-col">
                      <p class="text-xs leading-[20px] tracking-[-0.2px] text-white">{{ $t('download_on_the') }}</p>
                      <p class="text-base text-white leading-[22px] tracking-[-0.4px]">{{ $t('google_play') }}</p>
                    </div>
                  </a>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="relative h-full">
              <div class="overlay absolute top-0 left-0 w-full h-full bg-linearPink z-10"></div>
              <img class="h-full w-full object-cover object-top" src="@/assets/imgs/HeroBanner.png" alt="hero-banner" />
              <div
                class="hero-slider-text-content flex-col items-center flex lg:block hero-content z-50 absolute top-[50%] left-[50%] translate-x-[-50%] lg:translate-x-[0] lg:left-[102px] translate-y-[-50%] w-[90%] sm:max-w-[364px] lg:max-w-[400px] xl:max-w-[500px]"
              >
                <h3
                  class="text-lg sm:text-2xl md:text-2.5xl xl:text-3xl lg:text-start text-center text-white font-bold sm:leading-[32px] md:leading-[48px]"
                >
                  Galerie Harfa Mall mobile app
                </h3>
                <p
                  class="font-medium lg:text-start text-center text-white lg:text-sm xl:text-base lg:leading-[20px] xl:leading-[22px] mt-[12px] mb-[24px] lg:mt-[12px] xl:mt-[20px] sm:mt-[8px] sm:mb-[24px] xl:mb-[40px]"
                >
                  Your favorite Mall now on your phone. Scan receipts and collect points. Find your favorite places and boutiques quickly
                  and easily
                </p>

                <div class="hero-actions flex items-center gap-[8px]">
                  <a
                    href="#"
                    class="min-w-[160px] sm:min-w-[210px] flex items-center gap-[16px] py-[11px] px-[9px] sm:px-[24px] border-2 border-white rounded-full"
                  >
                    <Icon icon="mdi:apple" class="text-xl text-white" />

                    <div class="flex flex-col">
                      <p class="text-xs leading-[20px] tracking-[-0.2px] text-white">{{ $t('download_on_the') }}</p>
                      <p class="text-base text-white leading-[22px] tracking-[-0.4px]">{{ $t('app_store') }}</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="min-w-[160px] sm:min-w-[210px] flex items-center gap-[16px] py-[11px] px-[9px] sm:px-[24px] border-2 border-white rounded-full"
                  >
                    <Icon icon="mdi:google-play" class="text-xl text-white" />

                    <div class="flex flex-col">
                      <p class="text-xs leading-[20px] tracking-[-0.2px] text-white">{{ $t('download_on_the') }}</p>
                      <p class="text-base text-white leading-[22px] tracking-[-0.4px]">{{ $t('google_play') }}</p>
                    </div>
                  </a>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = swiper => {
      let heroSlider = document.querySelector('.hero-slider')
      if (heroSlider) {
        heroSlider.querySelectorAll('.swiper-pagination-bullet').forEach(bullet => {
          if (bullet.classList.contains('swiper-pagination-bullet-active')) {
            bullet.classList.add('!bg-orange')
          } else {
            bullet.classList.add('!bg-white')
          }
        })
      }
    }
    const onSlideChange = () => {
      let heroSlider = document.querySelector('.hero-slider')
      if (heroSlider) {
        heroSlider.querySelectorAll('.swiper-pagination-bullet').forEach(bullet => {
          if (bullet.classList.contains('swiper-pagination-bullet-active')) {
            bullet.classList.add('!bg-orange')
            bullet.classList.remove("!bg-white")
          } else {
            bullet.classList.remove('!bg-orange')
            bullet.classList.add("!bg-white")
          }
        })
      }
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination]
    }
  }
}
</script>

<style scoped>
#hero-slider-wrapper .swiper-slide img {
  transform: scale(1.2);
  transition: all 0.4s ease;
}

#hero-slider-wrapper .swiper-slide-active {
  z-index: 9;
}

#hero-slider-wrapper .swiper-slide-active img {
  transform: scale(1);
  transition: all 0.4s ease;
}

@media screen and (min-width: 1024px) {
  #hero-slider-wrapper .swiper-slide .hero-slider-text-content {
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.4s ease;
  }
  #hero-slider-wrapper .swiper-slide-active .hero-slider-text-content {
    transform: translateY(-50%);
    opacity: 1;
    transition: all 0.4s ease;
  }
}
</style>
