<template>
  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col">
        <div class="flex max-w-[136px] w-full">
          <img src="@/assets/imgs/profilecreation.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('please_verify_your_email') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px] text-center">{{ $t('verify_email_text') }}</p>
        <p class="text-pink text-sm font-semibold leading-[20px] tracking-[-0.2px]">{{ getCurrentEmail }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-[8px] w-full max-w-[360px]">
      <div class="flex flex-col gap-[8px]">
        <button
          class="bg-transparent border-[1px] border-graylight py-[16px] rounded-[16px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
        >
          {{ $t('lets_start') }}
        </button>
        <button
          @click="resendEmail"
          class="bg-orange border-[1px] border-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
        >
          {{ $t('resend_email') }}
        </button>
      </div>

      <div
        class="flex gap-[5px] justify-center items-center text-center text-grayDark text-xs font-normal mt-[60px] leading-[20px] tracking-[0.2px]"
      >
        {{ $t('need_help?') }}
        <div @click="openSupportModal" class="text-pink font-semibold text-xs leading-[20px] tracking-[-0.2px] text-end cursor-pointer">
          {{ $t('contact_support') }}
        </div>
      </div>
    </div>
  </div>

  <Contact_supportComponent @closeModal="closeSupportModal" v-if="contactSupportShow" />
</template>

<script lang="ts">
import { getAuth, sendEmailVerification } from "firebase/auth"
import Contact_supportComponent from '@/components/modals/contact_support/contact_supportComponent.vue'

export default {
  name: 'verifyEmail',
  data() {
    return {      
      contactSupportShow: false as boolean,
    }
  },
  components: {
    Contact_supportComponent
  },
  computed: {
    getCurrentEmail() {
      const auth = getAuth()
      return auth.currentUser.email
    }
  },
  methods: {
    openSupportModal() {
      this.contactSupportShow = true
    },
    closeSupportModal() {
      this.contactSupportShow = false
    },
    resendEmail() {
      const auth = getAuth()
      sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          this.$emit('signUpWithPhone')
        })
        .catch((error) => {
          console.log(error)
        })
      
    }
  }
}
</script>
