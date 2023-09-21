<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <BreadcrumbComponent :pagesArr="pagesArr" currentPage="Get Points" />

    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px] capitalize">{{ $t('get_points') }}</h6>

    <div class="w-full flex flex-col gap-[8px] bg-white border-[1px] border-graylight rounded-[24px]">
      <div class="w-full flex items-center justify-between gap-[80px] px-[48px] rounded-t-[24px] py-[48px] bg-gray">
        <p class="text-base font-bold leading-[24px] text-black max-w-[248px] w-full">
          {{ $t('makeasd') }} <span class="lowercase text-orange">2 {{ $t('more_transactions') }} </span>
          {{ $t('and_upgrade_to_silver_rank') }}
        </p>
        <div class="flex items-center flex-1 justify-between gap-[31px]">
          <div class="flex items-center gap-[16px]">
            <div class="w-full max-w-[68px]">
              <img class="min-w-[68px] w-full" src="@/assets/imgs/bronze.svg" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-black font-bold text-sm leading-[20px]">{{ $t('bronze') }}</p>
              <p class="text-orange font-semibold text-xs leading-[16px]">{{ $t('your_rank') }}</p>
            </div>
          </div>
          <div class="flex items-center gap-[16px]">
            <div class="w-full max-w-[68px]">
              <img class="min-w-[68px] w-full" src="@/assets/imgs/silver.svg" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-black font-bold text-sm leading-[20px]">{{ $t('silver') }}</p>
              <p class="text-grayDark font-semibold text-xs leading-[16px] lowercase">5 {{ $t('purchases') }}</p>
            </div>
          </div>
          <div class="flex items-center gap-[16px]">
            <div class="w-full max-w-[68px]">
              <img class="min-w-[68px] w-full" src="@/assets/imgs/gold.svg" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-black font-bold text-sm leading-[20px]">{{ $t('gold') }}</p>
              <p class="text-grayDark font-semibold text-xs leading-[16px] lowercase">{{ $t('purchases') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col py-[20px] gap-[20px] px-[25px] bg-white">
        <div class="w-full flex items-center justify-between">
          <p class="text-black font-bold text-sm leading-[20px]">{{ $t('scan_receipt_&_get_points') }}</p>
          <button class="py-[10px] px-[37px] rounded-[12px] border border-orange">
            <p class="font-semibold text-xs text-pink leading-[20px] tracking-[-0.2px]">{{ $t('start') }}</p>
          </button>
        </div>
        <div class="w-full flex flex-col gap-[12px]">
          <div class="w-full flex items-center justify-between">
            <h6 class="text-base text-black font-bold leading-[24px]">{{ $t('awards') }}</h6>
            <RouterLink :to="{name: $Routes.AWARDS_TAB}" class="text-pink text-xs font-semibold leading-[20px] tracking-[-0.2px]">{{ $t('view_all') }}</RouterLink>
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
          </div>
        </div>
        <div class="w-full flex flex-col gap-[12px]">
          <h6 class="text-base text-black font-bold leading-[24px]">{{ $t('awards') }}</h6>
          <div class="w-full flex items-start justify-between pb-[12px] border-b border-b-gray">
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('visit_mall_on_friday') }}</p>
              <p class="lowercase text-xs font-medium text-grayDark leading-[20px] tracking-[-0.2px]">+10 {{ $t('points') }}</p>
            </div>
            <div class="px-[16px] py-[8px] rounded-[10px] bg-gray">
              <p class="text-green text-base font-bold leading-[24px]">+10 {{ $t('points') }}</p>
            </div>
          </div>
          <div class="w-full flex items-start justify-between pb-[12px] border-b border-b-gray">
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('visit') }} 5 {{ $t('stores') }}</p>
              <p class="lowercase text-xs font-medium text-grayDark leading-[20px] tracking-[-0.2px]">+50 {{ $t('points') }}</p>
            </div>
            <button class="py-[10px] px-[37px] rounded-[12px] border border-orange">
              <p class="font-semibold text-xs text-pink leading-[20px] tracking-[-0.2px]">{{ $t('start') }}</p>
            </button>
          </div>
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
export default {
  name: 'GetPoints',
  components: {
    BreadcrumbComponent
  },
  data() {
    return {
      pagesArr: [
        {
          page: this.$t('earned_points'),
          routeName: this.$Routes.EARNED_POINTS
        }
      ] as PagesArr[],
    }
  }
}
</script>
