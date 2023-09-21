<template>
  <div class="w-full py-[24px] px-[20px] shadow-lg rounded-[24px] border border-gray">
    <div class="w-full flex flex-col gap-[12px]">
      <h6 class="text-xs text-grayDark4 font-normal leading-[20px] tracking-[0.2px]">{{ $t('category') }}</h6>
      <div class="flex flex-col gap-[16px] w-full">
        <a
          @click.prevent="handleFAQTab"
          :id="faqTabs.GENERAL"
          href="#"
          :class="FAQTab === faqTabs.GENERAL ? 'active' : ''"
          class="FAQ-TABS w-full flex px-[8px] items-center gap-[12px]"
        >
          <div
            class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
          >
            <Icon icon="solar:home-2-outline" class="text-xl text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px]">{{ $t('general') }}</p>
        </a>
        <a
          @click.prevent="handleFAQTab"
          :id="faqTabs.APP_GUIDE"
          href="#"
          :class="FAQTab === faqTabs.APP_GUIDE ? 'active' : ''"
          class="FAQ-TABS w-full flex px-[8px] items-center gap-[12px]"
        >
          <div
            class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
          >
            <Icon icon="pepicons-pencil:smartphone-cutout" class="text-xl text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px]">{{ $t('app_guide') }}</p>
        </a>
        <a
          @click.prevent="handleFAQTab"
          :id="faqTabs.ACCOUNT"
          href="#"
          :class="FAQTab === faqTabs.ACCOUNT ? 'active' : ''"
          class="FAQ-TABS w-full flex px-[8px] items-center gap-[12px]"
        >
          <div
            class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
          >
            <Icon icon="fluent:person-16-regular" class="text-xl text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px]">{{ $t('account') }}</p>
        </a>
        <a
          @click.prevent="handleFAQTab"
          :id="faqTabs.LOYALTY"
          href="#"
          :class="FAQTab === faqTabs.LOYALTY ? 'active' : ''"
          class="FAQ-TABS w-full flex px-[8px] items-center gap-[12px]"
        >
          <div
            class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
          >
            <Icon icon="fluent:gift-16-regular" class="text-xl text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px]">{{ $t('loyalty') }}</p>
        </a>
        <a
          @click.prevent="handleFAQTab"
          :id="faqTabs.RECEIPTS"
          href="#"
          :class="FAQTab === faqTabs.RECEIPTS ? 'active' : ''"
          class="FAQ-TABS w-full flex px-[8px] items-center gap-[12px]"
        >
          <div
            class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
          >
            <Icon icon="ph:receipt-thin" class="text-xl text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px]">{{ $t('receipts') }}</p>
        </a>
        <a
          @click.prevent="handleFAQTab"
          :id="faqTabs.REWARDS"
          href="#"
          :class="FAQTab === faqTabs.REWARDS ? 'active' : ''"
          class="FAQ-TABS w-full flex px-[8px] items-center gap-[12px]"
        >
          <div
            class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
          >
            <Icon icon="solar:medal-star-linear" class="text-xl text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px]">{{ $t('rewards') }}</p>
        </a>
      </div>
      <img class="w-full mt-[28px]" src="@/assets/imgs/DividerUp.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { FaqTabs } from '@/enums/faq/faqTabs'
export default {
  name: 'FAQSidebar',
  data() {
    return {
      faqTabs: FaqTabs,
      FAQTab: FaqTabs.GENERAL // default
    }
  },
  mounted() {
    if (this.FAQTab) {
      this.$emit('handleFAQTab', this.FAQTab)
    }
  },
  methods: {
    handleFAQTab(e: Event) {
      let id = e.target as Element
      this.FAQTab = id.closest('.FAQ-TABS')?.id
      if (this.FAQTab) {
        this.$emit('handleFAQTab', this.FAQTab)
      }
    }
  }
}
</script>

<style>
.FAQ-TABS.active .icon {
  background: theme('colors.yellowLight');
}

.FAQ-TABS.active .icon svg {
  color: theme('colors.orange');
}
</style>
