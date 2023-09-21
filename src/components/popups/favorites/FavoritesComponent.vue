<template>
  <div
    class="header_notifications_wrapper absolute top-[calc(100%+8px)] z-[99] right-0 w-[383px] bg-white border border-gray rounded-[16px] py-[20px] pb-[24px] drop-shadow-md">
    <div class="w-full flex items-center justify-between pb-[16px] mb-[12px] border-b border-gray px-[20px]">
      <h6 class="text-black font-bold text-base leading-[24px]">{{ $t('favorites') }}</h6>
      <a class="text-xs text-pink font-semibold leading-[20px] tracking-[-0.2px]" href="#">{{ $t('view_all') }}</a>
    </div>

    <HeaderNoFavorites v-if="!isFavorites" />
    <div v-else class="w-full">
      <ul class="flex items-center gap-[8px] pl-[20px] my-[12px] overflow-auto custom-scrollbar hr pb-[12px]">
        <li @click="filterFavorites" :data-filter="FavoritesFilters.EVENTS" :class="filter === FavoritesFilters.EVENTS ? 'bg-orange text-white' : ''"
          class="bg-gray rounded-[12px] px-[16px] py-[12px] text-xs font-semibold text-black leading-[16px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer">
          {{ $t('events') }}
        </li>
        <li @click="filterFavorites" :data-filter="FavoritesFilters.NEWS" :class="filter === FavoritesFilters.NEWS ? 'bg-orange text-white' : ''"
          class="bg-gray rounded-[12px] px-[16px] py-[12px] text-xs font-semibold text-black leading-[16px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer">
          {{ $t('news') }}
        </li>
        <li :class="filter === FavoritesFilters.SHOPS ? 'bg-orange text-white' : ''" @click="filterFavorites" :data-filter="FavoritesFilters.SHOPS"
          class="bg-gray rounded-[12px] px-[16px] py-[12px] text-xs font-semibold text-black leading-[16px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer">
          {{ $t('shops') }}
        </li>
        <li @click="filterFavorites" :data-filter="FavoritesFilters.DINES" :class="filter === FavoritesFilters.DINES ? 'bg-orange text-white' : ''"
          class="bg-gray rounded-[12px] px-[16px] py-[12px] text-xs font-semibold text-black leading-[16px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer">
          {{ $t('dines') }}
        </li>
        <li :class="filter ===  FavoritesFilters.SALES ? 'bg-orange text-white' : ''" @click="filterFavorites" :data-filter="FavoritesFilters.SALES"
          class="bg-gray rounded-[12px] px-[16px] py-[12px] text-xs font-semibold text-black leading-[16px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer">
          {{ $t('sales') }}
        </li>
      </ul>

      <div class="w-full gap-[12px] px-[20px] max-h-[calc(100vh-300px)] overflow-auto custom-scrollbar">
        <div class="flex flex-col" v-if="filter === 'events'">
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
        </div>
        <div class="flex flex-col" v-if="filter === 'news'">
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item2.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item2.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
        </div>
        <div class="flex flex-col" v-if="filter === 'shops'">
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item3.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item3.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
        </div>
        <div class="flex flex-col" v-if="filter === 'dines'">
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item4.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item4.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
        </div>
        <div class="flex flex-col" v-if="filter === 'sales'">
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item3.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div
              class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item3.png"
                alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-bold text-black leading-[20px]">30</p>
                    <p class="text-s font-medium text-grayDark">June</p>
                  </div>
                </div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <p class="text-sm font-bold leading-[20px] text-black">SPA day in mall</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderNoFavorites from '@/components/popups/favorites/NoFavoritesComponent.vue'
import {FavoritesFilters} from '@/enums/dashboard/favorites/favoritesFilters'
export default {
  name: 'HeaderNotifications',
  data() {
    return {
      FavoritesFilters: FavoritesFilters,
      filter: FavoritesFilters.EVENTS as string,
    }
  },
  props: {
    isFavorites: {
      type: Boolean,
      required: true
    }
  },
  components: {
    HeaderNoFavorites
  },
  methods: {
    filterFavorites(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('data-filter')
      this.filter = targetFilter
    }
  }
}
</script>

<style></style>
