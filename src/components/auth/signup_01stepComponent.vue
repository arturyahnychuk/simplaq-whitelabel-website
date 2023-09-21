<template>
  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col">
        <div class="flex max-w-[218px] w-full">
          <img src="@/assets/imgs/signup-illustration.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('signup_title') }}</h6>
      </div>
    </div>

    <div class="flex flex-col gap-[8px] w-full max-w-[360px]">
      <button
        @click="registerWithEmail"
        class="bg-gray justify-center flex items-center gap-[8px] py-[16px] rounded-[16px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
      >
        <Icon icon="tabler:mail" class="text-lg text-black" />

        {{ $t('registration_with_email') }}
      </button>

      <p class="text-grayDark max-w-[360px] font-normal text-xs leading-[20px] tracking-[-0.2px] text-center">
        {{ $t('or_use_social_media') }}
      </p>

      <div class="flex flex-col gap-[8px]">
        <button
          class="bg-gray justify-center flex items-center gap-[8px] py-[16px] rounded-[16px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
        >
          <Icon icon="flat-color-icons:google" class="text-xl text-black" />

          {{ $t('continue_with_google') }}
        </button>

        <button
          class="bg-gray justify-center flex items-center gap-[8px] py-[16px] rounded-[16px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
        >
          <Icon icon="logos:facebook" class="text-xl text-white" />

          {{ $t('continue_with_facebook') }}
        </button>

        <p class="text-center text-grayDark text-xs font-normal mt-[60px] leading-[20px] tracking-[0.2px]">
          {{ $t('already_a_member?') }}
          <router-link
            :to="{ name: $Routes.LOGIN }"
            class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end"
            >{{ $t('login') }}</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'signup-01step',
  emits: ['signupWithEmail'],
  methods: {
    registerWithEmail() {
      this.$emit('signupWithEmail')
    }
  },
}
</script>
