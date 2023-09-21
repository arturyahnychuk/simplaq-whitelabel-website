<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('my_rewards') }}</h6>

    <div v-if="!rewards" class="w-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] h-full border-graylight rounded-[24px]">
      <div class="w-full h-full flex flex-col items-center justify-center py-[80px]">
        <div
          class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
        >
          <img class="w-full max-w-[136px]" src="@/assets/imgs/Rewards.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t(`no_rewards_found`) }}</p>
          <p class="text-grayDark text-sm font-regular leading-[24px] text-center tracking-[-0.1px] max-w-[324px]">
            {{ $t('this_will_display_your_rewards_that_you_have_activated') }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="w-full">
      <MyRewards />
    </div>
  </div>
</template>

<script lang="ts">
import MyRewards from '@/components/dashboard/my_rewards/myRewards.vue'
export default {
  name: 'My_rewards_tab',
  components: {
    MyRewards,
  },
  data() {
    return {
      rewards: true as boolean
    }
  }
}
</script>
