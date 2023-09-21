<template>
  <notifications #body="props" position="bottom center" :duration="5000" :max="2">
    <div class="flex items-center justify-between max-w-[360px] w-full bg-white rounded-[20px] p-[16px] drop-shadow-md">
      <div class="flex items-center gap-[12px]">
        <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
        <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px]">
          {{ props.item.title }}
        </p>
      </div>

      <Icon @click="props.close()" icon="majesticons:close"
        class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
    </div>
  </notifications>

  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col">
        <div class="flex w-[72px] h-[72px] rounded-full items-center justify-center bg-gray">
          <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('forgot_password') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px]">
          {{ $t('enter_email_adress_that_you_used_when_registering') }}
        </p>
      </div>
    </div>

    <form class="flex flex-col gap-[8px] w-full max-w-[360px]" action="#" method="POST">
      <div
        :class="!isEmailTouched ? 'border-transparent' : isEmailTouched && validateEmail ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]">
        <div>
          <Icon icon="tabler:mail" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input @input="emailTouched" type="text" id="email" :placeholder="$t('email')" v-model="userData.email"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
        </div>
        <div>
          <Icon v-if="validateEmail" icon="bi:check" class="text-lg text-green" />
        </div>
      </div>

      <div class="flex flex-col gap-[12px]">
        <button @click="handleSubmit" type="submit"
          class="bg-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
          {{ $t('send_mail') }}
        </button>
      </div>

      <div
        class="flex gap-[5px] justify-center items-center text-center text-grayDark text-xs font-normal mt-[60px] leading-[20px] tracking-[0.2px]">
        {{ $t('need_help?') }}
        <div @click="openSupportModal"
          class="text-pink font-semibold text-xs leading-[20px] tracking-[-0.2px] text-end cursor-pointer">{{
            $t('contact_support') }}</div>
      </div>
    </form>
  </div>

  <Contact_supportComponent @closeModal="closeSupportModal" v-if="contactSupportShow" />
</template>

<script lang="ts">
import Contact_supportComponent from '@/components/modals/contact_support/contact_supportComponent.vue'

interface UserData {
  email: string;
}

export default {
  name: 'Forgot_password',
  components: {
    Contact_supportComponent
  },
  data() {
    return {
      userData: {
        email: '' as string,
      } as UserData,
      isEmailTouched: false as boolean,
      contactSupportShow: false as boolean,
    }
  },
  methods: {
    emailTouched() {
      this.isEmailTouched = true
    },

    openSupportModal() {
      this.contactSupportShow = true
    },
    closeSupportModal() {
      this.contactSupportShow = false
    },

    handleSubmit(e: Event) {
      e.preventDefault()
      this.isEmailTouched = true

      if (!this.validateEmail) {
        this.$notify({
          title: this.$t('please_enter_valid_email'),
          component: {
            template: `
    <div class="flex items-center gap-[12px]">
      <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
      <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px]">{{$t('invalid_password_confirmation')}}</p>
    </div>
    <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
  `
          }
        })
      } else {
        console.log('submit')
      }
    }
  },
  computed: {
    validateEmail(): boolean {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailPattern.test(this.userData.email)
    },
    readyForSubmit(): boolean {
      return this.validateEmail
    }
  },
}
</script>
