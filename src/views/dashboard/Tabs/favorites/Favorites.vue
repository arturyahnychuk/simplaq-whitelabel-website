<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('favorites') }}</h6>

    <div v-if="!favorites" class="w-full h-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <div class="min-h-[calc(100vh-325px)] h-full flex flex-col items-center justify-center">
        <div
          class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
        >
          <img class="w-full max-w-[136px]" src="@/assets/imgs/noFavorites.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px] max-w-[328px]">
          <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t('no_favorites_found') }}</p>
          <p class="text-grayDark text-sm font-regular leading-[24px] text-center tracking-[-0.1px]">{{ $t('no_favorites_found_text') }}</p>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="w-full flex items-center justify-between">
        <ul class="flex items-center gap-[4px] my-[12px]">
          <li
            @click="filterFavorites"
            data-filter="events"
            :class="filter === 'events' ? 'bg-orange text-white' : 'bg-white text-black'"
            class="rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-black leading-[20px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer"
          >
            {{ $t('events') }}
          </li>
          <li
            @click="filterFavorites"
            :data-filter="FavoritesFilters.NEWS"
            :class="filter === FavoritesFilters.NEWS ? 'bg-orange text-white' : 'bg-white text-black'"
            class="rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-black leading-[20px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer"
          >
            {{ $t('news') }}
          </li>
          <li
            :class="filter === FavoritesFilters.SHOPS ? 'bg-orange text-white' : 'bg-white text-black'"
            @click="filterFavorites"
            :data-filter="FavoritesFilters.SHOPS"
            class="rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-black leading-[20px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer"
          >
            {{ $t('shops') }}
          </li>
          <li
            @click="filterFavorites"
            :data-filter="FavoritesFilters.DINES"
            :class="filter === FavoritesFilters.DINES ? 'bg-orange text-white' : 'bg-white text-black'"
            class="rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-black leading-[20px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer"
          >
            {{ $t('dines') }}
          </li>
          <li
            :class="filter === FavoritesFilters.SALES ? 'bg-orange text-white' : 'bg-white text-black'"
            @click="filterFavorites"
            :data-filter="FavoritesFilters.SALES"
            class="rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-black leading-[20px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer"
          >
            {{ $t('sales') }}
          </li>
          <li
            :class="filter === FavoritesFilters.ENTERTAIN ? 'bg-orange text-white' : 'bg-white text-black'"
            @click="filterFavorites"
            :data-filter="FavoritesFilters.ENTERTAIN"
            class="rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-black leading-[20px] tracking-[-0.1px] hover:bg-orange hover:text-white transition-all cursor-pointer"
          >
            {{ $t('entertain') }}
          </li>
        </ul>
        <button
          class="flex items-center justify-center w-[48px] h-[48px] bg-white gap-[8px] rounded-full transition-all"
        >
        <Icon icon="ri:search-2-line" class="text-lg text-black" />

        </button>
      </div>

      <div class="w-full gap-[12px] mt-[20px]">
        <div class="grid grid-cols-3 gap-[16px]" v-if="filter === FavoritesFilters.EVENTS">
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
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
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
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
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" src="@/assets/imgs/item1.png" alt="" />
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
          </a>
        </div>
        <div class="grid grid-cols-3 gap-[16px]" v-if="filter === FavoritesFilters.NEWS">
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item2.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div></div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
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
                  <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item2.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div></div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
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
                  <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm group">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item2.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div></div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
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
                  <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
              </div>
            </div>
          </a>
        </div>
        <div class="grid grid-cols-3 gap-[16px]" v-if="filter === FavoritesFilters.SHOPS">
          <a href="#" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/zara.png" alt="" />
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[12px] border-b-[1px] border-gray">
                <div class="date px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-xs font-medium text-black leading-[20px] lowercase">Clothes, fashion</p>
                  </div>
                </div>
              </div>
              <div class="w-full flex items-center justify-between mt-[8px] flex gap-[4px]">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <div class="flex flex-col gap-[4px]">
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                    <div class="flex items-center gap-[8px]">
                      <Icon icon="solar:routing-3-bold" class="text-lg text-orange" />

                      <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-pink">2th floor</p>
                    </div>
                  </div>
                </div>

                <div class="px-[20px] py-[10px] border rounded-[12px] border-graylight">
                  <p class="text-xs font-semibold leading-[20px] tracking-[-0.2px] text-black">{{ $t('unfollow') }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="grid grid-cols-3 gap-[16px]" v-if="filter === FavoritesFilters.DINES">
          <a href="#" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/mcd.png" alt="" />
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[12px] border-b-[1px] border-gray">
                <div class="date px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-xs font-medium text-black leading-[20px] lowercase">Fastfood</p>
                  </div>
                </div>
              </div>
              <div class="w-full flex items-center justify-between mt-[8px] flex gap-[4px]">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                  </div>
                  <div class="flex flex-col gap-[4px]">
                    <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                    <div class="flex items-center gap-[8px]">
                      <Icon icon="solar:routing-3-bold" class="text-lg text-orange" />

                      <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-pink">2th floor</p>
                    </div>
                  </div>
                </div>

                <div class="px-[20px] py-[10px] border rounded-[12px] border-graylight">
                  <p class="text-xs font-semibold leading-[20px] tracking-[-0.2px] text-black">{{ $t('unfollow') }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="grid grid-cols-4 gap-[16px]" v-if="filter === FavoritesFilters.SALES">
          <a href="#" class="relative w-full flex flex-col shadow-sm">
            <div
              class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
            >
              <img
                class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
                src="@/assets/imgs/shirt.png"
                alt=""
              />

              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-max px-[8px] py-[4px] bg-graylight flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-black" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
                </div>
                <div class="flex items-center gap-[8px]">
                  <div
                    class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]"
                  >
                    -30%
                  </div>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
                  <div class="flex flex-col">
                    <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">
                      $69.90
                    </p>
                    <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm">
            <div
              class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
            >
              <img
                class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
                src="@/assets/imgs/shirt.png"
                alt=""
              />

              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-max px-[8px] py-[4px] bg-graylight flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-black" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
                </div>
                <div class="flex items-center gap-[8px]">
                  <div
                    class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]"
                  >
                    -30%
                  </div>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
                  <div class="flex flex-col">
                    <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">
                      $69.90
                    </p>
                    <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm">
            <div
              class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
            >
              <img
                class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
                src="@/assets/imgs/shirt.png"
                alt=""
              />

              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-max px-[8px] py-[4px] bg-graylight flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-black" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
                </div>
                <div class="flex items-center gap-[8px]">
                  <div
                    class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]"
                  >
                    -30%
                  </div>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
                  <div class="flex flex-col">
                    <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">
                      $69.90
                    </p>
                    <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm">
            <div
              class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
            >
              <img
                class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
                src="@/assets/imgs/shirt.png"
                alt=""
              />

              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div class="date w-max px-[8px] py-[4px] bg-graylight flex items-center justify-center rounded-[8px]">
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
                  </div>
                </div>
                <Icon icon="solar:heart-outline" class="text-xl text-black" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                    <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
                  </div>
                  <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
                </div>
                <div class="flex items-center gap-[8px]">
                  <div
                    class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]"
                  >
                    -30%
                  </div>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
                  <div class="flex flex-col">
                    <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">
                      $69.90
                    </p>
                    <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="grid grid-cols-3 gap-[16px]" v-if="filter === FavoritesFilters.ENTERTAIN">
          <a href="#" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div></div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <div class="flex w-full items-center justify-between">
                  <div class="flex flex-col gap-[4px]">
                    <p class="font-bold text-back text-sm leading-[20px]">VR Park</p>
                    <p class="font-medium text-xs text-grayDark">For Family</p>
                  </div>
                  <div class="flex items-center gap-[4px]">
                    <Icon icon="solar:routing-3-bold" class="text-lg text-black" />

                    <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-black">2th floor</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div></div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <div class="flex w-full items-center justify-between">
                  <div class="flex flex-col gap-[4px]">
                    <p class="font-bold text-back text-sm leading-[20px]">VR Park</p>
                    <p class="font-medium text-xs text-grayDark">For Family</p>
                  </div>
                  <div class="flex items-center gap-[4px]">
                    <Icon icon="solar:routing-3-bold" class="text-lg text-black" />

                    <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-black">2th floor</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div></div>
                <Icon icon="solar:heart-bold" class="text-xl text-orange" />
              </div>
            </div>
            <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
              <div class="w-full mt-[4px] flex gap-[4px] flex-col">
                <div class="flex w-full items-center justify-between">
                  <div class="flex flex-col gap-[4px]">
                    <p class="font-bold text-back text-sm leading-[20px]">VR Park</p>
                    <p class="font-medium text-xs text-grayDark">For Family</p>
                  </div>
                  <div class="flex items-center gap-[4px]">
                    <Icon icon="solar:routing-3-bold" class="text-lg text-black" />

                    <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-black">2th floor</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {FavoritesFilters} from '@/enums/dashboard/favorites/favoritesFilters'
/* vue use head */
import { useHead } from '@vueuse/head'
export default {
  name: 'FavoritesTab',
  data() {
    return {
      FavoritesFilters: FavoritesFilters,
      favorites: true as boolean,
      filter: 'events' as string
    }
  },
  methods: {
    filterFavorites(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('data-filter')
      this.filter = targetFilter
    }
  },
  setup() {
    useHead({
      title: 'My Favorites - Galerie Harfa Mall',
      meta: [
        {
          name: 'description',
          content:
            'View your favorite events, news, shops, and sales on the Galerie Harfa Mall favorites page. Stay updated with the latest additions to your favorites list.'
        },
        {
          property: 'og:title',
          content: 'My Favorites - Galerie Harfa Mall'
        },
        {
          property: 'og:description',
          content:
            'View your favorite events, news, shops, and sales on the Galerie Harfa Mall favorites page. Stay updated with the latest additions to your favorites list.'
        },
        {
          property: 'og:image',
          content: 'image.jpg'
        }
      ]
    })
  }
}
</script>
