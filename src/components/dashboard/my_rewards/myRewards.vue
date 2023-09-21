<template>
  <div class="w-full items-center mb-[16px]">
    <div class="w-full flex items-center justify-between">
      <ul class="flex items-center gap-[4px]">
        <li
          @click="filterRewards"
          reward-filter="all"
          :class="rewardFilter === 'all' ? 'bg-orange text-white' : 'bg-white text-black'"
          class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
        >
          {{ $t('all') }}
        </li>
        <li
          @click="filterRewards"
          :reward-filter="rewardsTabs.RESERVED"
          :class="rewardFilter === rewardsTabs.RESERVED ? 'bg-orange text-white' : 'bg-white text-black'"
          class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
        >
          {{ $t('reserved') }}
        </li>
        <li
          @click="filterRewards"
          :reward-filter="rewardsTabs.REDEEMED"
          :class="rewardFilter === rewardsTabs.REDEEMED ? 'bg-orange text-white' : 'bg-white text-black'"
          class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
        >
          {{ $t('redeemed') }}
        </li>
        <li
          @click="filterRewards"
          :reward-filter="rewardsTabs.EXPIRED"
          :class="rewardFilter === rewardsTabs.EXPIRED ? 'bg-orange text-white' : 'bg-white text-black'"
          class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
        >
          {{ $t('expired') }}
        </li>
      </ul>
      <div
        @click="openSearch"
        :class="
          searchable
            ? 'w-full max-w-[500px] grid grid-cols-[40px,auto,20px] items-center px-[16px]'
            : 'w-[48px] max-w-[48px] items-center justify-center'
        "
        class="h-[48px] bg-white rounded-full flex transition-all"
        id="searchToggle"
      >
        <Icon icon="ri:search-2-line" class="text-xl h-full cursor-pointer text-black" />
        <input
          v-if="searchable"
          v-model="searchVal"
          @input="searchRewards"
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
    </div>
    <div class="w-full grid grid-cols-3 gap-[16px] mt-[20px]">
      <RouterLink  :to="{name: $Routes.MY_REWARDS_SINGLE, params: {id: item.id}}" v-for="(item, index) in dynamicRewardsArr" :key="index" class="relative w-full flex flex-col shadow-sm">
        <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
          <img class="w-full h-full object-cover" :src="item.rewardImage" alt="" />
          <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
            <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-sm font-bold text-black leading-[20px] lowercase">{{ item.points }} {{ $t('points') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" :src="item.logo.image" alt="" />
              </div>
              <p class="text-sm font-bold leading-[20px] text-black uppercase">{{ item.logo.title }}</p>
            </div>
            <div
            :class="item.type === rewardsTabs.REDEEMED ? 'bg-greenLight text-green' : item.type === rewardsTabs.RESERVED ? 'bg-purpleLight text-purple' : item.type === rewardsTabs.EXPIRED ? 'bg-redLight text-red' : '' "
             class="px-[16px] py-[5px] rounded-[8px] text-xs font-semibold leading-[20px] tracking-[-0.2px]">{{ item.type }}</div>
          </div>
          <div class="w-full mt-[13px] flex gap-[4px] flex-col">
            <p class="font-bold text-back text-sm leading-[20px]">{{item.rewardTitle}}</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import  {RewardsTabs}  from '@/enums/rewardsTab';

interface Reward {
  id: number;
  points: string;
  rewardImage: string;
  logo: {
    image: string;
    title: string;
  };
  type: string;
  rewardTitle: string;
}

export default {
  name: 'My_rewards_Component',
  data() {
    return {
      rewardsTabs: RewardsTabs,
      staticRewardsArr: [
        {
            id:0,
          points: '100',

          rewardImage: `${window.location.origin}/src/assets/imgs/zar.png`,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/boss.svg`,
            title: 'Zara'
          },
          type: RewardsTabs.REDEEMED,
          rewardTitle: 'Gift Card Sturbucks'
        },
        {
            id:1,
          points: '200',
          rewardImage: `${window.location.origin}/src/assets/imgs/reward2.png`,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/boss.svg`,
            title: 'Boss'
          },
          type: RewardsTabs.RESERVED,
          rewardTitle: 'Hugo Boss Discount Card'
        },
        {
            id:2,
          points: '50',
          rewardImage: `${window.location.origin}/src/assets/imgs/zar.png`,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/boss.svg`,
            title: 'Zara'
          },
          type: RewardsTabs.EXPIRED,
          rewardTitle: 'Zara GiftCard'
        }
      ] as Reward[],
      dynamicRewardsArr: [] as any,
      DynamicRewardsArr2: [] as any,

      rewardFilter: 'all' as string,
      searchVal: '' as string,
      searchable: false as boolean,
    }
  },
  mounted() {
    this.dynamicRewardsArr = this.staticRewardsArr
    this.dynamicRewardsArr2 = this.staticRewardsArr

    document.addEventListener('click', e => {
      const target = e.target as Element
      if (!target.closest('#searchToggle')) {
        this.searchable = false
      }
    })
  },
  methods: {
    searchRewards() {},
    filterRewards(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('reward-filter')
      this.rewardFilter = targetFilter

      if(this.rewardFilter === RewardsTabs.EXPIRED) {
        this.dynamicRewardsArr = this.staticRewardsArr.filter((item: { type: string; }) => {
            if(item.type === RewardsTabs.EXPIRED) {
                return item
            }
        })
        this.dynamicRewardsArr2 = this.dynamicRewardsArr
      }

      else if(this.rewardFilter === RewardsTabs.REDEEMED) {
        this.dynamicRewardsArr = this.staticRewardsArr.filter((item: { type: string; }) => {
            if(item.type === RewardsTabs.REDEEMED) {
                return item
            }
        })
        this.dynamicRewardsArr2 = this.dynamicRewardsArr
      }

      else if(this.rewardFilter === RewardsTabs.RESERVED) {
        this.dynamicRewardsArr = this.staticRewardsArr.filter((item: { type: string; }) => {
            if(item.type === RewardsTabs.RESERVED) {
                return item
            }
        })
        this.dynamicRewardsArr2 = this.dynamicRewardsArr
      }

      else {
        this.dynamicRewardsArr = this.staticRewardsArr
        this.dynamicRewardsArr2 = this.staticRewardsArr
      }
    },
    openSearch() {
      this.searchable = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    },
    clearSearchInput() {
      this.searchVal = ''
      //   this.DynamicEarnedPointsArr = this.DynamicEarnedPointsArr2
    }
  }
}
</script>
