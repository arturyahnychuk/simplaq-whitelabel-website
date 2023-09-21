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

  <AuthSliderComponent>
    <div class="h-full w-full flex flex-col py-[40px] px-[15px] sm:px-[48px]">
      <div class="w-full">
        <router-link :to="{ name: $Routes.HOME }"
          class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />
        </router-link>
      </div>

      <div class="flex flex-col items-center gap-[24px] justify-center h-full">
        <div class="w-full flex flex-col gap-[24px] items-center justify-center">
          <div class="flex flex-col">
            <router-link to="/" class="flex max-w-[112px] w-full">
              <img src="@/assets/logo.svg" alt="" />
            </router-link>
          </div>
          <div class="flex flex-col items-center gap-[4px]">
            <h6 class="text-black font-bold text-xl">{{ $t('hello_again') }} 👋</h6>
            <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px]">{{ $t('login_welcome_text') }}
            </p>
          </div>
        </div>

        <form class="flex flex-col gap-[8px] w-full max-w-[360px]" action="#" method="POST">
          <div
            :class="!isEmailTouched ? 'border-transparent' : isEmailTouched && validateEmail ? 'border-green' : 'border-orange'"
            class="items-center gap-[12px] border-[1px] grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] bg-gray rounded-[16px]">
            <div>
              <Icon icon="tabler:mail" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[2px]">
              <label for="email" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('email') }}</label>
              <input @input="emailTouched" type="text" id="email" :placeholder="$t('enter_your_email')"
                v-model="userData.email"
                class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
            </div>
            <div>
              <Icon v-if="validateEmail" icon="bi:check" class="text-lg text-green" />
            </div>
          </div>

          <div
            :class="!isPasswordTouched ? 'border-transparent' : !validatePassword ? 'border-orange' : 'border-transparent'"
            class="border-[1px] items-center gap-[12px] grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] bg-gray rounded-[16px]">
            <div>
              <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[2px]">
              <label for="password" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('password') }}</label>
              <input :type="passwordShow ? 'text' : 'password'" id="password" :placeholder="$t('enter_your_password')"
                v-model="userData.password"
                class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
            </div>
            <div @click="hideShowPassword" class="cursor-pointer">
              <Icon v-if="passwordShow" icon="mdi:eye-outline" class="text-lg text-black" />
              <Icon v-else icon="bx:hide" class="text-lg text-black" />
            </div>
          </div>

          <div class="flex flex-col gap-[12px]">
            <RouterLink :to="{ name: $Routes.FORGOT_PASSWORD }"
              class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end">{{
                $t('forgot_password') }}?</RouterLink>
            <button type="submit" @click.prevent="handleSubmit"
              class="bg-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
              {{ $t('sign_in') }}
            </button>
          </div>
          <p
            class="text-grayDark max-w-[360px] font-normal mt-[15px] text-xs leading-[20px] tracking-[-0.2px] text-center">
            {{ $t('or_use_social_media') }}
          </p>

          <div class="flex flex-col gap-[8px]">
            <button
              class="bg-gray justify-center flex items-center gap-[8px] py-[16px] rounded-[16px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
              <Icon icon="flat-color-icons:google" class="text-xl text-black" />

              {{ $t('sign_in_with_google') }}
            </button>

            <button
              class="bg-gray justify-center flex items-center gap-[8px] py-[16px] rounded-[16px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
              <Icon icon="logos:facebook" class="text-xl text-white" />

              {{ $t('sign_in_with_facebook') }}
            </button>
          </div>

          <p class="text-center text-grayDark text-xs font-normal leading-[20px] tracking-[0.2px]">
            {{ $t('dont_have_registration_yet?') }}
            <a href="#" @click.prevent="termsAndConditions"
              class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end">{{
                $t('register_now') }}</a>
          </p>
        </form>
      </div>
    </div>
  </AuthSliderComponent>

  <TermsAndConditionsComponent :notificationsElement="false" @cancelTerms="cancelTerms" v-if="termsAndConditionsModal" />
</template>

<script lang="ts">
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth"

import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import AuthSliderComponent from '@/components/slider/AuthSliderComponent.vue'
import TermsAndConditionsComponent from '@/components/modals/terms&conditions/termsAndConditionsComponent.vue'

/* vue use head */
import { useHead } from '@vueuse/head'
interface UserData {
  email: string,
  password: string,
}
export default {
  name: 'Login',
  components: {
    AuthSliderComponent,
    TermsAndConditionsComponent,

    Swiper,
    SwiperSlide
  },
  data() {
    return {
      userData: {
        email: '',
        password: ''
      } as UserData,

      isEmailTouched: false as boolean,
      isPasswordTouched: false as boolean,

      passwordShow: false as boolean,
      termsAndConditionsModal: false as boolean
    }
  },
  computed: {
    validateEmail(): boolean {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailPattern.test(this.userData.email)
    },
    validatePassword(): boolean {
      const length = this.userData.password.length > 0

      return length
    }
  },
  methods: {
    termsAndConditions() {
      this.termsAndConditionsModal = true
    },
    cancelTerms() {
      this.termsAndConditionsModal = false
    },
    emailTouched() {
      this.isEmailTouched = true
    },
    handlePasswordInput() {
      this.isPasswordTouched = true
    },
    hideShowPassword() {
      this.passwordShow = !this.passwordShow
    },
    handleSubmit(e) {
      e.preventDefault()
      this.isEmailTouched = true
      this.isPasswordTouched = true

      if (this.userData.email.length === 0 || this.userData.password.length === 0) {
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
      } else if (!this.validateEmail) {
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
        // send http request to validate on back
        console.log('Submit')
        const auth = getAuth()
        signInWithEmailAndPassword(auth, this.userData.email, this.userData.password)
          .then((res) => {
            console.log("res => ", res.user)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  },
  setup() {
    useHead({
      title: 'Login - Galerie Harfa Mall',
      meta: [
        {
          name: 'description',
          content: 'Login to the Galerie Harfa Mall platform to access personalized features, view your rewards, manage receipts, and explore exclusive offers.'
        },
        {
          property: 'og:title',
          content: 'Galerie Harfa Mall - Login'
        },
        {
          property: 'og:description',
          content: 'Login to the Galerie Harfa Mall platform to access personalized features, view your rewards, manage receipts, and explore exclusive offers.'
        },
        {
          property: 'og:image',
          content: 'image.jpg'
        }
      ]
    });

    const onSwiper = swiper => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation]
    }
  }
}
</script>
