<template>
  <div class="w-full relative flex py-[16px] max-w-[1600px] mx-auto px-[25px] gap-[40px]">
    <div class="w-full relative mt-[16px]">
      <h6 class="text-black font-bold text-2xl leading-[38px] mb-[20px] tracking-[-0.4px]">{{ $t('rewards') }}</h6>
      <div class="w-full flex items-center justify-between gap-[50px]">
        <ul class="flex items-center gap-[8px]">
          <li
            @click="filterRewards"
            rewards-filter="all"
            :class="rewardFilter === 'all' ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('all') }}
          </li>
          <li
            @click="filterRewards"
            :rewards-filter="rewardsCatalogTabs.WITH_PAYMENTS"
            :class="rewardFilter === rewardsCatalogTabs.WITH_PAYMENTS ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('with_payments') }}
          </li>
          <li
            @click="filterRewards"
            :rewards-filter="rewardsCatalogTabs.WITHOUT_PAYMENTS"
            :class="rewardFilter === rewardsCatalogTabs.WITHOUT_PAYMENTS ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('without_payments') }}
          </li>
        </ul>
        <div class="flex items-center gap-[4px] flex-1 justify-end">
          <div class="flex items-center gap-[8px] min-w-max rounded-[16px] px-[19px] py-[12px] bg-gray">
            <Icon icon="fluent:gift-16-regular" class="text-xl text-black" />
            <p class="text-sm text-black font-medium leading-[20px] tracking-[-0.2px]">1/3 {{ $t('can_used') }}</p>
          </div>
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
        </div>
      </div>
      <div class="w-full relative mt-[16px]">
        <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] gap-y-[24px]">
          <RouterLink :to="{ name: $Routes.REWARDS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-white" />
              </div>
            </div>
            <div
              class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
            >
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                </div>
              </div>
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
                <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: $Routes.REWARDS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-white" />
              </div>
            </div>
            <div
              class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
            >
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                </div>
              </div>
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
                <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: $Routes.REWARDS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-white" />
              </div>
            </div>
            <div
              class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
            >
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                </div>
              </div>
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
                <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: $Routes.REWARDS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-white" />
              </div>
            </div>
            <div
              class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
            >
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                </div>
              </div>
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
                <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: $Routes.REWARDS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-white" />
              </div>
            </div>
            <div
              class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
            >
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                </div>
              </div>
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
                <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: $Routes.REWARDS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-white" />
              </div>
            </div>
            <div
              class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
            >
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                </div>
              </div>
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
                <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: $Routes.REWARDS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-white" />
              </div>
            </div>
            <div
              class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
            >
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                </div>
              </div>
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
                <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: $Routes.REWARDS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-white" />
              </div>
            </div>
            <div
              class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
            >
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                </div>
              </div>
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
                <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
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
  </div>
</template>

<script lang="ts">
import { RewardsCatalogTabs } from '@/enums/rewardsCatalogTabs'
export default {
  name: 'RewardsCatalog',
  data() {
    return {
      rewardsCatalogTabs: RewardsCatalogTabs,
      rewardFilter: 'all' as string,
      searchable: false as boolean,
      searchVal: '' as string
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
    filterRewards(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('rewards-filter')
      this.rewardFilter = targetFilter
    },
    clearSearchInput() {
      this.searchVal = ''
      this.DynamicEarnedPointsArr = this.DynamicEarnedPointsArr2
    },
    openSearch() {
      this.searchable = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    }
  }
}
</script>
