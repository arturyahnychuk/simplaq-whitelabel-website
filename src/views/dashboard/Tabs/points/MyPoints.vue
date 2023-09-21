<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('points') }}</h6>

    <div v-if="!points" class="w-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <div class="w-full flex items-center justify-between gap-[80px] px-[24px] py-[24px]">
        <p class="text-base font-bold leading-[24px] text-black max-w-[248px] w-full">
          {{ $t('make') }} <span class="lowercase text-orange">2 {{ $t('more_transactions') }} </span>
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
      <div class="w-full h-full flex flex-col items-center justify-center py-[80px]">
        <div
          class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
        >
          <img class="w-full max-w-[136px]" src="@/assets/imgs/PointsNt.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t(`you_haven't_earned_any_points_yet`) }}</p>
          <p class="text-grayDark text-sm font-regular leading-[24px] text-center tracking-[-0.1px] max-w-[324px]">
            {{ $t('start_completing_tasks_or_buying_merchandise_to_accumulate_points') }}
          </p>
        </div>
        <RouterLink
          :to="{ name: $Routes.GET_POINTS_TAB }"
          class="text-sm mt-[24px] font-semibold text-white leading-[20px] capitalize tracking-[-0.2px] bg-orange rounded-[16px] px-[40px] py-[14px] cursor-pointer"
        >
          {{ $t('get_points') }}
        </RouterLink>
      </div>
    </div>

    <div v-else class="w-full">
      <EarnedPoints />
    </div>

    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import EarnedPoints from '@/components/dashboard/points/EarnedPoints.vue'
export default {
  name: 'PointsTab',
  data() {
    return {
      points: true as boolean,
    }
  },
  components: {
    EarnedPoints
  }
}
</script>
