<template>
  <notifications #body="props" position="bottom center" :duration="5000" :max="2">
    <div class="flex items-center justify-between max-w-[360px] w-full bg-white rounded-[20px] p-[16px] shadow-md">
      <div class="flex items-center gap-[12px]">
        <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2 min-w-max" />
        <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px]">
          {{ props.item.title }}
        </p>
      </div>

      <Icon @click="props.close()" icon="majesticons:close" class="min-w-max text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
    </div>
  </notifications>

  <form class=" w-full max-w-[464px] pt-[20px] pb-[25px]">
    <div class="pl-[60px] flex flex-col gap-[8px]">
        <div
        :class="!isOldPasswordTouched ? 'border-transparent' : isOldPasswordTouched && oldPasswordNotCorrect ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]"
      >
        <div>
          <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            :type="oldPasswordShow ? 'text' : 'password'"
            id="old_password"
            :placeholder="$t('password')"
            v-model="userData.oldPassword"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div @click="hideShowOldPassword" class="cursor-pointer">
          <Icon v-if="oldPasswordShow" icon="mdi:eye-outline" class="text-lg text-black" />
          <Icon v-else icon="bx:hide" class="text-lg text-black" />
        </div>
      </div>

      <div
        :class="!isPasswordTouched ? 'border-transparent' : isPasswordTouched && !nonvalidatePassword ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]"
      >
        <div>
          <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            :type="passwordShow ? 'text' : 'password'"
            id="new_password"
            :placeholder="$t('new_password')"
            @input="handlePasswordInput"
            v-model="userData.password"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div @click="hideShowPassword" class="cursor-pointer">
          <Icon v-if="passwordShow" icon="mdi:eye-outline" class="text-lg text-black" />
          <Icon v-else icon="bx:hide" class="text-lg text-black" />
        </div>
      </div>
      <div
        :class="!isPasswordTouched ? 'border-transparent' : passwordMatched && !nonvalidatePassword ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]"
      >
        <div>
          <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            :type="password_confirmationShow ? 'text' : 'password'"
            id="password_confirmation"
            :placeholder="$t('confirm_new_password')"
            @input="handlePasswordConfirmationInput"
            v-model="userData.password_confirmation"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div @click="hideShowPasswordConfirmation" class="cursor-pointer">
          <Icon v-if="password_confirmationShow" icon="mdi:eye-outline" class="text-lg text-black" />
          <Icon v-else icon="bx:hide" class="text-lg text-black" />
        </div>
      </div>

      <div class="flex flex-col gap-[8px]">
        <div class="flex items-center gap-[12px]">
          <div
            :class="passLength? 'bg-green' : ''"
            class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center"
          >
            <Icon v-if="!passLength" icon="jam:close" class="text-xs text-black" />
            <Icon v-else icon="gg:check" class="text-xs text-white" />
          </div>
          <p class="text-xs text-grayDark3">At least 8 characters</p>
        </div>
        <div class="flex items-center gap-[12px]">
          <div
            :class="hasUppercase && hasLowercase ? 'bg-green' : ''"
            class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center"
          >
            <Icon v-if="hasUppercase && hasLowercase" icon="gg:check" class="text-xs text-white" />
            <Icon v-else icon="jam:close" class="text-xs text-black" />
          </div>
          <p class="text-xs text-grayDark3">Both uppercase and lowercase letters (optional)</p>
        </div>
        <div class="flex items-center gap-[12px]">
          <div :class="hasNumberOrSymbol ? 'bg-green' : ''" class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center">
            <Icon v-if="!hasNumberOrSymbol" icon="jam:close" class="text-xs text-black" />
            <Icon v-else icon="gg:check" class="text-xs text-white" />
          </div>
          <p class="text-xs text-grayDark3">At least one number or symbol (optional)</p>
        </div>
      </div>
    </div>

    <div class="w-full mt-[16px] pt-[16px] pb-[24px] pl-[60px] border-t-[1px] border-gray">
      <div class="flex gap-[8px] items-center">
        <button
          type="submit"
          @click.prevent="handleSubmit"
          class="py-[17px] px-[69px] border-[1px] border-graylight rounded-[20px] group hover:bg-orange transition-all cursor-pointer"
        >
          <p class="text-black text-sm font-semibold leading-[20px] tracking-[-0.2px] group-hover:text-white transition-all">
            {{ $t('save') }}
          </p>
        </button>

        <button
          type="button"
          @click="cancelBtn"
          class="py-[17px] px-[69px] border-[1px] border-graylight rounded-[20px] group hover:bg-pink transition-all cursor-pointer"
        >
          <p class="text-black text-sm font-semibold leading-[20px] tracking-[-0.2px] group-hover:text-white transition-all">
            {{ $t('cancel') }}
          </p>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Contact_supportComponent from '@/components/modals/contact_support/contact_supportComponent.vue'
interface UserData {
  oldPassword: string,
  password: string,
  password_confirmation: string,
}
export default {
  name: 'setnew-password',
  data() {
    return {
      isAlert: false as boolean,
      alertMessage: '' as string,

      userData: {
        oldPassword: '',
        password: '',
        password_confirmation: ''
      } as UserData,
      isOldPasswordTouched: false as boolean,
      isPasswordTouched: false as boolean,
      isPassword_confirmationTouched: false as boolean,

      hasUppercase: false as boolean,
      hasLowercase: false as boolean,
      hasNumberOrSymbol: false as boolean,

      passwordShow: false as boolean,
      password_confirmationShow: false as boolean,
      oldPasswordShow: false as boolean,

    }
  },
  emits: ['cancelBtn'],
  components: {
    Contact_supportComponent
  },

  computed: {
    oldPasswordNotCorrect(): boolean {
      return true
        // check from database if password which user input in old password field is correct
    },
    passLength(): boolean {
      const lengthRequirement = this.userData.password.length >= 8
      return lengthRequirement
    },
    nonvalidatePassword(): boolean {
      const lengthRequirement = this.passLength;
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
  methods: {
    cancelBtn() {
      this.$emit('cancelBtn')
    },
    openSupportModal() {
      this.contactSupportShow = true
    },
    closeSupportModal() {
      this.contactSupportShow = false
    },

    handlePasswordInput() {
      this.isPasswordTouched = true
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
    hideShowOldPassword() {
        this.oldPasswordShow = !this.oldPasswordShow
    },
    handleSubmit(e) {
      e.preventDefault()
      this.isPasswordTouched = true
      this.isPassword_confirmationTouched = true

      if (!this.nonvalidatePassword && this.passwordMatched) {
        console.log('submit')
      } else {
        if (this.userData.password.length === 0 || this.userData.password_confirmation.length === 0 || this.userData.oldPassword.length === 0) {
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
            title: this.$t('password_must_contain_at_least_8_characters_both_uppercase_and_lowercase_letters_and_at_lease_one_number_or_symbol'),
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
  }
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

/* .vue-notification-group span .vue-notification-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
} */
</style>
