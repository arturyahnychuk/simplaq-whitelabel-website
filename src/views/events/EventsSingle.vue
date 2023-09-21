<template>
  <HeaderComponent />
  <BreadcrumbComponent :pagesArr="pagesArr" currentPage="Mass shop sale" />
  <SingleViewComponent>
    <template #head>
      <h6 class="font-bold text-black text-xl">Mass shop sale</h6>

      <div class="w-full flex items-center justify-between my-[16px]">
        <div class="flex items-center gap-[17px]">
          <div class="bg-gray rounded-[10px] px-[16px] py-[12px] flex items-center justify-center flex-col">
            <p class="text-black font-bold text-base leading-[24px]">30</p>
            <p class="text-xs font-semibold text-grayDark4 leading-[16px] tracking-[-0.1px]">June</p>
          </div>
          <div class="flex gap-[80px]">
            <div class="flex flex-col gap-[8px]">
              <p class="text-xs font-medium text-grayDark4 leading-[150%] tracking-[-0.1px]">{{ $t('time') }}</p>
              <p class="text-black font-bold text-base leading-[24px]">10:00 PM</p>
            </div>
            <div class="flex flex-col gap-[8px]">
              <p class="text-xs font-medium text-grayDark4 leading-[150%] tracking-[-0.1px]">{{ $t('price') }}</p>
              <p class="text-black font-bold text-base leading-[24px]">Free</p>
            </div>
          </div>
        </div>
        <div class="bg-gray rounded-full flex items-center justify-center w-[48px] h-[48px]">
          <Icon icon="solar:heart-outline" class="text-lg text-black" />
        </div>
      </div>
    </template>

    <template #hero>
      <div class="relative w-full">
        <img class="w-full rounded-[16px] max-h-[318px] object-cover object-top" src="@/assets/imgs/cover.jpg" alt="" />
      </div>

      <div class="w-full py-[16px] border-b-[1px] border-t-[1px] border-gray-light-500 flex items-center justify-between">
        <div class="flex items-center gap-[12px]">
          <div class="w-[48px] h-[48px] bg-gray rounded-full flex items-center justify-center">
            <img class="w-full max-w-[48px]" src="@/assets/imgs/dines.svg" alt="" />
          </div>
          <div class="flex flex-col gap-[4px">
            <p class="text-sm text-dark font-bold leading-[20px]">Sturbucks</p>
            <p class="text-xs font-grayDark leading-[20px] tracking-[-0.2px] font-medium">Coffe</p>
          </div>
        </div>
        <div class="px-[52px] py-[14px] rounded-[16px] border-[1px] border-orange">
          <p class="text-pink font-semibold text-sm leading-[20px] tracking-[-0.2px]">{{ $t('follow') }}</p>
        </div>
      </div>
    </template>

    <template #body>
      <Accordion2Component :title="$t('terms_conditions')">
        <p class="text-xs font-normal text-grayDark leading-[20px] tracking-[0.2px]">
          Lorem ipsum dolor sit amet, aliquam ridiculus id vehicula, amet at neque tellus vestibulum, ut imperdiet congue erat tincidunt non
          nulla, repudiandae pellentesque, dictum non volutpat magnis pellentesque nulla.
        </p>
      </Accordion2Component>

      <Accordion2Component :title="$t('terms_conditions')">
        <p class="text-xs font-normal text-grayDark leading-[20px] tracking-[0.2px]">
          Lorem ipsum dolor sit amet, aliquam ridiculus id vehicula, amet at neque tellus vestibulum, ut imperdiet congue erat tincidunt non
          nulla, repudiandae pellentesque, dictum non volutpat magnis pellentesque nulla.
        </p>
      </Accordion2Component>

      <div class="flex flex-col gap-[12px] mt-[16px]">
        <div class="flex w-full items-center justify-between pb-[12px] border-b-[1px] border-gray-light-500">
          <h6 class="text-base text-dark font-bold leading-[24px]">{{ $t('did_you_find_this_item_useful') }}</h6>
          <div class="flex items-center gap-[12px]">
            <Icon icon="iconamoon:like-fill" class="cursor-pointer text-lg text-orange" />
            <Icon icon="iconamoon:dislike-fill" class="cursor-pointer text-lg text-graylight" />
          </div>
        </div>
        <div class="w-full grid grid-cols-2 gap-[12px]">
          <div class="bg-gray p-[12px] bg-gray rounded-[16px] flex items-center justify-center gap-[8px] cursor-pointer">
            <img class="w-full max-w-[24px]" src="@/assets/imgs/twitter.svg" alt="" />
            <p class="text-sm text-black font-semibold leading-[20px] tracking-[-0.2px]">{{ $t('share_in_twitter') }}</p>
          </div>
          <div class="bg-gray p-[12px] bg-gray rounded-[16px] flex items-center justify-center gap-[8px] cursor-pointer">
            <img class="w-full max-w-[24px]" src="@/assets/imgs/facebook.svg" alt="" />
            <p class="text-sm text-black font-semibold leading-[20px] tracking-[-0.2px]">{{ $t('share_in_facebook') }}</p>
          </div>
        </div>
      </div>
    </template>

    <template #suggestions>
      <div class="flex flex-col w-full">
        <h6 class="font-bold text-black text-xl mb-[24px]">{{ $t('you_may_also_like') }}</h6>

        <div class="w-full grid grid-cols-1 xs:grid-cols-2 gap-[16px]">
          <RouterLink :to="{ name: $Routes.NEWS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item2.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div></div>
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
                  <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: $Routes.NEWS_SINGLE, params: { id: 1 } }" class="relative w-full flex flex-col shadow-sm">
            <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/imgs/item2.png" alt="" />
              <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                <div></div>
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
                  <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </template>
  </SingleViewComponent>

  <SubscribeComponent />
  <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'
import SingleViewComponent from '@/components/SingleViewComponent.vue'
import Accordion2Component from '@/components/accordion/Accordion2Component.vue'

interface PagesArr {
  page: string
  routeName: string
}

export default {
  name: 'Events',
  data() {
    return {
      pagesArr: [
        {
          page: this.$t('events'),
          routeName: this.$Routes.EVENTS
        }
      ] as PagesArr[]
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SubscribeComponent,
    SingleViewComponent,
    Accordion2Component
  }
}
</script>
