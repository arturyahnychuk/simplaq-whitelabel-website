<template>
  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col">
        <div class="flex w-[72px] h-[72px] rounded-full items-center justify-center bg-gray">
          <Icon icon="tabler:phone-check" class="text-black text-lg" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('verification_code') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px] text-center">
          {{ $t('verify_phone_text') }} +38093*****41
        </p>
      </div>
    </div>

    <form @input="handleInput" action="#" method="POST" id="phoneVerificationInputs">
      <div class="flex items-center gap-[8px] mb-[12px]">
        <input
          v-for="(value, index) in otpValues"
          :key="index"
          ref="otpInput"
          v-model="otpValues[index]"
          @input="handleInput(index)"
          @keydown="handleKeydown(index, $event)"
          @paste="handlePaste(index, $event)"
          type="text"
          maxlength="1"
          pattern="[0-9]"
          placeholder=" "
          class="w-[53px] h-[64px] bg-gray rounded-[16px] text-center font-bold text-black leading-[20px] text-sm border-[1px] outline-none placeholder-shown:border-transparent border-orange"
        />
      </div>

      <div class="flex flex-col gap-[8px] w-full max-w-[360px]">
        <div class="flex flex-col">
          <button
            class="bg-orange border-[1px] border-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
          >
            {{ $t('verify') }}
          </button>
        </div>

        <div class="flex gap-[5px] justify-center items-center text-center text-grayDark text-xs font-normal mt-[60px] leading-[20px] tracking-[0.2px]">
          {{ $t('need_help?') }}
          <div
            @click="openSupportModal"
            class="text-pink font-semibold text-xs leading-[20px] tracking-[-0.2px] text-end cursor-pointer"
            >{{ $t('contact_support') }}</div
          >
        </div>
      </div>
    </form>
  </div>

  <Contact_supportComponent @closeModal="closeSupportModal" v-if="contactSupportShow"/>
</template>

<script lang="ts">
import Contact_supportComponent from '@/components/modals/contact_support/contact_supportComponent.vue'
export default {
  data() {
    return {
      otpValues: ['', '', '', '', '', ''] as string[],
      contactSupportShow: false as boolean,
    }
  },
  components: {
    Contact_supportComponent,
  },
  methods: {
    openSupportModal() {
      this.contactSupportShow = true
    },
    closeSupportModal() {
      this.contactSupportShow = false
    },
    handleInput(index) {
      const inputValue = this.otpValues[index]

      if (inputValue === undefined || inputValue === null || inputValue === '') {
        // Input is undefined, null, or empty, no need for further processing
        return
      }

      const numbersOnly = inputValue.replace(/\D/g, '')
      this.otpValues[index] = numbersOnly.substring(0, 1)

      if (index < this.otpValues.length - 1 && numbersOnly.length > 0) {
        this.$refs.otpInput[index + 1].focus()
      }
    },
    handleKeydown(index, event) {
      if (event.key === 'Backspace' && this.otpValues[index] === '') {
        // If Backspace is pressed and the current input field is empty,
        // move the focus to the previous input field and remove the value.
        event.preventDefault()
        if (this.$refs.otpInput[index - 1]) {
          this.$refs.otpInput[index - 1].focus()
        }
        this.otpValues[index - 1] = ''
      } else if (event.key === 'ArrowLeft' && index > 0) {
        // If Arrow Left is pressed and the cursor is not in the first input field,
        // move the focus to the previous input field.
        event.preventDefault()
        this.$refs.otpInput[index - 1].focus()
      } else if (event.key === 'ArrowRight' && index < this.otpValues.length - 1) {
        // If Arrow Right is pressed and the cursor is not in the last input field,
        // move the focus to the next input field.
        event.preventDefault()
        this.$refs.otpInput[index + 1].focus()
      }
    },
    handlePaste(index, event) {
      event.preventDefault()
      const pastedData = event.clipboardData.getData('text/plain').replace(/\D/g, '')

      for (let i = 0; i < pastedData.length && index + i < this.otpValues.length; i++) {
        this.otpValues[index + i] = pastedData.charAt(i)
      }

      if (index + pastedData.length < this.otpValues.length) {
        this.$refs.otpInput[index + pastedData.length].focus()
      }
    }
  }
}
</script>
