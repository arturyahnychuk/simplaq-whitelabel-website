<template>
  <HeaderComponent />
  <BreadcrumbComponent :pagesArr="pagesArr" />
    <div class="w-full max-w-[664px] mx-auto relative mt-[32px] mb-[100px]">
        <div class="w-full flex flex-col gap-[16px]">
            <div class="flex flex-col gap-[8px]">
                <h6 class="font-bold text-black leading-[28px] tracking-[-0.4px] text-lg">{{ $t('privacy_policy') }}</h6>
                <p class="font-medium text-grayDark4 text-xs leading-[20px] tracking-[-0.2px]">{{ $t('last_updated') }}: June 27, 2002</p>
            </div>

            <div class="flex flex-col gap-[16px] pb-[16px] border-b border-b-gray">
                <h6>{{ $t('overview') }}</h6>
                <p class="text-grayDark4 text-sm leading-[24px] tracking-[-0.1px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div class="flex flex-col gap-[16px] pb-[16px] border-b border-b-gray">
                <h6>{{ $t('our_privacy_statement') }}</h6>
                <p class="text-grayDark4 text-sm leading-[24px] tracking-[-0.1px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="flex flex-col gap-[16px] pb-[16px] border-b border-b-gray">
                <h6>{{ $t('our_privacy_statement') }}</h6>
                <p class="text-grayDark4 text-sm leading-[24px] tracking-[-0.1px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="flex flex-col gap-[16px] pb-[16px] border-b border-b-gray">
                <h6>{{ $t('our_privacy_statement') }}</h6>
                <p class="text-grayDark4 text-sm leading-[24px] tracking-[-0.1px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

        </div>
    </div>
  <FooterComponent/>
</template>

<script lang="ts">
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'

interface PagesArr {
  page: string
  routeName: string
}
export default {
  name: 'Privacy',
  components: {
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent
  },
  data() {
    return {
      pagesArr: [
        {
          page: this.$t('privacy_policy'),
          routeName: this.$Routes.PRIVACY
        }
      ] as PagesArr[]
    }
  }
}
</script>
