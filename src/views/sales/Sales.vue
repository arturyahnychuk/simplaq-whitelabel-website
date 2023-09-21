<template>
  <HeaderComponent />
  <BreadcrumbComponent :pagesArr="pagesArr" />

  <div class="w-full relative flex py-[16px] max-w-[1600px] mx-auto px-[25px] gap-[40px]">
    <div class="w-full relative mt-[16px]">
      <h6 class="text-black font-bold text-2xl leading-[38px] mb-[20px] tracking-[-0.4px]">{{ $t('entertain') }}</h6>
      <div class="w-full flex items-center justify-between gap-[50px] mb-[20px]">
        <ul class="flex items-center gap-[8px]">
          <li
            @click="filterSales"
            sales-filter="all"
            :class="salesFilter === 'all' ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('all') }}
          </li>
          <li
            @click="filterSales"
            :sales-filter="SalesFilter.CLOTHES"
            :class="salesFilter === SalesFilter.CLOTHES ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('clothes') }}
          </li>
          <li
            @click="filterSales"
            :sales-filter="SalesFilter.ELECTRONICS"
            :class="salesFilter === SalesFilter.ELECTRONICS ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('electronics') }}
          </li>
          <li
            @click="filterSales"
            :sales-filter="SalesFilter.SHOES"
            :class="salesFilter === SalesFilter.SHOES ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('shoes') }}
          </li>
          <li
            @click="filterSales"
            :sales-filter="SalesFilter.BAGS"
            :class="salesFilter === SalesFilter.BAGS ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('bags') }}
          </li>
          <li
            @click="filterSales"
            :sales-filter="SalesFilter.FOR_MEN"
            :class="salesFilter === SalesFilter.FOR_MEN ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('for_men') }}
          </li>
          <li
            @click="filterSales"
            :sales-filter="SalesFilter.FOR_WOMEN"
            :class="salesFilter === SalesFilter.FOR_WOMEN ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('for_women') }}
          </li>
          <li
            @click="filterSales"
            :sales-filter="SalesFilter.FOR_KIDS"
            :class="salesFilter === SalesFilter.FOR_KIDS ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('for_kids') }}
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

      <div v-if="dynamicSalesArr.length > 0">
        <div class="w-full relative mt-[16px]">
          <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[16px] gap-y-[24px]">
            <RouterLink :to="{ name: $Routes.SALES_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
              <div
                class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
              >
                <img
                  class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
                  src="@/assets/imgs/shirt.png"
                  alt=""
                />

                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
                    </div>
                  </div>
                  <Icon icon="solar:heart-outline" class="text-xl text-black" />
                </div>
              </div>
              <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                      <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
                    </div>
                    <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
                  </div>
                  <div class="flex items-center gap-[8px]">
                    <div
                      class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]"
                    >
                      -30%
                    </div>
                  </div>
                </div>
                <div class="w-full mt-[4px]">
                  <div class="flex flex-col gap-[8px]">
                    <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
                    <div class="flex flex-col">
                      <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">
                        $69.90
                      </p>
                      <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
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
    <!--Select-->
    <div
      class="relative bg-gray items-center multiselect-focus-orange border-[1px] border-transparent gap-[0px] grid grid-cols-[20px,auto] px-[20px] gap-[12px] rounded-[16px]"
    >
      <div class="w-[20px]">
        <img class="w-full" src="@/assets/imgs/logo-notitle.svg" />
      </div>
      <div class="flex items-center gap-[12px] py-[17px] placeSelect" id="placeSelect">
        <div class="flex flex-col gap-[2px] w-full">
          <label for="place" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('select_place') }}</label>
          <vue-multiselect
            v-model="selectedPlace"
            :options="places"
            :searchable="searchableSelect"
            :placeholder="$t('search_place')"
            :option-height="60"
            ref="placeSelect"
            track-by="title"
            :custom-label="customLabel"
          >
            <template #option="{ option }">
              <div class="country-option w-full flex items-center gap-[12px]">
                <div class="country-details flex w-full items-center justify-between px-[20px] border-b-[1px] py-[16px] border-gray">
                  <div class="flex items-start gap-[12px]">
                    <div class="w-[56px] border border-graylight h-[56px] bg-gray rounded-full flex items-center justify-center">
                      <img class="w-full max-w-[47px]" :src="option.image" />
                    </div>
                    <div class="flex flex-col gap-[10px]">
                      <div class="flex flex-col gap-[4px]">
                        <p class="country-name text-sm text-black font-bold leading-[20px] tracking-[-0.2px]">{{ option.title }}</p>
                        <p class="text-xs text-grayDark font-medium leading-[20px] tracking-[-0.2px]">{{ option.type }}</p>
                      </div>
                      <div class="flex items-center gap-[4px]">
                        <Icon icon="solar:routing-3-bold" class="text-lg text-black" />

                        <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-black">{{ option.floor }}</p>
                      </div>
                    </div>
                  </div>
                  <Icon icon="bi:check" class="check text-lg text-orange hidden" />
                </div>
              </div>
            </template>

            <template #noResult>
              <div class="w-full flex flex-col items-center justify-center">
                <img src="@/assets/imgs/noresult.svg" class="max-w-[136px] mt-[40px] mb-[24px]" alt="" />
                <h6 class="text-lg text-black font-bold leading-[26px] tracking-[-0.4px]">{{ $t('search') }}</h6>
                <p class="text-center mt-[12px] text-grayDark text-sm leading-[24px] tracking-[0.1px]">
                  {{ $t('unfortunately_nothing_was_found_Try_changing_your_request') }}
                </p>
              </div>
            </template>
          </vue-multiselect>
        </div>
        <Icon icon="octicon:chevron-down-24" class="select-icon text-lg text-black" />
      </div>
    </div>
    <!--Select END-->

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
      <p class="text-black font-bold text-base leading-[24px] capitalize">{{ $t('gender') }}</p>
      <div class="flex w-full flex-wrap gap-[8px]">
        <label class="cursor-pointer">
          <input type="radio" name="prices" checked id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">{{ $t('all') }}</p>
          </div>
        </label>

        <label class="cursor-pointer">
          <input type="radio" name="prices" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">{{ $t('man') }}</p>
          </div>
        </label>

        <label class="cursor-pointer">
          <input type="radio" name="prices" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">{{ $t('woman') }}</p>
          </div>
        </label>

        <label class="cursor-pointer">
          <input type="radio" name="prices" id="" class="peer sr-only custom-peer" />
          <div
            class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[2px] bg-gray px-[16px] py-[12px] rounded-[12px]"
          >
            <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">{{ $t('unisex') }}</p>
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
import VueMultiselect from 'vue-multiselect'

import { SalesFilter } from '@/enums/sales/salesFilter.ts'
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import GridArticles from '@/components/GridArticles.vue'
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'

import FilterComponent from '@/components/modals/filter/FilterComponent.vue'
import Slider from '@vueform/slider'
interface Places {
  title: string
  image: string
  type: string
  floor: string
}
export default {
  name: 'News',
  components: {
    FilterComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    GridArticles,
    SubscribeComponent,
    Slider,
    VueMultiselect,
  },
  data() {
    return {
      activefilter: false as boolean,
      SalesFilter: SalesFilter,
      salesFilter: 'all' as string,
      searchable: false as boolean,
      searchVal: '' as string,
      dynamicSalesArr: [1],
      rangePrice: [0, 750] as [number, number],

      searchableSelect: true as boolean,
      places: [
        {
          title: 'Zara',
          image: `${window.location.origin}/src/assets/imgs/hm.svg`,
          type: this.$t('clothes'),
          floor: this.$t('2nd_floor')
        },
        {
          title: 'Adidas',
          image: `${window.location.origin}/src/assets/imgs/adidas.svg`,
          type: this.$t('clothes'),
          floor: this.$t('2nd_floor')
        },
        {
          title: 'Nike',
          image: `${window.location.origin}/src/assets/imgs/nike.svg`,
          type: this.$t('clothes'),
          floor: this.$t('2nd_floor')
        },
        {
          title: 'Nike',
          image: `${window.location.origin}/src/assets/imgs/ikea.svg`,
          type: this.$t('clothes'),
          floor: this.$t('2nd_floor')
        }
      ] as Places[],
      selectedPlace: null,

      pagesArr: [
        {
          page: this.$t('sales'),
          routeName: this.$Routes.SALES
        }
      ] as PagesArr[]
    }
  },
  mounted() {
    this.selectedPlace = null

    document.addEventListener('click', e => {
      const target = e.target as Element
      if (!target.closest('#searchToggle')) {
        this.searchable = false
      }
    })
  },
  updated() {
    this.updateSelectedPlace(this.selectedPlace)
  },
  watch: {
    selectedPlace(newSelectedPlace) {
      this.updateSelectedPlace(newSelectedPlace)
    }
  },
  methods: {
    updateSelectedPlace(newSelectedPlace) {
      this.$nextTick(() => {
        if (newSelectedPlace) {
          let selected = `<div class="flex items-center gap-[8px]">
          <p class="text-sm leading-[20px] tracking-[-0.2px] text-black">${newSelectedPlace.title}</p>
      </div>`
          let selectedEl = document.createElement('div')
          selectedEl.classList.add('country-selected')
          selectedEl.innerHTML = selected

          if (document.querySelector('.multiselect__tags .country-selected')) {
            document
              .querySelector('#placeSelect .multiselect__tags')
              .removeChild(document.querySelector('.multiselect__tags .country-selected'))
          }
          document.querySelector('#placeSelect .multiselect__tags').appendChild(selectedEl)
        } else {
          if (document.querySelector('.multiselect__tags .country-selected')) {
            document
              .querySelector('#placeSelect .multiselect__tags')
              .removeChild(document.querySelector('.multiselect__tags .country-selected'))
          }
        }
      })
    },
    customLabel({ title }) {
      return `${title}`
    },
    resetValue() {
      this.rangePrice = [0, 750]
      this.$nextTick(() => {
        this.$refs.distanceSlider.$el.querySelector('.slider-tooltip').textContent = this.range + ' km'
        this.$refs.priceSlider.$el.querySelector('[data-handle="0"] .slider-tooltip').textContent = this.rangePrice[0] + ' $'
        this.$refs.priceSlider.$el.querySelector('[data-handle="1"] .slider-tooltip').textContent = this.rangePrice[1] + ' $'
      })
    },
    filterOptions() {},
    handleSliderSlidePrice(value) {
      let minVal = value[0]
      let maxVal = value[1]
      this.$refs.priceSlider.$el.querySelector('[data-handle="0"] .slider-tooltip').textContent = minVal + ' $'
      this.$refs.priceSlider.$el.querySelector('[data-handle="1"] .slider-tooltip').textContent = maxVal + ' $'
    },
    filterSales(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('sales-filter')
      this.salesFilter = targetFilter
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

.placeSelect .multiselect__content-wrapper {
    max-height: calc(100vh - 318px) !important;
}
</style>
