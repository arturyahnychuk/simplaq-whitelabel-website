<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <div class="w-full flex items-center justify-between">
      <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('Purchases') }}</h6>

      <div v-if="purchases" class="flex items-center justify-end flex-1 gap-[4px]">
        <div
          @click="openSearch"
          :class="
            searchable
              ? 'w-full max-w-[500px] grid grid-cols-[40px,auto,20px] items-center px-[16px]'
              : 'max-w-[48px] w-[48px] items-center justify-center'
          "
          class="h-[48px] bg-white rounded-full flex transition-all"
          id="searchToggle"
        >
          <Icon icon="ri:search-2-line" class="text-xl h-full cursor-pointer text-black" />
          <input
            v-if="searchable"
            v-model="searchVal"
            @input="searchPurchases"
            id="search"
            ref="searchInput"
            type="text"
            class="w-full h-full outline-none text-xs text-black font-medium leading-[20px] tracking-[-0.2px] placeholder:text-grayDark"
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
          class="cursor-pointer min-w-[48px] w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center"
        >
          <Icon icon="mingcute:filter-line" class="text-xl text-black" />
        </div>
      </div>
    </div>

    <div v-if="!purchases" class="w-full h-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <div class="min-h-[calc(100vh-325px)] h-full flex flex-col items-center justify-center">
        <div
          class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
        >
          <img class="w-full max-w-[136px]" src="@/assets/imgs/noPurchases.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px] max-w-[328px]">
          <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t('nothing_here') }}</p>
          <p class="text-grayDark text-sm font-regular leading-[24px] text-center tracking-[-0.1px]">
            {{ $t('here_will_be_displayed_purchases_made_in_the_mole_when_scanning_the_qr_code') }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="w-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <div class="w-full flex items-center mb-[16px]">
        <ul class="flex items-center gap-[4px]">
          <li
            @click="filterPurchases"
            purchases-filter="all"
            :class="purchasesFilter === 'all' ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('all') }}
          </li>
          <li
            @click="filterPurchases"
            :purchases-filter="PurchasesFilters_ENUM.ACTIVE"
            :class="purchasesFilter === PurchasesFilters_ENUM.ACTIVE ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('active') }}
          </li>
          <li
            @click="filterPurchases"
            :purchases-filter="PurchasesFilters_ENUM.PASSED"
            :class="purchasesFilter === PurchasesFilters_ENUM.PASSED ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('passed') }}
          </li>
          <li
            @click="filterPurchases"
            :purchases-filter="PurchasesFilters_ENUM.PENDING_APPROVAL"
            :class="purchasesFilter === PurchasesFilters_ENUM.PENDING_APPROVAL ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('pending_approval') }}
          </li>
        </ul>
      </div>
      <div class="relative w-full flex flex-col gap-[8px] max-h-[600px] overflow-auto custom-scrollbar" id="purchasesMain">
        <div v-if="DynamicPurchasesArr.length !== 0" v-for="(item, index) in DynamicPurchasesArr" :key="index" class="py-[12px] px-[20px] rounded-[24px] border border-gray">
          <div @click="openDropdown(item.id)" class="w-full cursor-pointer grid grid-cols-4 items-center">
            <div class="flex items-center gap-[16px]" v-if="item.logo">
              <div class="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[24px]" :src="item.logo.image" alt="" />
              </div>
              <div class="flex items-center gap-[12px]">
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">{{ item.logo.title }}</p>
              </div>
            </div>

            <div class="flex flex-col gap-[2px]">
              <p class="text-xs font-medium text-grayDark leading-[20px] tracking-[-0.2px]">{{ $t('date') }}</p>
              <p class="text-black font-bold text-sm text-black leading-[20px]">{{ item.date }}</p>
            </div>

            <div class="flex justify-end">
              <p class="font-bold text-xl text-orange leading-[28px] tracking-[-0.4px]">{{ item.price }}</p>
            </div>
            <div class="flex justify-end gap-[10px] items-center">
              <div
                :class="
                  item.type === PurchasesFilters_ENUM.ACTIVE
                    ? 'bg-greenLight text-green'
                    : item.type === PurchasesFilters_ENUM.PASSED
                    ? 'bg-redLight text-orange'
                    : item.type === PurchasesFilters_ENUM.PENDING_APPROVAL
                    ? 'bg-yellowLight text-orange'
                    : ''
                "
                class="flex items-center gap-[10px] px-[16px] py-[6px] cursor-pointer rounded-[8px] bg-gray"
              >
                <p class="font-semibold text-xs leading-[20px] tracking-[-0.2px]">{{ $t(`${item.type}`) }}</p>
              </div>
              <Icon icon="octicon:chevron-down-24" :class="dropdown === item.id ? 'rotate-180' : ''" class="text-2xl text-grayDark4 accordion-icon transition-all" />
            </div>
          </div>
          <div v-if="dropdown === item.id" class="w-full grid grid-cols-[50%,auto] gap-[40px] py-[16px] border-t border-gray mt-[14px]">
            <div class="flex flex-col">
                <h6 class="text-xs font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('items_to_be_accounted_for') }}</h6>
                <div class="w-full flex items-center justify-between py-[16px] border-b border-b-gray">
                    <p class="text-sm font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('item') }}</p>
                    <p class="text-sm font-bold text-black leading-[20px]">{{ item.logo.title }}</p>
                </div>
                <div class="w-full flex items-center justify-between py-[16px] border-b border-b-gray">
                    <p class="text-sm font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('duration') }}</p>
                    <p class="text-sm font-bold text-black leading-[20px]">{{ item.dropdownOptions.duration }}</p>
                </div>
                <div class="w-full flex items-center justify-between py-[16px] border-b border-b-gray">
                    <p class="text-sm font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('parking_spot') }}</p>
                    <p class="text-sm font-bold text-black leading-[20px]">{{ item.dropdownOptions.parkingSpot }}</p>
                </div>
                <div class="w-full flex items-center justify-between py-[16px] border-b border-b-gray">
                    <p class="text-sm font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('parking_pass') }}</p>
                    <p class="text-sm font-bold text-black leading-[20px]">{{ item.dropdownOptions.parkingPass }}</p>
                </div>
            </div>
            <div class="flex flex-col">
                <h6 class="text-xs font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('receipt') }}</h6>
                <button class="max-w-max my-[12px] px-[34px] py-[14px] rounded-[16px] group hover:bg-orange transition-all bg-gray flex items-center gap-[8px]">
                    <Icon icon="ph:receipt-thin" class="text-lg text-black group-hover:text-white transition-all" />
                    <p class="text-black font-medium text-sm leading-[20px] group-hover:text-white transitiona-all tracking-[-0.2px]">{{ $t('download_receipt') }}</p>
                </button>
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
  </div>
  <FilterComponent v-if="activefilter" @closeFilterComponent="closeFilterComponent" @filterOptions="filterOptions" />
</template>

<script lang="ts">
import FilterComponent from '@/components/modals/filter/FilterComponent.vue'

import { useHead } from '@vueuse/head'
import { PurchasesFilters_ENUM } from '@/enums/dashboard/purchases/purchaseFilters'

interface Purchases {
  id: number
  logo: {
    image: string
    title: string
  }
  date: string
  price: string
  type: PurchasesFilters_ENUM.ACTIVE | PurchasesFilters_ENUM.PASSED | PurchasesFilters_ENUM.PENDING_APPROVAL
  dropdownOptions: {
    duration: string
    parkingSpot: string
    parkingPass: string
  }
}
export default {
  name: 'FavoritesTab',
  components: {
    FilterComponent
  },
  data() {
    return {
      dropdown: null as number | null,
      PurchasesFilters_ENUM: PurchasesFilters_ENUM,
      purchases: true as boolean,
      searchable: false as boolean,
      searchVal: '' as string,
      activefilter: false as boolean,
      purchasesFilter: 'all' as string,

      StaticPurchasesArr: [
        {
          id: 0,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/car.svg`,
            title: 'Cinema parking'
          },
          date: '12.07.2022',
          price: '$1750.00',
          type: 'active',
          dropdownOptions: {
            duration: '1 hours',
            parkingSpot: '1st floor - A701',
            parkingPass: '#32-56-76'
          }
        },
        {
          id: 1,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/car.svg`,
            title: 'Cinema parking'
          },
          date: '12.07.2022',
          price: '$99.00',
          type: 'active',
          dropdownOptions: {
            duration: '1 hours',
            parkingSpot: '1st floor - A701',
            parkingPass: '#32-56-76'
          }
        },
        {
          id: 2,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/car.svg`,
            title: 'Cinema parking'
          },
          date: '12.07.2022',
          price: '$23.00',
          type: 'pending_approval',
          dropdownOptions: {
            duration: '1 hours',
            parkingSpot: '1st floor - A701',
            parkingPass: '#32-56-76'
          }
        },
        {
          id: 3,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/car.svg`,
            title: 'Cinema parking'
          },
          date: '12.07.2022',
          price: '$230.00',
          type: 'passed',
          dropdownOptions: {
            duration: '1 hours',
            parkingSpot: '1st floor - A701',
            parkingPass: '#32-56-76'
          }
        }
      ] as Purchases[],
      DynamicPurchasesArr2: [] as Purchases[],
      DynamicPurchasesArr: [] as Purchases[]
    }
  },
  mounted() {
    this.DynamicPurchasesArr = this.StaticPurchasesArr
    this.DynamicPurchasesArr2 = this.StaticPurchasesArr
    document.addEventListener('click', e => {
      const target = e.target as Element
      if (!target.closest('#searchToggle')) {
        this.searchable = false
      }

      if(!target.closest('#purchasesMain')) {
        this.dropdown = null
      }
    })
  },
  methods: {
    openDropdown(itemId: number) {
        if(this.dropdown !== null && this.dropdown === itemId) {
            this.dropdown = null
        }else {
            this.dropdown = itemId
        }
    },
    filterOptions(filterOpt: { rangeMin: number; rangeMax: number; place: string }) {
      this.DynamicPurchasesArr = this.DynamicPurchasesArr2.filter((item: { price: string; logo: { title: string } }) => {
        const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
        const itemsInFilter = numericPrice >= filterOpt.rangeMin && numericPrice <= filterOpt.rangeMax
        if (filterOpt.place) {
          const placeInFilter = item.logo.title.toLowerCase().includes(filterOpt.place.toLowerCase())

          if (itemsInFilter && placeInFilter) {
            return item
          }
        } else {
          if (itemsInFilter) {
            return item
          }
        }
      })
      this.activefilter = false
    },
    filterPurchases(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('purchases-filter')
      this.purchasesFilter = targetFilter
      if (this.purchasesFilter === PurchasesFilters_ENUM.ACTIVE) {
        this.DynamicPurchasesArr = this.StaticPurchasesArr.filter((item: { type: string }) => {
          if (item.type === PurchasesFilters_ENUM.ACTIVE) {
            return item
          }
        })
        this.DynamicPurchasesArr2 = this.StaticPurchasesArr.filter((item: { type: string }) => {
          if (item.type === PurchasesFilters_ENUM.ACTIVE) {
            return item
          }
        })
      } else if (this.purchasesFilter === PurchasesFilters_ENUM.PASSED) {
        this.DynamicPurchasesArr = this.StaticPurchasesArr.filter((item: { type: string }) => {
          if (item.type === PurchasesFilters_ENUM.PASSED) {
            return item
          }
        })
        this.DynamicPurchasesArr2 = this.StaticPurchasesArr.filter((item: { type: string }) => {
          if (item.type === PurchasesFilters_ENUM.PASSED) {
            return item
          }
        })
      } else if (this.purchasesFilter === PurchasesFilters_ENUM.PENDING_APPROVAL) {
        this.DynamicPurchasesArr = this.StaticPurchasesArr.filter((item: { type: string }) => {
          if (item.type === PurchasesFilters_ENUM.PENDING_APPROVAL) {
            return item
          }
        })
        this.DynamicPurchasesArr2 = this.StaticPurchasesArr.filter((item: { type: string }) => {
          if (item.type === PurchasesFilters_ENUM.PENDING_APPROVAL) {
            return item
          }
        })
      } else {
        this.DynamicPurchasesArr = this.StaticPurchasesArr
        this.DynamicPurchasesArr2 = this.StaticPurchasesArr
      }
    },
    closeFilterComponent() {
      this.activefilter = false
    },
    openFilterComponent() {
      this.activefilter = true
    },
    clearSearchInput() {
      this.searchVal = ''
      // this.DynamicPurchasesArr = this.StaticPurchasesArr
      this.DynamicPurchasesArr = this.DynamicPurchasesArr2
    },
    openSearch() {
      this.searchable = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    },
    searchPurchases() {
      const searchVal = this.searchVal.toLowerCase()

      this.DynamicPurchasesArr = this.DynamicPurchasesArr2.filter((item: { logo: { title: string } }) => {
        const amountMatch = item.logo.title.toLowerCase().includes(searchVal)
        const hasMatch = amountMatch
        const isEmptySearch = searchVal === ''
        return isEmptySearch || hasMatch
      })
    }
  },
  setup() {
    useHead({
      title: 'My Favorites - Galerie Harfa Mall',
      meta: [
        {
          name: 'description',
          content:
            'View your favorite events, news, shops, and sales on the Galerie Harfa Mall favorites page. Stay updated with the latest additions to your favorites list.'
        },
        {
          property: 'og:title',
          content: 'My Favorites - Galerie Harfa Mall'
        },
        {
          property: 'og:description',
          content:
            'View your favorite events, news, shops, and sales on the Galerie Harfa Mall favorites page. Stay updated with the latest additions to your favorites list.'
        },
        {
          property: 'og:image',
          content: 'image.jpg'
        }
      ]
    })
  }
}
</script>
@/enums/purchaseFilters