<template>
  <HeaderComponent />
  <BreadcrumbComponent :currentPage="$t('floorplan_of_the_mall')"/>
  <div class="w-full relative max-w-[1600px] px-[25px] mx-auto mt-[32px] mb-[100px]">
    <h6 class="text-2xl font-bold leading-[38px] tracking-[-0.4px] text-black">{{ $t('floorplan') }}</h6>
    <div class="mt-[20px] w-full flex flex-wrap gap-[8px]">
        <div class="flex items-center gap-[8px] pl-[2px] pt-[2px] pb-[2px] pr-[20px] rounded-full bg-gray">
            <div class="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
                <Icon icon="solar:bag-4-bold" class="text-md text-blue" />
            </div>
            <p class="font-bold text-black leading-[20px] text-sm">{{ $t('shop') }}</p>
        </div>
        <div class="flex items-center gap-[8px] pl-[2px] pt-[2px] pb-[2px] pr-[20px] rounded-full bg-gray">
            <div class="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
                <Icon icon="fluent:vehicle-car-28-filled" class="text-md text-red" />
            </div>
            <p class="font-bold text-black leading-[20px] text-sm">{{ $t('amenities') }}</p>
        </div>
        <div class="flex items-center gap-[8px] pl-[2px] pt-[2px] pb-[2px] pr-[20px] rounded-full bg-gray">
            <div class="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
                <Icon icon="bxs:dish" class="text-md text-green" />
            </div>
            <p class="font-bold text-black leading-[20px] text-sm">{{ $t('dine') }}</p>
        </div>
        <div class="flex items-center gap-[8px] pl-[2px] pt-[2px] pb-[2px] pr-[20px] rounded-full bg-gray">
            <div class="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
                <Icon icon="solar:ticket-bold" class="text-md text-yellow" />
            </div>
            <p class="font-bold text-black leading-[20px] text-sm">{{ $t('entertain') }}</p>
        </div>
        <div class="flex items-center gap-[8px] pl-[2px] pt-[2px] pb-[2px] pr-[20px] rounded-full bg-gray">
            <div class="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
                <Icon icon="mdi:ticket" class="text-md text-purple" />
            </div>
            <p class="font-bold text-black leading-[20px] text-sm">{{ $t('services') }}</p>
        </div>
    </div>

    <div class="w-full relative mt-[32px]">
        <img class="w-full" src="@/assets/imgs/map2.svg" alt="map">
    </div>
  </div>
  <SubscribeComponent />
  <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'

export default {
  name: 'Directory',
  components: {
    HeaderComponent,
    BreadcrumbComponent,
    SubscribeComponent,
    FooterComponent,
  },
}
</script>
