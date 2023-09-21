<template>
  <HeaderComponent />
  <BreadcrumbComponent :pagesArr="pagesArr" />

  <div class="w-full relative flex py-[16px] max-w-[1600px] mx-auto px-[25px] gap-[40px]">
    <div class="w-full relative mt-[16px]">
      <h6 class="text-black font-bold text-2xl leading-[38px] mb-[20px] tracking-[-0.4px]">{{ $t('entertain') }}</h6>
      <div class="w-full flex items-center justify-between gap-[50px] mb-[20px]">
        <ul class="flex items-center gap-[8px]">
          <li
            @click="filterEntertain"
            entertain-filter="all"
            :class="entertainFilter === 'all' ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('all') }}
          </li>
          <li
            @click="filterEntertain"
            :entertain-filter="EntertainFilter.FOR_KIDS"
            :class="entertainFilter === EntertainFilter.FOR_KIDS ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('for_kids') }}
          </li>
          <li
            @click="filterEntertain"
            :entertain-filter="EntertainFilter.SPORT"
            :class="entertainFilter === EntertainFilter.SPORT ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('sport') }}
          </li>
          <li
            @click="filterEntertain"
            :entertain-filter="EntertainFilter.FOR_FAMILY"
            :class="entertainFilter === EntertainFilter.FOR_FAMILY ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('for_family') }}
          </li>
          <li
            @click="filterEntertain"
            :entertain-filter="EntertainFilter.PARTY"
            :class="entertainFilter === EntertainFilter.PARTY ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('party') }}
          </li>
        </ul>
        <div class="flex items-center gap-[4px] flex-1 justify-end">
          <div
            @click="openSearch"
            :class="
              searchable
                ? 'w-full max-w-[500px] grid grid-cols-[40px,auto,20px] items-center px-[16px]'
                : 'w-[48px] max-w-[48px] items-center justify-center'
            "
            class="h-[48px] bg-gray rounded-full flex transition-all"
            id="searchToggle"
          >
            <Icon icon="ri:search-2-line" class="text-xl h-full cursor-pointer text-black" />
            <input
              v-if="searchable"
              v-model="searchVal"
              id="search"
              ref="searchInput"
              type="text"
              class="w-full h-full outline-none text-xs text-black font-medium leading-[20px] tracking-[-0.2px] placeholder:text-grayDark bg-transparent"
            />
            <Icon
              @click="clearSearchInput"
              v-if="searchable && searchVal.length !== 0"
              icon="zondicons:close-solid"
              class="text-sm h-full cursor-pointer text-black"
            />
          </div>
          <div
            @click="openFilterComponent"
            class="cursor-pointer min-w-[48px] w-[48px] h-[48px] bg-gray rounded-full flex items-center justify-center"
          >
            <Icon icon="mingcute:filter-line" class="text-xl text-black" />
          </div>
        </div>
      </div>

      <div v-if="dynamicEntertainArr.length > 0">
        <div class="w-full relative mt-[16px]">
          <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] gap-y-[24px]">
            <RouterLink :to="{ name: $Routes.ENTERTAIN_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
                <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
                  <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                    <div></div>
                    <Icon icon="solar:heart-outline" class="text-xl text-white" />
                  </div>
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                  <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                    <div class="flex w-full items-center justify-between">
                      <div class="flex flex-col gap-[4px]">
                        <p class="font-bold text-back text-sm leading-[20px]">VR Park</p>
                        <p class="font-medium text-xs text-grayDark">For Family</p>
                      </div>
                      <div class="flex items-center gap-[4px]">
                        <Icon icon="solar:routing-3-bold" class="text-lg text-black" />

                        <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-black">2th floor</p>
                      </div>
                    </div>
                  </div>
                </div>
            </RouterLink>
          </div>

          <div class="w-full flex flex-col md:flex-row items-center justify-between gap-[30px] mt-[40px] mb-[100px]">
            <div class="flex items-center gap-[16px]">
              <p class="text-sm text-black font-medium leading-[20px]">{{ $t('show_result') }}:</p>
              <select name="" id="" class="px-[24px] py-[10px] bg-gray rounded-[12px]">
                <option value="8" selected>8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <ul class="flex items-center gap-[2px]">
              <li
                class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]"
              >
                <Icon icon="formkit:arrowleft" class="text-sm text-black" />
              </li>
              <li
                class="font-medium w-[40px] h-[40px] bg-gray hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]"
              >
                1
              </li>
              <li
                class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]"
              >
                2
              </li>
              <li
                class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]"
              >
                3
              </li>
              <li
                class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]"
              >
                4
              </li>
              <li
                class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]"
              >
                ...
              </li>
              <li
                class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]"
              >
                200
              </li>
              <li
                class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]"
              >
                <Icon icon="formkit:arrowright" class="text-sm text-black" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col items-center justify-center py-[100px]">
        <div
          class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
        >
          <img class="w-full max-w-[136px]" src="@/assets/imgs/points.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t('search') }}</p>
          <p class="text-grayDark text-sm font-regular leading-[24px] text-center tracking-[-0.1px]">
            {{ $t('change_your_request') }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <FilterComponent v-if="activefilter" @closeFilterComponent="closeFilterComponent">
    <div class="w-full flex flex-col gap-[40px] mt-[16px]">
      <p class="text-black font-bold text-base leading-[24px] capitalize">{{ $t('price_range') }}</p>
      <div class="relative slider-container mb-[16px]">
        <img src="@/assets/imgs/vector.svg" class="absolute left-0 bottom-full w-full z-1" />
        <Slider
          ref="priceSlider"
          v-model="rangePrice"
          :min="0"
          :max="750"
          :tooltips="true"
          @input="handleSliderSlidePrice"
          @slide="handleSliderSlidePrice"
        />
      </div>
    </div>

    <div class="w-full flex flex-col gap-[40px] mt-[16px]">
      <p class="text-black font-bold text-base leading-[24px] capitalize">{{ $t('distance_for_me') }}</p>
      <div class="relative slider-container mb-[16px]">
        <img src="@/assets/imgs/vector.svg" class="absolute left-0 bottom-full w-full z-1" />
        <Slider
          ref="distanceSlider"
          v-model="range"
          :min="0"
          :max="2000"
          :tooltips="true"
          @input="handleSliderSlide"
          @slide="handleSliderSlide"
        />
      </div>
    </div>

    <div class="w-full flex flex-col gap-[12px] mt-[40px]">
      <p class="text-black font-bold text-base leading-[24px] capitalize">{{ $t('sort_by') }}</p>
      <div class="flex w-full flex-wrap gap-[8px]">
        <label class="cursor-pointer">
          <input type="radio" name="sort_by" checked id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">
              {{ $t('most_popular') }}
            </p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="sort_by" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">
              {{ $t('top_brand') }}
            </p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="sort_by" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">
              {{ $t('big_sale') }}
            </p>
          </div>
        </label>
      </div>
    </div>

    <div class="w-full flex flex-col gap-[12px] mt-[16px]">
      <p class="text-black font-bold text-base leading-[24px] capitalize">{{ $t('rating') }}</p>
      <div class="flex w-full flex-wrap gap-[8px]">
        <label class="cursor-pointer">
          <input type="radio" name="rating" checked id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">{{ $t('all') }}</p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">5</p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">4</p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">3</p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">2</p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">1</p>
          </div>
        </label>
      </div>
    </div>

    <div class="w-full flex flex-col gap-[12px] mt-[16px]">
      <p class="text-black font-bold text-base leading-[24px] capitalize">{{ $t('prices') }}</p>
      <div class="flex w-full flex-wrap gap-[8px]">
        <label class="cursor-pointer">
          <input type="radio" name="prices" checked id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="bx:dollar" class="text-lg text-black icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">{{ $t('all') }}</p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="prices" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="bx:dollar" class="text-lg text-black icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">3</p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="prices" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="bx:dollar" class="text-lg text-black icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">2</p>
          </div>
        </label>
        <label class="cursor-pointer">
          <input type="radio" name="prices" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <Icon icon="bx:dollar" class="text-lg text-black icon" />
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">1</p>
          </div>
        </label>
      </div>
    </div>

    <div class="flex gap-[8px] mt-[35px] border-t pt-[16px] border-gray w-full items-center justify-center">
      <button
        @click="resetValue"
        class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
      >
        {{ $t('reset') }}
      </button>
      <button
        @click="filterOptions"
        class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
      >
        {{ $t('apply') }}
      </button>
    </div>
  </FilterComponent>

  <SubscribeComponent />
  <FooterComponent />
</template>

<script lang="ts">
interface PagesArr {
  page: string
  routeName: string
}

import { EntertainFilter } from '@/enums/entertain/entertainFilter.ts'
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import GridArticles from '@/components/GridArticles.vue'
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'

import FilterComponent from '@/components/modals/filter/FilterComponent.vue'
import Slider from '@vueform/slider'

export default {
  name: 'News',
  components: {
    FilterComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    GridArticles,
    SubscribeComponent,
    Slider
  },
  data() {
    return {
      activefilter: false as boolean,
      EntertainFilter: EntertainFilter,
      entertainFilter: 'all' as string,
      searchable: false as boolean,
      searchVal: '' as string,
      dynamicEntertainArr: [1],
      range: 0 as number,
      rangePrice: [0, 750] as [number, number],

      pagesArr: [
        {
          page: this.$t('entertain'),
          routeName: this.$Routes.ENTERTAIN
        }
      ] as PagesArr[]
    }
  },
  mounted() {
    document.addEventListener('click', e => {
      const target = e.target as Element
      if (!target.closest('#searchToggle')) {
        this.searchable = false
      }
    })
  },
  methods: {
    resetValue() {
      this.range = 0
      this.rangePrice = [0, 750]
      this.$nextTick(() => {
        this.$refs.distanceSlider.$el.querySelector('.slider-tooltip').textContent = this.range + ' km'
        this.$refs.priceSlider.$el.querySelector('[data-handle="0"] .slider-tooltip').textContent = this.rangePrice[0] + ' $'
        this.$refs.priceSlider.$el.querySelector('[data-handle="1"] .slider-tooltip').textContent = this.rangePrice[1] + ' $'
      })
    },
    filterOptions() {},
    handleSliderSlide(value) {
      let val = value
      let valToKM = (val / 1000).toFixed(2) + ' km'

      this.$refs.distanceSlider.$el.querySelector('.slider-tooltip').textContent = valToKM
    },
    handleSliderSlidePrice(value) {
      let minVal = value[0]
      let maxVal = value[1]
      this.$refs.priceSlider.$el.querySelector('[data-handle="0"] .slider-tooltip').textContent = minVal + ' $'
      this.$refs.priceSlider.$el.querySelector('[data-handle="1"] .slider-tooltip').textContent = maxVal + ' $'
    },
    filterEntertain(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('entertain-filter')
      this.entertainFilter = targetFilter
    },
    clearSearchInput() {
      this.searchVal = ''
      // this.DynamicEarnedPointsArr = this.DynamicEarnedPointsArr2
    },
    openSearch() {
      this.searchable = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    },
    closeFilterComponent() {
      this.activefilter = false
    },
    openFilterComponent() {
      this.activefilter = true

      this.$nextTick(() => {
        this.$refs.distanceSlider.$el.querySelector('.slider-tooltip').textContent = this.range + ' km'

        this.$refs.priceSlider.$el.querySelector('[data-handle="0"] .slider-tooltip').textContent = this.rangePrice[0] + ' $'
        this.$refs.priceSlider.$el.querySelector('[data-handle="1"] .slider-tooltip').textContent = this.rangePrice[1] + ' $'
      })
    }
  }
}
</script>

<style>
.custom-peer:checked ~ .custom-peer-checked .icon {
  color: theme('colors.gray');
}
.custom-peer:checked ~ .custom-peer-checked .text {
  color: theme('colors.gray');
}
</style>
