<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <BreadcrumbComponent :pagesArr="pagesArr" :current-page="$t('awards')" />

    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px] capitalize">{{ $t('awards') }}</h6>

    <div class="w-full flex flex-col gap-[8px] bg-white border-[1px] px-[24px] py-[24px] border-graylight rounded-[24px]">
      <div class="w-full flex items-center mb-[16px]">
        <ul class="flex items-center gap-[4px]">
          <li
            @click="filterRewardPoints"
            reward-filter="all"
            :class="rewardFilter === 'all' ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('all') }}
          </li>
          <li
            @click="filterRewardPoints"
            :reward-filter="AwardFilters_ENUM.EARNED"
            :class="rewardFilter === AwardFilters_ENUM.EARNED ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('earned') }}
          </li>
          <li
            @click="filterRewardPoints"
            :reward-filter="AwardFilters_ENUM.UNEARNED"
            :class="rewardFilter === AwardFilters_ENUM.UNEARNED ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('unearned') }}
          </li>
        </ul>
      </div>

      <div class="w-full grid grid-cols-8">
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <div class="w-[72px] h-[72px] flex items-end rounded-full bg-gray">
            <img class="w-full max-w-[70px]" src="@/assets/imgs/award.svg" />
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <p class="text-black font-bold text-sm leading-[20px]">{{ $t('top_spender') }}</p>
            <p class="text-grayDark font-normal text-s leading-[16px] text-center">
              {{ $t('make_one_purchase_at_the_mall_and_scan_the_receipt') }}
            </p>
          </div>
          <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface PagesArr {
  page: string,
  routeName: string,
}

import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import { AwardFilters_ENUM } from '@/enums/dashboard/points/awardFilters'
export default {
  name: 'AwardsTab',
  data() {
    return {
      AwardFilters_ENUM: AwardFilters_ENUM,
      rewardFilter: 'all' as string,

      pagesArr: [
        {
          page: this.$t('earned_points'),
          routeName: this.$Routes.EARNED_POINTS
        },
        {
          page: this.$t('get_points'),
          routeName: this.$Routes.GET_POINTS
        },
      ] as PagesArr[],
    }
  },
  components: {
    BreadcrumbComponent,
  },
  methods: {
    filterRewardPoints(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('reward-filter')
      this.rewardFilter = targetFilter
    }
  }
}
</script>
