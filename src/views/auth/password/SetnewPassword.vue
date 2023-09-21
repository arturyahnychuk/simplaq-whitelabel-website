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

        <div
        @click="step=1"
          v-if="step === 2"
          class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center"
        >
        <Icon icon="radix-icons:chevron-left" class="text-xl text-black" />

        </div>
      </div>

      <SetnewpasswordComponent v-if="step === 1" />
      <Succesful_changepasswordComponent v-if="step === 2" />

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
import SetnewpasswordComponent from '@/components/auth/password/setnewpasswordComponent.vue'
import Succesful_changepasswordComponent from '@/components/auth/password/succesful_changepasswordComponent.vue'

/* vue use head */
import { useHead } from '@vueuse/head'

export default {
  name: 'Setnew-password',
  components: {
    AuthSliderComponent,
    SetnewpasswordComponent,
    Succesful_changepasswordComponent,

    Swiper,
    SwiperSlide
  },
  data() {
    return {
      step: 2 as number,
    }
  },
  setup() {
    useHead({
    title: 'Set New Password - Galerie Harfa Mall',
    meta: [
      {
        name: 'description',
        content: 'Set a new password for your Galerie Harfa Mall account. Enter your new password and confirm to complete the password reset process.'
      },
      {
        property: 'og:title',
        content: 'Galerie Harfa Mall - Set New Password'
      },
      {
        property: 'og:description',
        content: 'Set a new password for your Galerie Harfa Mall account. Enter your new password and confirm to complete the password reset process.'
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
