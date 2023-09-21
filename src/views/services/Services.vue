<template>
    <HeaderComponent />
    <BreadcrumbComponent :pagesArr="pagesArr" />
  
    <div class="w-full relative flex py-[16px] mb-[100px] max-w-[1600px] mx-auto px-[25px] gap-[40px]">
      <div class="w-full relative mt-[16px]">
        <h6 class="text-black font-bold text-2xl leading-[38px] mb-[20px] tracking-[-0.4px]">{{ $t('services') }}</h6>
  
        <div v-if="dynamicServicesArr.length > 0">
          <div class="w-full relative mt-[16px]">
            <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[16px] gap-y-[24px]">
              <RouterLink :to="{ name: $Routes.SERVICES_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-lg rounded-b-[16px]">
                <div class="relative w-full lg:h-[250px] xl:h-[250px] 2xl:h-[277px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col">
                  <div class="w-full flex items-center justify-between flex gap-[4px] pb-[20px]">
                    <p class="text-sm font-bold leading-[20px] text-black">Parking</p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink :to="{ name: $Routes.SERVICES_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-lg rounded-b-[16px]">
                <div class="relative w-full lg:h-[250px] xl:h-[250px] 2xl:h-[277px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col">
                  <div class="w-full flex items-center justify-between flex gap-[4px] pb-[20px]">
                    <p class="text-sm font-bold leading-[20px] text-black">Parking</p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink :to="{ name: $Routes.SERVICES_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-lg rounded-b-[16px]">
                <div class="relative w-full lg:h-[250px] xl:h-[250px] 2xl:h-[277px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col">
                  <div class="w-full flex items-center justify-between flex gap-[4px] pb-[20px]">
                    <p class="text-sm font-bold leading-[20px] text-black">Parking</p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink :to="{ name: $Routes.SERVICES_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-lg rounded-b-[16px]">
                <div class="relative w-full lg:h-[250px] xl:h-[250px] 2xl:h-[277px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col">
                  <div class="w-full flex items-center justify-between flex gap-[4px] pb-[20px]">
                    <p class="text-sm font-bold leading-[20px] text-black">Parking</p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink :to="{ name: $Routes.SERVICES_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-lg rounded-b-[16px]">
                <div class="relative w-full lg:h-[250px] xl:h-[250px] 2xl:h-[277px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col">
                  <div class="w-full flex items-center justify-between flex gap-[4px] pb-[20px]">
                    <p class="text-sm font-bold leading-[20px] text-black">Parking</p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink :to="{ name: $Routes.SERVICES_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-lg rounded-b-[16px]">
                <div class="relative w-full lg:h-[250px] xl:h-[250px] 2xl:h-[277px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col">
                  <div class="w-full flex items-center justify-between flex gap-[4px] pb-[20px]">
                    <p class="text-sm font-bold leading-[20px] text-black">Parking</p>
                  </div>
                </div>
              </RouterLink>
              <RouterLink :to="{ name: $Routes.SERVICES_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-lg rounded-b-[16px]">
                <div class="relative w-full lg:h-[250px] xl:h-[250px] 2xl:h-[277px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col">
                  <div class="w-full flex items-center justify-between flex gap-[4px] pb-[20px]">
                    <p class="text-sm font-bold leading-[20px] text-black">Parking</p>
                  </div>
                </div>
              </RouterLink>
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
  
    <SubscribeComponent />
    <FooterComponent />
  </template>
  
  <script lang="ts">
  interface PagesArr {
    page: string
    routeName: string
  }
  
  import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
  import FooterComponent from '@/components/layouts/FooterComponent.vue'
  import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
  import GridArticles from '@/components/GridArticles.vue'
  import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'
  
  export default {
    name: 'News',
    components: {
      HeaderComponent,
      FooterComponent,
      BreadcrumbComponent,
      GridArticles,
      SubscribeComponent,
    },
    data() {
      return {
        searchable: false as boolean,
        searchVal: '' as string,
        dynamicServicesArr: [1],
        range: 0 as number,
  
        pagesArr: [
          {
            page: this.$t('services'),
            routeName: this.$Routes.SERVICES
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
  