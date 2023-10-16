<template>
  <!-- Header -->
  <HeaderComponent />
  <!-- Hero Slider -->
  <HeroComponent />
  <div class="body-sliders">
    <!-- Upcoming Events-->
    <SliderComponentVue
      :controllers="true"
      :sectionTitle="$t('upcoming_events')"
      :routeName="$Routes.EVENTS"
      space-between="24"
      slides-per-view="4"
      :breakpoint="[
        {
          size: 1440,
          view: 4
        },
        {
          size: 1024,
          view: 3
        },
        {
          size: 768,
          view: 2
        },
        {
          size: 500,
          view: 1
        }
      ]"
    >
      <swiper-slide v-for="(item, index) in upcomingEventsData" :key="index">
        <a href="#" class="relative w-full flex flex-col shadow-sm group">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover group-hover:scale-[1.1] duration-500" :src="item.picture_link" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-[39px] h-[42px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px]">{{ eventsDDMMYY[index].day }}</p>
                  <p class="text-s font-medium text-grayDark">{{ eventsDDMMYY[index].month }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="min-w-[48px] min-h-[48px] w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full rounded-full" :src="item.picture_link" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black break-words">{{ item.title }}</p>
              </div>
              <div class="flex items-center gap-[8px] ml-2">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('free') }}</p>
                <div class="divider-dot w-[4px] h-[4px] rounded-full bg-orange"></div>
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px] min-w-max">
                  {{eventsDDMMYY[index].formattedTime}}
                </p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <p class="font-bold text-back text-sm leading-[20px]">
                {{ item.description.length <= 120 ? item.description : item.description.slice(0, 120) + ' ...' }}
              </p>
            </div>
          </div>
        </a>
      </swiper-slide>
    </SliderComponentVue>

    <!-- News -->
    <SliderComponentVue
      :controllers="true"
      :sectionTitle="$t('news')"
      :routeName="$Routes.NEWS"
      space-between="24"
      slides-per-view="4"
      :breakpoint="[
        {
          size: 1440,
          view: 4
        },
        {
          size: 1024,
          view: 3
        },
        {
          size: 768,
          view: 2
        },
        {
          size: 500,
          view: 1
        }
      ]"
    >
      <swiper-slide v-for="(item, index) in newsData" :key="index">
        <div class="relative w-full flex flex-col shadow-sm group">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" :src="item.title_picture" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="min-w-[48px] min-h-[48px] w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full rounded-full" :src="item.title_picture" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black break-words">{{ item.title }}</p>
              </div>
              <div class="flex items-center gap-[8px] ml-2">
                <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px] min-w-max">
                  {{ newsDDMMYY[index].formattedDate }}
                </p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <p class="font-bold text-back text-sm leading-[20px]">
                {{ item.article.length <= 120 ? item.article : item.article.slice(0, 120) + ' ...' }}
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </SliderComponentVue>

    <!-- Rewards -->
    <SliderComponentVue
      :controllers="true"
      :sectionTitle="$t('rewards')"
      :routeName="$Routes.REWARDS"
      space-between="24"
      slides-per-view="4"
      :breakpoint="[
        {
          size: 1440,
          view: 4
        },
        {
          size: 1024,
          view: 3
        },
        {
          size: 768,
          view: 2
        },
        {
          size: 500,
          view: 1
        }
      ]"
    >
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
          >
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
          >
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
          >
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
          >
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
          >
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
          >
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
          >
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
          >
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div
            class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]"
          >
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{ $t('off_discount_card') }}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </SliderComponentVue>

    <!-- CTA Component -->
    <CTAComponentVue />

    <!-- Sales -->
    <SliderComponentVue
      :controllers="true"
      :sectionTitle="$t('sales')"
      space-between="24"
      slides-per-view="6"
      :breakpoint="[
        {
          size: 1540,
          view: 6
        },
        {
          size: 1430,
          view: 4
        },
        {
          size: 1025,
          view: 3
        },
        {
          size: 800,
          view: 2
        }
      ]"
    >
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/shirt.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
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
                  <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                  <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </SliderComponentVue>

    <!-- Dine -->
    <SliderComponentVue
      :controllers="true"
      :sectionTitle="$t('dine')"
      space-between="24"
      slides-per-view="6"
      :breakpoint="[
        {
          size: 1440,
          view: 6
        },
        {
          size: 1440,
          view: 4
        },
        {
          size: 1025,
          view: 3
        },
        {
          size: 800,
          view: 2
        }
      ]"
    >
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div
            class="relative h-[160px] w-full sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
          >
            <img
              class="max-w-[76px] sm:max-w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
              src="@/assets/imgs/hamburger.png"
              alt=""
            />

            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center"></div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-black" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/mc.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">MC Donald's</p>
              </div>
            </div>
            <div class="w-full mt-[4px]">
              <div class="flex flex-col gap-[8px]">
                <p class="font-bold text-back text-sm leading-[20px]">Big mac menu</p>
                <div class="flex flex-col">
                  <p class="text-black font-bold text-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </SliderComponentVue>

    <!-- Mall -->
    <div v-if="groupedCompanies">
      <SliderComponentVue
        :controllers="true"
        :sectionTitle="$t('popular_mall_brands')"
        space-between="24"
        slides-per-view="5"
        :breakpoint="[
          {
            size: 1024,
            view: 4
          },
          {
            size: 768,
            view: 3
          },
          {
            size: 600,
            view: 2
          }
        ]"
      >
        <swiper-slide v-for="(slide, index) in groupedCompanies" :key="index">
          <div class="item w-full gap-[24px] grid grid-rows-2 col2-slider">
            <div v-for="(company, itemIndex) in slide" :key="itemIndex"
              class="relative w-full h-[150px] items-center justify-center border-[1px] border-graylight rounded-[16px] flex flex-col shadow-sm"
            >
              <img class="max-w-[80px] w-full object-cover" :src="company.logo_picture" alt="" />
            </div>
          </div>
        </swiper-slide>   
      </SliderComponentVue>
    </div>

    <!-- Entertain -->
    <SliderComponentVue
      :controllers="true"
      :sectionTitle="$t('entertain')"
      space-between="24"
      slides-per-view="4"
      :breakpoint="[
        {
          size: 1440,
          view: 4
        },
        {
          size: 1024,
          view: 3
        },
        {
          size: 768,
          view: 2
        },
        {
          size: 500,
          view: 1
        }
      ]"
    >
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item4.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div></div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
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
        </div>
      </swiper-slide>
    </SliderComponentVue>
  </div>

  <!-- Footer Component -->
  <FooterComponentVue />

  <turnonNotificationsComponent v-if="turnOnNotifications" @closeTurnonNotifications="closeTurnonNotifications" />

  <!-- Account Setup Modal -->
  <AccountSetupComponent v-if="accountSetup" @closeCompleteProfileComponent="closeCompleteProfileComponent" />
</template>

<script lang="ts">
import { useNewsStore, NewsData } from '@/stores/news/news'
import { useUpcomingEventsStore, UpcomingEventsData } from '@/stores/upcoming-events/upcoming-events'
import { useCompaniesStore, CompaniesData } from '@/stores/companies/companies'
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import SliderComponentVue from '@/components/slider/SliderComponent.vue'
import CTAComponentVue from '@/components/CTAComponent.vue'
import FooterComponentVue from '@/components/layouts/FooterComponent.vue'

import turnonNotificationsComponent from '@/components/modals/turnonNotificationsComponent.vue'

/* Account Setup Modal */
import AccountSetupComponent from '@/components/modals/account_setup/AccountSetupComponent.vue'
/* vue use head */
import { useHead } from '@vueuse/head'
export default {
  name: 'Home',
  data() {
    return {
      turnOnNotifications: false as boolean,
      accountSetup: false as boolean,
      newsData: null as NewsData['data'],
      upcomingEventsData: null as UpcomingEventsData['data'],
      companiesData: null as CompaniesData['data']
    }
  },
  components: {
    HeaderComponent,
    HeroComponent,
    SliderComponentVue,
    CTAComponentVue,
    FooterComponentVue,

    turnonNotificationsComponent,
    AccountSetupComponent,

    Swiper,
    SwiperSlide
  },

  async mounted() {
    await this.fetchAllSliderItems()
  },

  setup() {
    useHead({
      title: 'Galerie Harfa Mall Mobile App - Your Favorite Mall on Your Phone',
      meta: [
        {
          name: 'description',
          content:
            'Your favorite Mall now on your phone. Scan receipts and collect points. Find your favorite places and boutiques quickly and easily. Download on the app store and Google Play.'
        },
        {
          property: 'og:title',
          content: 'Galerie Harfa Mall Mobile App'
        },
        {
          property: 'og:description',
          content:
            'Your favorite Mall now on your phone. Scan receipts and collect points. Find your favorite places and boutiques quickly and easily.'
        },
        {
          property: 'og:image',
          content: 'image.jpg'
        }
      ]
    })
    return {
      modules: [Pagination, Navigation]
    }
  },

  methods: {
    async fetchNews() {
      const newsStore = useNewsStore()
      await newsStore.fetchNews()
      this.newsData = newsStore.data
    },
    async fetchUpcomingEvents() {
      const upcomingEventsStore = useUpcomingEventsStore()
      await upcomingEventsStore.fetchUpcomingEvents()
      this.upcomingEventsData = upcomingEventsStore.data
    },
    async fetchCompanies() {
      const companiesStore = useCompaniesStore()
      await companiesStore.fetchCompanies()
      this.companiesData = companiesStore.data
    },    
    async fetchAllSliderItems() {
      this.fetchNews()
      this.fetchUpcomingEvents()
      this.fetchCompanies()
    },
    formatDate(data: Record<string, any> | null, dateName: string) {
      if (!Array.isArray(data)) {
        return []
      }
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      if (dateName === 'publish_at') {
        return data.map(newsItem => {
          if (newsItem.publish_at) {
            const [datePart, timePart] = newsItem.publish_at.split(' ')
            const [year, month, day] = datePart.split('-')
            const formattedDate = `${day} ${monthNames[parseInt(month) - 1]} ${year}`

            const rawTime = timePart.substring(0, 5) // Extract the first 5 characters for time (HH:mm)
            const [hour, minute] = rawTime.split(':')
            const ampm = parseInt(hour) >= 12 ? 'PM' : 'AM'
            const formattedHour = (parseInt(hour) % 12).toString().padStart(2, '0') || '12'
            const formattedMinute = minute.padStart(2, '0')
            const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`

            return { formattedDate, day, month: monthNames[parseInt(month) - 1], year, formattedTime }
          }

          return { formattedDate: '', day: '', month: '', year: '', formattedTime: '' }
        })
      }
      if (dateName === 'start') {
        return data.map(newsItem => {
          if (newsItem.start) {
            const [datePart, timePart] = newsItem.start.split(' ')
            const [year, month, day] = datePart.split('-')
            const formattedDate = `${day} ${monthNames[parseInt(month) - 1]} ${year}`

            const rawTime = timePart.substring(0, 5) // Extract the first 5 characters for time (HH:mm)
            const [hour, minute] = rawTime.split(':')
            const ampm = parseInt(hour) >= 12 ? 'PM' : 'AM'
            const formattedHour = (parseInt(hour) % 12).toString().padStart(2, '0') || '12'
            const formattedMinute = minute.padStart(2, '0')
            const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`

            return { formattedDate, day, month: monthNames[parseInt(month) - 1], year, formattedTime }
          }
          return { formattedDate: '', day: '', month: '', year: '', formattedTime: '' }
        })
      }
    },
    closeTurnonNotifications() {
      this.turnOnNotifications = false
    },
    closeCompleteProfileComponent() {
      this.accountSetup = false
    }
  },
  computed: {
    newsDDMMYY(): string[] {
      return this.formatDate(this.newsData, 'publish_at')
    },
    eventsDDMMYY(): string[] {
      return this.formatDate(this.upcomingEventsData, 'start')
    },
    groupedCompanies() {
      const grouped = [];
      if(this.compainesData) {
        for (let i = 0; i < this.companiesData.length; i += 2) {
          if (i + 1 < this.companiesData.length) {
            grouped.push([this.companiesData[i], this.companiesData[i + 1]]);
          } else {
            grouped.push([this.companiesData[i]]);
          }
        }
          return grouped;
        }
      }
  }
}
</script>

<style></style>
