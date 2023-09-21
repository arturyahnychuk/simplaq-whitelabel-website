<template>
  <div
    class="header_notifications_wrapper absolute top-[calc(100%+8px)] z-[99] right-0 w-[383px] bg-white border border-gray rounded-[16px]  py-[20px] pb-[24px] drop-shadow-md"
  >
    <div class="w-full flex items-center justify-between pb-[16px] mb-[12px] border-b border-gray px-[20px]">
      <h6 class="text-black font-bold text-base leading-[24px]">{{ $t('notifications') }}</h6>
      <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
        <Icon icon="tabler:settings-2" class="text-lg text-black" />
      </div>
    </div>

    <HeaderNoNotifications v-if="!isNotification"  />
    <div v-else class="w-full">
      <div class="w-full flex items-center justify-between mb-[16px] px-[20px]">
        <p class="text-xs text-grayDark font-normal leading-[20px]">{{ $t('recent') }}</p>
        <a class="text-xs text-pink font-semibold leading-[20px] tracking-[-0.2px]" href="#">{{ $t('view_all') }}</a>
      </div>

      <div class="w-full flex flex-col gap-[12px] max-h-[calc(100vh-300px)] overflow-auto custom-scrollbar px-[20px]">

        <a href="#" class="w-full flex items-start justify-between notification message !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <Icon icon="tabler:message" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('support_sent_you_a_message') }}</p>
                <p class="text-grayDark font-normal leading-[20px] tracking-[-0.2px] text-xs">{{ $t('tap_to_see_the_message') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal leading-[20px] tracking-[-0.2px] text-xs">2 {{ $t('m_ago') }}</p>
        </a>

        <a href="#" class="w-full flex items-start justify-between notification feature !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <img src="@/assets/imgs/Placeholder.svg" class="w-[20px]" alt="">
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('new_services_available')! }}</p>
                <p class="text-grayDark font-normal leading-[20px] tracking-[-0.2px] text-xs">{{ $t('tap_to_see_the_message') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal leading-[20px] tracking-[-0.2px] text-xs">2 {{ $t('m_ago') }}</p>
        </a>

        <a href="#" class="w-full flex items-start justify-between notification feature !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <img src="@/assets/imgs/Placeholder.svg" class="w-[20px]" alt="">
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('let’s_try_the_feature_we_provide')! }}</p>
                <p class="text-grayDark font-normal leading-[20px] tracking-[-0.2px] text-xs">{{ $t('try_the_latest_service_from_simplaq') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal border-gray leading-[20px] tracking-[-0.2px] text-xs">2 {{ $t('m_ago') }}</p>
        </a>


        <a href="#" class="w-full flex items-start justify-between notification offer !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
                <Icon icon="ion:gift" class="text-lg text-orange" />
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('get')}} 20% {{ $t('discount_for_sturbacks') }}</p>
                <p class="text-orange font-semibold leading-[20px] tracking-[-0.2px] text-xs">{{ $t('click_to_go_to_the_offer') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal border-gray leading-[20px] tracking-[-0.2px] text-xs">12 {{ $t('m_ago') }}</p>
        </a>

        
        <a href="#" class="w-full flex items-start justify-between notification offer !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
                <Icon icon="ion:gift" class="text-lg text-orange" />
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('get')}} 45% {{ $t('discount_for_sturbacks') }}</p>
                <p class="text-orange font-semibold leading-[20px] tracking-[-0.2px] text-xs">{{ $t('click_to_go_to_the_offer') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal border-gray leading-[20px] tracking-[-0.2px] text-xs">12 {{ $t('hr_ago') }}</p>
        </a>

        <!--dell-->
         
        <a href="#" class="w-full flex items-start justify-between notification offer !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
                <Icon icon="ion:gift" class="text-lg text-orange" />
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('get')}} 45% {{ $t('discount_for_sturbacks') }}</p>
                <p class="text-orange font-semibold leading-[20px] tracking-[-0.2px] text-xs">{{ $t('click_to_go_to_the_offer') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal border-gray leading-[20px] tracking-[-0.2px] text-xs">12 {{ $t('hr_ago') }}</p>
        </a>
         
        <a href="#" class="w-full flex items-start justify-between notification offer !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
                <Icon icon="ion:gift" class="text-lg text-orange" />
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('get')}} 45% {{ $t('discount_for_sturbacks') }}</p>
                <p class="text-orange font-semibold leading-[20px] tracking-[-0.2px] text-xs">{{ $t('click_to_go_to_the_offer') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal border-gray leading-[20px] tracking-[-0.2px] text-xs">12 {{ $t('hr_ago') }}</p>
        </a>
         
        <a href="#" class="w-full flex items-start justify-between notification offer !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
                <Icon icon="ion:gift" class="text-lg text-orange" />
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('get')}} 45% {{ $t('discount_for_sturbacks') }}</p>
                <p class="text-orange font-semibold leading-[20px] tracking-[-0.2px] text-xs">{{ $t('click_to_go_to_the_offer') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal border-gray leading-[20px] tracking-[-0.2px] text-xs">12 {{ $t('hr_ago') }}</p>
        </a>
         
        <a href="#" class="w-full flex items-start justify-between notification offer !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
                <Icon icon="ion:gift" class="text-lg text-orange" />
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('get')}} 45% {{ $t('discount_for_sturbacks') }}</p>
                <p class="text-orange font-semibold leading-[20px] tracking-[-0.2px] text-xs">{{ $t('click_to_go_to_the_offer') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal border-gray leading-[20px] tracking-[-0.2px] text-xs">12 {{ $t('hr_ago') }}</p>
        </a>
         
        <a href="#" class="w-full flex items-start justify-between notification offer !border-gray">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
                <Icon icon="ion:gift" class="text-lg text-orange" />
            </div>
            <div class="flex flex-col gap-[4px]">
                <p class="text-black font-bold leading-[20px] text-sm capitaize">{{ $t('get')}} 45% {{ $t('discount_for_sturbacks') }}</p>
                <p class="text-orange font-semibold leading-[20px] tracking-[-0.2px] text-xs">{{ $t('click_to_go_to_the_offer') }}</p>
            </div>
          </div>
          <p class="text-grayDark font-normal border-gray leading-[20px] tracking-[-0.2px] text-xs">12 {{ $t('hr_ago') }}</p>
        </a>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderNoNotifications from '@/components/popups/notifications/HeaderNoNotifications.vue'
export default {
  name: 'HeaderNotifications',
  props: {
    isNotification: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    HeaderNoNotifications,
  }
}
</script>

<style>
    .notification:not(:last-of-type) {
        padding-bottom: 12px;
        border-bottom: 1px solid;
    }
</style>
