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
          <Icon icon="solar:shield-check-broken" class="text-lg text-black" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('set_new_password') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px]">
          {{ $t('try_to_create_a_new_password_that_you_will_remember') }}
        </p>
      </div>
    </div>

    <form class="flex flex-col gap-[8px] w-full max-w-[360px]">
      <div
        :class="!isPasswordTouched ? 'border-transparent' : isPasswordTouched && !nonvalidatePassword ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]">
        <div>
          <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input :type="passwordShow ? 'text' : 'password'" id="password" :placeholder="$t('password')"
            @input="handlePasswordInput" v-model="userData.password"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
        </div>
        <div @click="hideShowPassword" class="cursor-pointer">
          <Icon v-if="passwordShow" icon="mdi:eye-outline" class="text-lg text-black" />
          <Icon v-else icon="bx:hide" class="text-lg text-black" />
        </div>
      </div>
      <div
        :class="!isPasswordTouched ? 'border-transparent' : passwordMatched && !nonvalidatePassword ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]">
        <div>
          <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input :type="password_confirmationShow ? 'text' : 'password'" id="password_confirmation"
            :placeholder="$t('confirm_new_password')" @input="handlePasswordConfirmationInput"
            v-model="userData.password_confirmation"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
        </div>
        <div @click="hideShowPasswordConfirmation" class="cursor-pointer">
          <Icon v-if="password_confirmationShow" icon="mdi:eye-outline" class="text-lg text-black" />
          <Icon v-else icon="bx:hide" class="text-lg text-black" />
        </div>
      </div>

      <div class="flex flex-col gap-[8px]">
        <div class="flex items-center gap-[12px]">
          <div :class="passLength ? 'bg-green' : ''"
            class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center">
            <Icon v-if="!passLength" icon="jam:close" class="text-xs text-black" />
            <Icon v-else icon="gg:check" class="text-xs text-white" />
          </div>
          <p class="text-xs text-grayDark3">At least 8 characters</p>
        </div>
        <div class="flex items-center gap-[12px]">
          <div :class="hasUppercase && hasLowercase ? 'bg-green' : ''"
            class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center">
            <Icon v-if="hasUppercase && hasLowercase" icon="gg:check" class="text-xs text-white" />
            <Icon v-else icon="jam:close" class="text-xs text-black" />
          </div>
          <p class="text-xs text-grayDark3">Both uppercase and lowercase letters (optional)</p>
        </div>
        <div class="flex items-center gap-[12px]">
          <div :class="hasNumberOrSymbol ? 'bg-green' : ''"
            class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center">
            <Icon v-if="!hasNumberOrSymbol" icon="jam:close" class="text-xs text-black" />
            <Icon v-else icon="gg:check" class="text-xs text-white" />
          </div>
          <p class="text-xs text-grayDark3">At least one number or symbol (optional)</p>
        </div>
      </div>
      <div class="flex flex-col gap-[12px]">
        <button @click="handleSubmit" type="submit"
          class="bg-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
          {{ $t('apply_new_password') }}
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
  password: string,
  password_confirmation: string,
}

export default {
  name: 'setnew-password',
  components: {
    Contact_supportComponent
  },
  data() {
    return {
      isAlert: false as boolean,
      alertMessage: '' as string,

      userData: {
        password: '' as string,
        password_confirmation: '' as string,
      } as UserData,
      isPasswordTouched: false as boolean,
      isPassword_confirmationTouched: false as boolean,

      hasUppercase: false as boolean,
      hasLowercase: false as boolean,
      hasNumberOrSymbol: false as boolean,

      passwordShow: false as boolean,
      password_confirmationShow: false as boolean,

      contactSupportShow: false as boolean,

    }
  },
  methods: {
    openSupportModal() {
      this.contactSupportShow = true
    },
    closeSupportModal() {
      this.contactSupportShow = false
    },

    handlePasswordInput() {
      this.isPasswordTouched = true

      this.hasUppercase = /[A-Z]/.test(this.userData.password)
      this.hasLowercase = /[a-z]/.test(this.userData.password)
      this.hasNumberOrSymbol = /[0-9!@#$%^&*()]/.test(this.userData.password)
    },
    handlePasswordConfirmationInput() {
      console.log(this.userData.password)
    },
    hideShowPassword() {
      this.passwordShow = !this.passwordShow
    },
    hideShowPasswordConfirmation() {
      this.password_confirmationShow = !this.password_confirmationShow
    },
    handleSubmit(e) {
      e.preventDefault()
      this.isPasswordTouched = true
      this.isPassword_confirmationTouched = true

      if (!this.nonvalidatePassword && this.passwordMatched) {
        console.log('submit')
      } else {
        if (this.userData.password.length === 0 || this.userData.password_confirmation.length === 0) {
          this.userData.password_confirmation = ''

          this.$notify({
            title: this.$t('please_fill_all_field'),
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
        } else if (this.nonvalidatePassword) {
          this.userData.password_confirmation = ''
          this.$notify({
            title: this.$t('password_must_contain_at_least_8_characters'),
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
          this.userData.password_confirmation = ''

          this.$notify({
            title: this.$t('invalid_password_confirmation'),
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
        }
      }
    }
  },
  computed: {
    passLength() {
      const lengthRequirement = this.userData.password.length >= 8
      return lengthRequirement
    },
    nonvalidatePassword(): boolean {
      const lengthRequirement = this.passLength
      const hasUppercase = /[A-Z]/.test(this.userData.password)
      const hasLowercase = /[a-z]/.test(this.userData.password)
      const hasNumberOrSymbol = /[0-9!@#$%^&*()]/.test(this.userData.password)

      this.hasUppercase = hasUppercase
      this.hasLowercase = hasLowercase
      this.hasNumberOrSymbol = hasNumberOrSymbol

      return !lengthRequirement || !hasUppercase || !hasLowercase || !hasNumberOrSymbol
    },
    passwordMatched(): boolean {
      return this.userData.password === this.userData.password_confirmation
    },
    readyForSubmit(): boolean {
      return !this.nonvalidatePassword
    }
  },
}
</script>

<style>
.vue-notification-group {
  bottom: 10px !important;
  max-width: 360px;
  width: 100% !important;
}

.vue-notification-group span {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.vue-notification-wrapper {
  overflow: initial !important;
}
</style>
