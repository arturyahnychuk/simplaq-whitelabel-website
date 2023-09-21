<template>
  <AuthSliderComponent>
    <div class="h-full w-full flex flex-col py-[40px] px-[48px]">
      <div class="w-full">
        <router-link
          v-if="step === 1"
          :to="{ name: $Routes.LOGIN }"
          class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center"
        >
        <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />

        </router-link>

        <div v-if="step===2"
          @click="step = 1"
          class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center"
        >
        <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />

        </div>
      </div>

      <ForgotpasswordComponent v-if="step === 1" />
      <SuccessfulsendingComponent v-if="step === 2" />
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
import ForgotpasswordComponent from '@/components/auth/password/forgotpasswordComponent.vue'
import SuccessfulsendingComponent from '@/components/auth/password/succesful_sendingComponent.vue'

/* vue use head */
import { useHead } from '@vueuse/head'

export default {
  name: 'Forgot-password',
  components: {
    AuthSliderComponent,
    ForgotpasswordComponent,
    SuccessfulsendingComponent,

    Swiper,
    SwiperSlide
  },
  data() {
    return {
      step: 1 as number,
    }
  },
  setup() {
    useHead({
    title: 'Forgot Password - Galerie Harfa Mall',
    meta: [
      {
        name: 'description',
        content: 'Recover your password for your Galerie Harfa Mall account. Enter your email address to receive instructions on resetting your password.'
      },
      {
        property: 'og:title',
        content: 'Galerie Harfa Mall - Forgot Password'
      },
      {
        property: 'og:description',
        content: 'Recover your password for your Galerie Harfa Mall account. Enter your email address to receive instructions on resetting your password.'
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
