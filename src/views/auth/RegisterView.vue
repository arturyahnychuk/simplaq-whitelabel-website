<template>
  <AuthSliderComponent>
    <div class="h-full w-full flex flex-col py-[40px] px-[15px] sm:px-[48px]">
      <div class="w-full">
        <router-link
          v-if="step === 1"
          :to="{ name: $Routes.LOGIN }"
          class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center"
        >
          <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />

        </router-link>

        <div v-if="step === 2" @click="step = 1" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />

        </div>

        <div v-if="step === 3" @click="step = 2" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />

        </div>

        <div v-if="step === 4" @click="step = 3" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />

        </div>

        <div v-if="step === 5" @click="step = 4" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />

        </div>

        <div v-if="step === 6" @click="step = 5" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />

        </div>
      </div>

      <SignUp01StepComponent v-if="step === 1" @signupWithEmail="signUpWithEmail" />
      <SignUpWithoutDataComponent v-if="step === 2" @emailVerification="emailVerification" />
      <VerifyEmailComponent v-if="step === 3" @signUpWithPhone="signUpWithPhone" />
      <SignupPhoneComponent v-if="step === 4" />
      <VerificationcodeComponent v-if="step === 5" />
      <SuccessfulsendingComponent v-if="step === 6" />
    </div>
  </AuthSliderComponent>
</template>

<script lang="ts">
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import AuthSliderComponent from '@/components/slider/AuthSliderComponent.vue'

import SignUp01StepComponent from '@/components/auth/signup_01stepComponent.vue'
import SignUpWithoutDataComponent from '@/components/auth/signup_withoutDataComponent.vue'
import VerifyEmailComponent from '@/components/auth/verifyEmailComponent.vue'
import SignupPhoneComponent from '@/components/auth/signup_phoneComponent.vue'
import VerificationcodeComponent from '@/components/auth/verificationcodeComponent.vue'
import SuccessfulsendingComponent from '@/components/auth/successful_sendingComponent.vue'

/* vue use head */
import { useHead } from '@vueuse/head'

export default {
  name: 'Register',
  data() {
    return {
      step: 1 as number
    }
  },
  components: {
    AuthSliderComponent,
    /* Sign Up Steps */
    SignUp01StepComponent,
    SignUpWithoutDataComponent,
    VerifyEmailComponent,
    SignupPhoneComponent,
    VerificationcodeComponent,
    SuccessfulsendingComponent,

    Swiper,
    SwiperSlide
  },
  methods: {
    signUpWithEmail() {
      this.step = 2
    },
    emailVerification() {
      this.step = 3
    },
    signUpWithPhone() {
      this.step = 4
    }
  },
  setup() {
    useHead({
      title: 'Registration - Galerie Harfa Mall',
      meta: [
        {
          name: 'description',
          content:
            'Register for an account on the Galerie Harfa Mall platform to unlock personalized features, access rewards, manage receipts, and enjoy exclusive offers.'
        },
        {
          property: 'og:title',
          content: 'Galerie Harfa Mall - Registration'
        },
        {
          property: 'og:description',
          content:
            'Register for an account on the Galerie Harfa Mall platform to unlock personalized features, access rewards, manage receipts, and enjoy exclusive offers.'
        },
        {
          property: 'og:image',
          content: 'image.jpg'
        }
      ]
    })
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
