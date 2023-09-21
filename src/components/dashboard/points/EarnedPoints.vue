<template>
  <div class="w-full flex items-center justify-between">
    <div class="flex items-center gap-[16px] mr-[20px]">
      <div class="w-full max-w-[48px]">
        <img class="min-w-[48px] w-full" src="@/assets/imgs/bronze.svg" />
      </div>
      <div class="flex flex-col gap-[4px]">
        <p class="text-black font-bold text-sm leading-[20px]">{{ $t('your_rank') }} - {{ $t('bronze') }}</p>
        <p class="text-orange font-normal text-xs leading-[16px] text-orange">640 {{ $t('points') }}</p>
      </div>
    </div>

    <div class="flex items-center justify-end flex-1 gap-[4px]">
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
          @input="searchPoints"
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
      <div class="min-w-[48px] w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center">
        <Icon icon="mingcute:filter-line" class="text-xl text-black" />
      </div>
      <div class="min-w-max px-[40px] py-[14px] bg-orange rounded-[16px] text-white font-semibold text-sm cursor-pointer">
        {{ $t('get_points') }}
      </div>
    </div>
  </div>

  <div class="w-full grid grid-cols-3 gap-[8px] my-[16px]">
    <div class="w-full rounded-[24px] bg-white p-[20px] flex items-center gap-[12px]">
      <div class="w-[48px] h-[48px] bg-gray rounded-full flex items-center justify-center">
        <Icon icon="ri:search-2-line" class="text-xl text-black" />
      </div>
      <div class="flex flex-col gap-[4px]">
        <p class="text-grayDark text-xs font-normal leading-[20px] tracking-[0.2px]">{{ $t('actual_points') }}</p>
        <p class="text-black font-bold text-lg leadgin-[26px] tracking-[-0.4px]">1250</p>
      </div>
    </div>
    <div class="w-full rounded-[24px] bg-white p-[20px] flex items-center gap-[12px]">
      <div class="w-[48px] h-[48px] bg-gray rounded-full flex items-center justify-center">
        <Icon icon="bx:log-out-circle" class="text-xl text-black rotate-[145deg]" />
      </div>
      <div class="flex flex-col gap-[4px]">
        <p class="text-grayDark text-xs font-normal leading-[20px] tracking-[0.2px]">{{ $t('spent') }}</p>
        <p class="text-black font-bold text-lg leadgin-[26px] tracking-[-0.4px]">540</p>
      </div>
    </div>
    <div class="w-full rounded-[24px] bg-white p-[20px] flex items-center gap-[12px]">
      <div class="w-[48px] h-[48px] bg-gray rounded-full flex items-center justify-center">
        <Icon icon="bx:log-in-circle" class="text-xl text-black rotate-[145deg]" />
      </div>
      <div class="flex flex-col gap-[4px]">
        <p class="text-grayDark text-xs font-normal leading-[20px] tracking-[0.2px]">{{ $t('earned') }}</p>
        <p class="text-black font-bold text-lg leadgin-[26px] tracking-[-0.4px]">1790</p>
      </div>
    </div>
  </div>

  <div class="w-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
    <div class="w-full flex items-center mb-[16px]">
      <ul class="flex items-center gap-[4px]">
        <li
          @click="filterEarnedPoints"
          point-filter="all"
          :class="pointFilter === 'all' ? 'bg-orange text-white' : 'bg-gray text-black'"
          class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
        >
          {{ $t('all') }}
        </li>
        <li
          @click="filterEarnedPoints"
          :point-filter="PointFilters.SPENT"
          :class="pointFilter === PointFilters.SPENT ? 'bg-orange text-white' : 'bg-gray text-black'"
          class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
        >
          {{ $t('spent') }}
        </li>
        <li
          @click="filterEarnedPoints"
          :point-filter="PointFilters.EARNED"
          :class="pointFilter === PointFilters.EARNED ? 'bg-orange text-white' : 'bg-gray text-black'"
          class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
        >
          {{ $t('earned') }}
        </li>
      </ul>
    </div>
    <div class="relative w-full flex flex-col gap-[8px] max-h-[600px] overflow-auto custom-scrollbar">
      <div
        v-if="DynamicEarnedPointsArr.length !== 0"
        v-for="(item, index) in DynamicEarnedPointsArr"
        :key="index"
        class="w-full grid grid-cols-5 items-center py-[12px] px-[20px] rounded-[24px] border border-gray"
      >
        <div class="flex flex-col gap-[2px]" :class="!item.amount && !item.logo ? 'col-span-3' : ''">
          <p class="text-xs font-medium text-grayDark leading-[20px] tracking-[-0.2px]">{{ $t('date') }}</p>
          <p class="text-black font-bold text-sm text-black leading-[20px]">{{ item.date }}</p>
        </div>
        <div class="flex flex-col gap-[2px]" v-if="item.amount">
          <p class="text-xs font-medium text-grayDark leading-[20px] tracking-[-0.2px]">{{ $t('amount') }}</p>
          <p class="text-black font-bold text-sm text-black leading-[20px]">{{ item.amount }}</p>
        </div>
        <div class="flex flex-col gap-[2px]" v-if="item.reward">
          <p class="text-xs font-medium text-grayDark leading-[20px] tracking-[-0.2px]">{{ $t('reward') }}</p>
          <p class="text-pink font-bold text-sm text-black leading-[20px]">{{ item.reward }}</p>
        </div>
        <div class="flex items-center gap-[16px]" v-if="item.logo">
          <div class="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-gray">
            <img class="w-full max-w-[36px]" :src="item.logo.image" alt="" />
          </div>
          <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">{{ item.logo.title }}</p>
        </div>
        <div class="flex justify-end">
          <p class="font-bold text-xl text-orange leading-[28px] tracking-[-0.4px]" v-if="item.points.spent">
            -{{ item.points.point }} {{ $t('pt') }}
          </p>
          <p class="font-bold text-xl text-orange leading-[28px] tracking-[-0.4px]" v-else>+{{ item.points.point }} {{ $t('pt') }}</p>
        </div>
        <div class="flex justify-end">
          <div class="flex px-[16px] py-[6px] cursor-pointer rounded-[8px] bg-gray">
            <p class="font-semibold text-xs text-black leading-[20px] tracking-[-0.2px]">{{ item.action }}</p>
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
</template>

<script lang="ts">
interface EarnedPoint {
  date: string
  amount: string | null
  logo: {
    image: string
    title: string
  } | null
  reward?: string
  points: {
    spent: boolean
    point: string
  }
  action: string
}
import { PointFilters } from '@/enums/dashboard/points/pointFilters'
export default {
  name: 'EarnedPoints',
  data() {
    return {
      PointFilters: PointFilters,
      pointFilter: 'all' as string,
      searchable: false as boolean,
      searchVal: '' as string,
      StaticEarnedPointsArr: [
        {
          date: '12.07.2022',
          amount: '$230.00',
          logo: {
            image: `${window.location.origin}/src/assets/imgs/hm.svg`,
            title: 'H&M'
          },
          points: {
            spent: false,
            point: '230'
          },
          action: this.$t('scan_receipt')
        },
        {
          date: '14.06.2022',
          amount: null,
          logo: null,
          points: {
            spent: false,
            point: '10'
          },
          action: this.$t('visit_5_stores')
        },
        {
          date: '10.07.2022',
          amount: null,
          logo: null,
          points: {
            spent: false,
            point: '10'
          },
          action: this.$t('refer_friends')
        },
        {
          date: '10.07.2022',
          amount: null,
          reward: 'Gift Card Hugo...',
          logo: {
            image: `${window.location.origin}/src/assets/imgs/boss.svg`,
            title: 'Hugo Boss'
          },
          points: {
            spent: true,
            point: '120'
          },
          action: this.$t('reward')
        },
        {
          date: '10.07.2022',
          amount: null,
          logo: null,
          points: {
            spent: false,
            point: '10'
          },
          action: this.$t('scan_qr_code')
        },
        {
          date: '10.07.2022',
          amount: null,
          logo: null,
          points: {
            spent: false,
            point: '10'
          },
          action: this.$t('scan_qr_code')
        },
        {
          date: '12.07.2022',
          amount: '$230.00',
          logo: {
            image: `${window.location.origin}/src/assets/imgs/hm.svg`,
            title: 'H&M'
          },
          points: {
            spent: false,
            point: '230'
          },
          action: this.$t('scan_receipt')
        },
        {
          date: '14.06.2022',
          amount: null,
          logo: null,
          points: {
            spent: false,
            point: '10'
          },
          action: this.$t('visit_5_stores')
        },
        {
          date: '10.07.2022',
          amount: null,
          logo: null,
          points: {
            spent: false,
            point: '10'
          },
          action: this.$t('refer_friends')
        },
        {
          date: '10.07.2022',
          amount: null,
          reward: 'Gift Card Hugo...',
          logo: {
            image: `${window.location.origin}/src/assets/imgs/boss.svg`,
            title: 'Hugo Boss'
          },
          points: {
            spent: true,
            point: '120'
          },
          action: this.$t('reward')
        },
        {
          date: '10.07.2022',
          amount: null,
          logo: null,
          points: {
            spent: false,
            point: '10'
          },
          action: this.$t('scan_qr_code')
        },
        {
          date: '10.07.2022',
          amount: null,
          logo: null,
          points: {
            spent: false,
            point: '10'
          },
          action: this.$t('scan_qr_code')
        }
      ] as EarnedPoint[],
      DynamicEarnedPointsArr2: [] as EarnedPoint[],
      DynamicEarnedPointsArr: [] as EarnedPoint[]
    }
  },
  mounted() {
    this.DynamicEarnedPointsArr = this.StaticEarnedPointsArr
    this.DynamicEarnedPointsArr2 = this.StaticEarnedPointsArr
    document.addEventListener('click', e => {
      const target = e.target as Element
      if (!target.closest('#searchToggle')) {
        this.searchable = false
      }
    })
  },
  methods: {
    searchPoints() {
      const searchVal = this.searchVal.toLowerCase()

      this.DynamicEarnedPointsArr = this.DynamicEarnedPointsArr2.filter((item: { amount: string; reward: string }) => {
        const amountMatch = item.amount && item.amount.toLowerCase().includes(searchVal)
        const rewardMatch = item.reward && item.reward.toLowerCase().includes(searchVal)
        const hasMatch = amountMatch || rewardMatch
        const isEmptySearch = searchVal === ''
        return isEmptySearch || hasMatch
      })
    },
    filterEarnedPoints(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('point-filter')
      this.pointFilter = targetFilter

      if (this.pointFilter === PointFilters.SPENT) {
        this.DynamicEarnedPointsArr = this.StaticEarnedPointsArr.filter((item: { points: { spent: any } }) => {
          if (item.points.spent) {
            return item
          }
        })
        this.DynamicEarnedPointsArr2 = this.StaticEarnedPointsArr.filter((item: { points: { spent: any } }) => {
          if (item.points.spent) {
            return item
          }
        })
      } else if (this.pointFilter === PointFilters.EARNED) {
        this.DynamicEarnedPointsArr = this.StaticEarnedPointsArr.filter((item: { points: { spent: any } }) => {
          if (!item.points.spent) {
            return item
          }
        })
        this.DynamicEarnedPointsArr2 = this.StaticEarnedPointsArr.filter((item: { points: { spent: any } }) => {
          if (!item.points.spent) {
            return item
          }
        })
      } else {
        this.DynamicEarnedPointsArr = this.StaticEarnedPointsArr
        this.DynamicEarnedPointsArr2 = this.StaticEarnedPointsArr
      }
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
