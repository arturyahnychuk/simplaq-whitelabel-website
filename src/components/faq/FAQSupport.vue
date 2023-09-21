<template>
  <div class="w-full relative flex py-[16px] max-w-[1600px] mx-auto px-[25px] gap-[40px]">
    <div class="w-full mb-[24px]">
      <img class="w-full" src="@/assets/imgs/divider2.svg" alt="" />
      <div class="grid grid-cols-2 gap-[50px] pl-[92px] items-center pt-[24px]">
        <div class="flex flex-col max-w-[414px] gap-[40px]">
          <Icon icon="ph:chats-circle-light" class="text-xl text-black" />
          <div class="flex flex-col gap-[8px]">
            <h6 class="text-2xl font-bold text-black leading-[38px] tracking-[-0.4px]">{{ $t(`can't_find_what_you_need`) }}?</h6>
            <p class="font-normal text-grayDark text-base leading-[24px] tracking-[0.1px]">
              {{ $t('for_in-depth_questions_you_can_file_a_support_ticket_to_get_answered_personally_by_us') }}
            </p>
          </div>
          <button
          @click="openSupportModal"
            type="submit"
            class="bg-orange max-w-[232px] w-full h-[56px] rounded-[20px] text-white font-semibold text-sm leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('contact_support') }}
          </button>
          <div class="flex items-center gap-[12px]">
            <div class="cursor-pointer group bg-blueLight-300 w-[64px] h-[64px] rounded-full flex items-center justify-center">
              <img class="w-full max-w-[32px] transition-all" src="@/assets/imgs/twitter.svg" alt="" />
            </div>
            <div class="cursor-pointer group bg-pinkLight-300 w-[64px] h-[64px] rounded-full flex items-center justify-center">
              <img class="w-full max-w-[32px] transition-all" src="@/assets/imgs/instagram.svg" alt="" />
            </div>
            <div class="cursor-pointer group bg-blueLight-500 w-[64px] h-[64px] rounded-full flex items-center justify-center">
              <img class="w-full max-w-[32px] transition-all" src="@/assets/imgs/facebook.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="w-full">
          <img class="w-full max-w-[646px]" src="@/assets/imgs/subscribe_image.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <Contact_supportComponent @closeModal="closeSupportModal" v-if="contactSupportShow" />
</template>

<script lang="ts">
import Contact_supportComponent from '@/components/modals/contact_support/contact_supportComponent.vue'
export default {
  name: 'FAQ SUPPORT',
  components: {
    Contact_supportComponent
  },
  data() {
    return {
      contactSupportShow: false as boolean
    }
  },
  methods: {
    openSupportModal() {
      this.contactSupportShow = true
    },
    closeSupportModal() {
      this.contactSupportShow = false
    }
  }
}
</script>
