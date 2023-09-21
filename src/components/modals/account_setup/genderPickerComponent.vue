<template>
  <notifications #body="props" position="bottom center" :duration="5000" :max="1">
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

  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex overflow-auto md:py-[20px] bg-white md:bg-transparent">
      <div
        class="w-full max-w-[664px] h-full md:min-h-[640px] md:h-[640px] m-auto px-[40px] pt-[40px] pb-[40px] bg-white md:rounded-[24px]">
        <form @submit.prevent="handleSubmit" class="relative w-full h-full flex flex-col justify-between">
          <div @click="previousDatePickerComponent"
            class="cursor-pointer absolute top-0 left-0 z-[999] w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center group hover:bg-graylight transition-all">
            <Icon icon="fluent:chevron-left-16-filled" class="text-lg text-black" />
          </div>
          <div class="flex flex-col max-w-[360px] w-full mx-auto">
            <div class="flex items-center justify-center pb-[16px]">
              <div class="w-[76px] h-[76px] rounded-full flex items-center bg-gray justify-center cursor-pointer">
                <p class="text-black font-bold text-base2 leading-[26px]">
                  2 <sup class="text-grayDark font-semibold text-xs leading-[16px]">/ 6</sup>
                </p>
              </div>
            </div>

            <h6 class="font-bold text-black text-xl mb-[8px] text-center">{{ $t(`what's_your_gender`) }}?</h6>

            <p class="font-medium text-sm text-grayDark text-center leading-[24px]">
              {{ $t(`what's_your_gender_text`) }}
            </p>
          </div>

          <div class="mt-[24px] flex flex-col gap-[12px]">
            <label class="flex items-center cursor-pointer">
              <input type="radio" value="female" v-model="gender" name="bordered-checkbox"
                class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer" />
              <div
                class="flex items-center gap-[12px] px-[12px] border-gray w-full py-[8px] border-[2px] rounded-[12px] peer peer-checked:border-orange">
                <div class="w-[48px] h-[48px] rounded-full bg-gray">
                  <img class="w-[48px] rounded-full" src="@/assets/imgs/female.svg" />
                </div>
                <p class="text-sm text-black capitalize font-bold leading-[20px] tracking-[-0.2px]">{{ $t('female') }}</p>
              </div>
            </label>

            <label class="flex items-center cursor-pointer">
              <input type="radio" value="male" v-model="gender" name="bordered-checkbox"
                class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer" />
              <div
                class="flex items-center gap-[12px] px-[12px] border-gray w-full py-[8px] border-[2px] rounded-[12px] peer peer-checked:border-orange">
                <div class="w-[48px] h-[48px] rounded-full bg-gray">
                  <img class="w-[48px] rounded-full" src="@/assets/imgs/male.svg" />
                </div>
                <p class="text-sm text-black capitalize font-bold leading-[20px] tracking-[-0.2px]">{{ $t('male') }}</p>
              </div>
            </label>

            <label class="flex items-center cursor-pointer">
              <input type="radio" value="notSay" v-model="gender" name="bordered-checkbox"
                class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer" />
              <div
                class="flex items-center gap-[12px] px-[12px] border-gray w-full py-[8px] border-[2px] rounded-[12px] peer peer-checked:border-orange">
                <div class="w-[48px] h-[48px] rounded-full bg-gray">
                  <img class="w-[48px] rounded-full" src="@/assets/imgs/nogender.svg" />
                </div>
                <p class="text-sm text-black capitalize font-bold leading-[20px] tracking-[-0.2px]">{{
                  $t('prefer_not_to_say') }}</p>
              </div>
            </label>
          </div>

          <div class="flex gap-[8px] mt-[67px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button @click="skipGenderPickerComponent" type="button"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all">
              {{ $t(`skip_for_now`) }}
            </button>
            <button type="submit" :class="this.gender === '' ? 'bg-transparent text-black' : 'bg-orange text-white'"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold transition-all">
              {{ $t('continue') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GenderPicker',
  data() {
    return {
      gender: '' as string,
    }
  },
  emits: ['previousDatePickerComponent', 'skipGenderPickerComponent', 'nextInterestsPickerComponent'],
  methods: {
    handleSubmit() {
      if (this.gender === '') {
        this.$notify({
          title: this.$t('please_choose_your_gender'),
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
        this.$emit('nextInterestsPickerComponent', this.gender)
      }
    },
    previousDatePickerComponent() {
      this.$emit('previousDatePickerComponent')
    },
    skipGenderPickerComponent() {
      this.$emit('skipGenderPickerComponent')
    }
  }
}
</script>
