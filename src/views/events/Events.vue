<template>
  <HeaderComponent />
  <BreadcrumbComponent :pagesArr="pagesArr" />

  <div class="w-full relative flex py-[16px] max-w-[1600px] mx-auto px-[25px] gap-[40px]">
    <div class="w-full relative mt-[16px]">
      <h6 class="text-black font-bold text-2xl leading-[38px] mb-[20px] tracking-[-0.4px]">{{ $t('events') }}</h6>
      <div class="w-full flex items-center justify-between gap-[50px] mb-[20px]">
        <ul class="flex items-center gap-[8px]">
          <li
            @click="filterEvents"
            events-filter="all"
            :class="eventsFilter === 'all' ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('all') }}
          </li>
          <li
            @click="filterEvents"
            :events-filter="EventsFilter.EXHIBITION"
            :class="eventsFilter === EventsFilter.EXHIBITION ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('exhibition') }}
          </li>
          <li
            @click="filterEvents"
            :events-filter="EventsFilter.FAMILY"
            :class="eventsFilter === EventsFilter.FAMILY ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('family') }}
          </li>
          <li
            @click="filterEvents"
            :events-filter="EventsFilter.FASHION"
            :class="eventsFilter === EventsFilter.FASHION ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('fashion') }}
          </li>
          <li
            @click="filterEvents"
            :events-filter="EventsFilter.PARTY"
            :class="eventsFilter === EventsFilter.PARTY ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[10px] rounded-[12px] text-sm font-semibold leading-[20px] tracking-[-0.2px] cursor-pointer"
          >
            {{ $t('party') }}
          </li>
        </ul>
        <div class="flex items-center gap-[4px] flex-1 justify-end">
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

      <div v-if="dynamicEventsArr.length > 0">
        <GridArticles>
          <template #main>
            <div class="w-full grid grid-cols-[auto,324px] gap-[32px]">
              <div class="relative w-full h-full">
                <img class="w-full rounded-[20px] max-h-[300px] object-cover object-top" src="@/assets/imgs/HeroBanner.png" alt="" />
                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-[52px] h-[60px] bg-white flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-base2 font-bold text-black leading-[20px]">29</p>
                      <p class="text-xs font-medium text-grayDark">June</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full flex flex-col gap-[20px]">
                <div class="w-full flex justify-end">
                  <Icon icon="solar:heart-outline" class="text-xl text-black cursor-pointer hover:text-orange" />
                </div>
                <div class="flex flex-col gap-[20px]">
                  <h6 class="text-black font-bold text-2xl tracking-[-0.4px] leading-[38px]">Galerie Harfa Mall mobile app</h6>
                  <p class="text-sm font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">
                    Your favorite Mall now on your phone. Scan receipts and collect points. Find your favorite places and boutiques quickly
                    and easily
                  </p>
                  <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                </div>
              </div>
            </div>
          </template>
          <template #articles>
            <div class="w-full flex flex-col gap-[20px]">
              <p class="text-orange text-sm font-bold text-orange">{{ $t('popular_events') }}</p>
              <div class="flex flex-col gap-[12px]">
                <div class="flex flex-col gap-[4px]">
                  <h6 class="text-base font-bold text-black leading-[24px]">Masterclass - How to take care of your face</h6>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                    <div class="w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">10 PM</p>
                  </div>
                </div>
                <div class="flex flex-col gap-[4px]">
                  <h6 class="text-base font-bold text-black leading-[24px]">Masterclass - How to take care of your face</h6>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                    <div class="w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">10 PM</p>
                  </div>
                </div>
                <div class="flex flex-col gap-[4px]">
                  <h6 class="text-base font-bold text-black leading-[24px]">Masterclass - How to take care of your face</h6>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                    <div class="w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">10 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </GridArticles>

        <div class="w-full relative mt-[16px]">
          <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] gap-y-[24px]">
            <RouterLink :to="{ name: $Routes.EVENTS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
              <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-sm font-bold text-black leading-[20px]">30</p>
                      <p class="text-s font-medium text-grayDark">June</p>
                    </div>
                  </div>
                  <Icon icon="solar:heart-outline" class="text-xl text-white" />
                </div>
              </div>
              <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                      <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                    </div>
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                  </div>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
                  </div>
                </div>
                <div class="w-full mt-[4px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                </div>
              </div>
            </RouterLink>
            <RouterLink :to="{ name: $Routes.EVENTS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
              <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-sm font-bold text-black leading-[20px]">30</p>
                      <p class="text-s font-medium text-grayDark">June</p>
                    </div>
                  </div>
                  <Icon icon="solar:heart-outline" class="text-xl text-white" />
                </div>
              </div>
              <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                      <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                    </div>
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                  </div>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
                  </div>
                </div>
                <div class="w-full mt-[4px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                </div>
              </div>
            </RouterLink>
            <RouterLink :to="{ name: $Routes.EVENTS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
              <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-sm font-bold text-black leading-[20px]">30</p>
                      <p class="text-s font-medium text-grayDark">June</p>
                    </div>
                  </div>
                  <Icon icon="solar:heart-outline" class="text-xl text-white" />
                </div>
              </div>
              <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                      <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                    </div>
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                  </div>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
                  </div>
                </div>
                <div class="w-full mt-[4px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                </div>
              </div>
            </RouterLink>
            <RouterLink :to="{ name: $Routes.EVENTS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
              <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-sm font-bold text-black leading-[20px]">30</p>
                      <p class="text-s font-medium text-grayDark">June</p>
                    </div>
                  </div>
                  <Icon icon="solar:heart-outline" class="text-xl text-white" />
                </div>
              </div>
              <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                      <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                    </div>
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                  </div>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
                  </div>
                </div>
                <div class="w-full mt-[4px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                </div>
              </div>
            </RouterLink>
            <RouterLink :to="{ name: $Routes.EVENTS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
              <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-sm font-bold text-black leading-[20px]">30</p>
                      <p class="text-s font-medium text-grayDark">June</p>
                    </div>
                  </div>
                  <Icon icon="solar:heart-outline" class="text-xl text-white" />
                </div>
              </div>
              <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                      <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                    </div>
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                  </div>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
                  </div>
                </div>
                <div class="w-full mt-[4px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                </div>
              </div>
            </RouterLink>
            <RouterLink :to="{ name: $Routes.EVENTS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
              <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-sm font-bold text-black leading-[20px]">30</p>
                      <p class="text-s font-medium text-grayDark">June</p>
                    </div>
                  </div>
                  <Icon icon="solar:heart-outline" class="text-xl text-white" />
                </div>
              </div>
              <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                      <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                    </div>
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                  </div>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
                  </div>
                </div>
                <div class="w-full mt-[4px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                </div>
              </div>
            </RouterLink>
            <RouterLink :to="{ name: $Routes.EVENTS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
              <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-sm font-bold text-black leading-[20px]">30</p>
                      <p class="text-s font-medium text-grayDark">June</p>
                    </div>
                  </div>
                  <Icon icon="solar:heart-outline" class="text-xl text-white" />
                </div>
              </div>
              <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                      <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                    </div>
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                  </div>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
                  </div>
                </div>
                <div class="w-full mt-[4px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                </div>
              </div>
            </RouterLink>
            <RouterLink :to="{ name: $Routes.EVENTS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
              <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
                <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                  <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                    <div class="flex flex-col items-center">
                      <p class="text-sm font-bold text-black leading-[20px]">30</p>
                      <p class="text-s font-medium text-grayDark">June</p>
                    </div>
                  </div>
                  <Icon icon="solar:heart-outline" class="text-xl text-white" />
                </div>
              </div>
              <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                      <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                    </div>
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                  </div>
                  <div class="flex items-center gap-[8px]">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                    <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">10:00 PM</p>
                  </div>
                </div>
                <div class="w-full mt-[4px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
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
import { EventsFilter } from '@/enums/events/eventsFilter'
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import GridArticles from '@/components/GridArticles.vue'
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'
interface PagesArr {
  page: string,
  routeName: string,
}
export default {
  name: 'News',
  components: {
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    GridArticles,
    SubscribeComponent
  },
  data() {
    return {
      EventsFilter: EventsFilter,
      eventsFilter: 'all' as string,
      searchable: false as boolean,
      searchVal: '' as string,
      dynamicEventsArr: [1],

      pagesArr: [
        {
          page: this.$t('events'),
          routeName: this.$Routes.EVENTS
        },
      ] as PagesArr[],
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
    filterEvents(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('events-filter')
      this.eventsFilter = targetFilter
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
