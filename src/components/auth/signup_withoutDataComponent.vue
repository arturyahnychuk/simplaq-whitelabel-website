<template>
  <notifications #body="props" position="bottom left" :duration="5000" :max="4">
    <div class="flex items-center justify-between max-w-[360px] w-full bg-white rounded-[20px] p-[16px] drop-shadow-md">
      <div class="flex items-center gap-[12px]">
        <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
        <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px]">
          {{ props.item.title }}
        </p>
      </div>

      <Icon @click="props.close()" icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
    </div>
  </notifications>

  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('create_an_account') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px]">{{ $t('signup_welcome_text') }}</p>
      </div>
    </div>

    <form class="flex flex-col gap-[8px] w-full max-w-[360px]">
      <div
        :class="!isNameTouched ? 'border-transparent' : isNameTouched && validateName ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid border-[1px] grid-cols-[20px,auto,20px] px-[20px] bg-gray rounded-[16px]"
      >
        <div>
          <Icon icon="solar:shield-user-outline" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            @input="nameTouched"
            type="text"
            id="name"
            :placeholder="$t('name')"
            v-model="userData.name"
            maxlength="50"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div>
          <Icon v-if="validateName" icon="bi:check" class="text-lg text-green" />
        </div>
      </div>

      <div
        :class="!isSurnameTouched ? 'border-transparent' : isSurnameTouched && validateSurname ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid border-[1px] grid-cols-[20px,auto,20px] px-[20px] bg-gray rounded-[16px]"
      >
        <div>
          <Icon icon="solar:shield-user-outline" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            @input="surnameTouched"
            type="text"
            id="surname"
            :placeholder="$t('surname')"
            v-model="userData.surname"
            maxlength="50"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div>
          <Icon v-if="validateSurname" icon="bi:check" class="text-lg text-green" />
        </div>
      </div>

      <div
        :class="!isEmailTouched ? 'border-transparent' : isEmailTouched && validateEmail ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]"
      >
        <div>
          <Icon icon="tabler:mail" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            @input="emailTouched"
            type="text"
            id="email"
            :placeholder="$t('email')"
            v-model="userData.email"
            maxlength="100"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div>
          <Icon v-if="validateEmail" icon="bi:check" class="text-lg text-green" />
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
            id="password"
            :placeholder="$t('password')"
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
      <div class="flex flex-col gap-[8px]">
        <div class="flex items-center gap-[12px]">
          <div :class="passLength ? 'bg-green' : ''" class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center">
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
      <div class="flex flex-col gap-[12px]">
        <button
          @click="handleSubmit"
          type="submit"
          :class="readyForSubmit ? 'bg-orange text-white cursor-pointer' : 'bg-gray text-grayDark3'"
          class="py-[16px] rounded-[16px] text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
        >
          {{ $t('sign_up') }}
        </button>
      </div>

      <p class="text-center text-grayDark text-xs mt-[60px] font-normal leading-[20px] tracking-[0.2px]">
        {{ $t('already_a_member?') }}
        <router-link
          :to="{ name: $Routes.LOGIN }"
          class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end"
          >{{ $t('login') }}</router-link
        >
      </p>
    </form>
  </div>
</template>

<script lang="ts">

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import axios from 'axios'

interface UserData {
  name: string
  surname: string
  email: string
  password: string
}
export default {
  name: 'signup-01step',
  data() {
    return {
      userData: {
        name: '',
        surname: '',
        email: '',
        password: ''
      } as UserData,

      isNameTouched: false as boolean,
      isSurnameTouched: false as boolean,
      isEmailTouched: false as boolean,
      isPasswordTouched: false as boolean,

      hasUppercase: false as boolean,
      hasLowercase: false as boolean,
      hasNumberOrSymbol: false as boolean,

      passwordShow: false as boolean
    }
  },

  computed: {
    validateName(): boolean {
      const trimmedName = this.userData.name.trim() // trim() removes leading and trailing whitespace characters from a string.
      return trimmedName.length > 0
    },
    validateSurname(): boolean {
      const trimmedSurname = this.userData.surname.trim() // trim() removes leading and trailing whitespace characters from a string.
      return trimmedSurname.length > 0
    },
    validateEmail(): boolean {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailPattern.test(this.userData.email)
    },
    passLength(): boolean {
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
    readyForSubmit(): boolean {
      return this.validateName && this.validateSurname && this.validateEmail && !this.nonvalidatePassword
    }
  },
  methods: {
    nameTouched() {
      this.isNameTouched = true
    },
    surnameTouched() {
      this.isSurnameTouched = true
    },
    emailTouched() {
      this.isEmailTouched = true
    },
    handlePasswordInput() {
      this.isPasswordTouched = true

      this.hasUppercase = /[A-Z]/.test(this.userData.password)
      this.hasLowercase = /[a-z]/.test(this.userData.password)
      this.hasNumberOrSymbol = /[0-9!@#$%^&*()]/.test(this.userData.password)
    },
    hideShowPassword() {
      this.passwordShow = !this.passwordShow
    },
    handleSubmit(e) {
      e.preventDefault()
      this.isNameTouched = true
      this.isSurnameTouched = true
      this.isEmailTouched = true
      this.isPasswordTouched = true

      if (
        this.userData.name.length === 0 ||
        this.userData.surname.length === 0 ||
        this.userData.email.length === 0 ||
        this.userData.password.length === 0
      ) {
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
      } else {
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
        }

        if (!this.passLength) {
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
        }

        if (!this.hasLowercase || !this.hasUppercase) {
          this.$notify({
            title: this.$t('password_must_contain_both_uppercase_&_lowercase_letters'),
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

        if (!this.hasNumberOrSymbol) {
          this.$notify({
            title: this.$t('password_must_contain_at_least_one_number_or_symbol'),
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

      if (this.readyForSubmit) {
        const auth = getAuth()
        const email = this.userData.email
        const password = this.userData.password        
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {            
            // Registeration successful
            const userData = {
              email: userCredential.user.email,
              name: this.userData.name,
              surname: this.userData.surname,
              token: userCredential.user.getIdToken()
            }
            console.log('userData => ', userData)
            axios.post('/api/web-app/register', userData)
              .then((response) => {
                console.log(response)
              })
              .catch((error) => console.log(error))
            this.$emit('emailVerification')
          })
          .catch((error) => {
            console.log('Registeration error: ', error)
          })
        
      }
    }
  }
}
</script>
