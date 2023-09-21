<template>
  <div class="main-slider-parent w-full mb-[48px]">
    <div class="relative max-w-[1600px] mx-auto px-[25px]">

      <div :class="!controllers ? 'hidden' : ''" class="w-full flex items-center justify-between mb-[24px]">
        <h5 class="text-black xl:text-xl 2xl:text-2xl font-bold leading-[38px] tracking-[-0.4[x]]">{{ sectionTitle }}</h5>
        <div class="flex items-center gap-[16px]">
          <RouterLink :to="{ name: routeName }"
            class="text-pink font-semibold xl:text-sm 2xl:text-base leading-[22px] tracking-[-0.4px]">{{ $t('see_all') }}
          </RouterLink>
          <div class="slider-btns-responsive flex slider-nav items-center gap-[4px]">
            <div @click="prev" class="cursor-pointer prev w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
              
              <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />
            </div>
            <div @click="next" class="cursor-pointer next w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
              <Icon icon="radix-icons:chevron-right" class="text-xl text-black" />
            </div>
          </div>
        </div>
      </div>
      <!-- Swiper -->
      <swiper ref="slider" class="mySwiper h-full w-full" :modules="modules" :autoplay="autoplay ? autoplay : false" @swiper="onSwiper"
        :slides-per-view="slidesPerViewIs" :space-between="spaceBetween" @slideChange="onSlideChange"
        :pagination="{ clickable: true }" navigation :scrollbar="{ draggable: true }">
        <slot></slot>
      </swiper>
      <div class="slider-btns-responsive-sm hidden justify-center flex slider-nav items-center gap-[4px]">
        <div @click="prev" class="cursor-pointer prev w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
          <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />
        </div>
        <div @click="next" class="cursor-pointer next w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
          <Icon icon="radix-icons:chevron-right" class="text-xl text-black" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination, Navigation, Autoplay } from 'swiper'
import {useSwiper, Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
export default {
  data() {
    return {
      slidesPerViewIs: this.slidesPerView,
      breakpointIs: this.breakpoint
    }
  },
  props: {
    routeName: {
      required: false,
    },
    autoplay: {
      required: false,
    },
    controllers: {},
    sectionTitle: {
      required: false
    },
    slidesPerView: {
      required: true
    },
    spaceBetween: {
      required: true
    },
    breakpoint: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    prev(e) {
      const prevBtn = e.target.closest('.main-slider-parent').querySelector('.swiper-button-prev')
      prevBtn.click()
    },
    next(e) {
      const nextBtn = e.target.closest('.main-slider-parent').querySelector('.swiper-button-next')
      nextBtn.click()
    }
  },
  mounted() {
    let width = document.body.getBoundingClientRect().width

    if (typeof this.breakpoint !== 'undefined') {
      this.breakpoint.forEach(item => {
        if (width <= item.size) {
          this.slidesPerViewIs = item.view
        }
      })
    }

    window.addEventListener('resize', () => {
      width = document.body.getBoundingClientRect().width
      if (typeof this.breakpoint !== 'undefined') {
        this.breakpoint.forEach((item, i) => {
          if (width <= item.size) {
            this.slidesPerViewIs = item.view
          } else {
            if (width > this.breakpoint[0].size) {
              this.slidesPerViewIs = this.slidesPerView
            }
          }
        })
      }
    })
  },
  setup() {
    const onSwiper = (swiper) => {
      let authSliderBullets = document.querySelectorAll('.auth-slider .swiper-pagination-bullet')
      if (authSliderBullets) {
        authSliderBullets.forEach(bullet => {
          if (bullet.classList.contains('swiper-pagination-bullet-active')) {
            bullet.classList.add('!bg-orange')
          } else {
            bullet.classList.add('!bg-white-light')
          }
        })
      }
    }
    const onSlideChange = (swiper) => {
      let authSliderBullets = document.querySelectorAll('.auth-slider .swiper-pagination-bullet')
      if (authSliderBullets) {
        authSliderBullets.forEach(bullet => {
          if (bullet.classList.contains('swiper-pagination-bullet-active')) {
            bullet.classList.add('!bg-orange')
            bullet.classList.remove('!bg-white-light')
          } else {
            bullet.classList.remove('!bg-orange')
            bullet.classList.add('!bg-white-light')
          }
        })
      }
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation, Autoplay]
    }
  }
}
</script>
