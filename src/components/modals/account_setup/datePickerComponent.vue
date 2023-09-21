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
        <form @submit.prevent="handleSubmit" class="w-full h-full flex flex-col justify-between">
          <div class="flex flex-col max-w-[360px] mx-auto">
            <div class="flex items-center justify-center pb-[16px]">
              <div class="w-[76px] h-[76px] rounded-full flex items-center bg-gray justify-center cursor-pointer">
                <p class="text-black font-bold text-base2 leading-[26px]">
                  1 <sup class="text-grayDark font-semibold text-xs leading-[16px]">/ 6</sup>
                </p>
              </div>
            </div>

            <h6 class="font-bold text-black text-xl mb-[8px] text-center max-w-[360px] mx-auto">{{
              $t('when_were_you_born') }}?</h6>
            <p class="font-medium text-sm text-grayDark text-center leading-[24px]">
              {{ $t('when_were_you_born_text') }}
            </p>
            <div
              :class="!this.dateTouched ? 'border-transparent' : this.dateTouched && this.invalidDate ? 'border-orange' : 'border-green'"
              class="mt-[24px] form-controll relative items-center gap-[12px] bg-gray border-[1px] grid grid-cols-[20px,auto,20px] px-[20px] py-[15px] rounded-[16px]">
              <div class="datePickerCalendar" @mouseenter="datePickerCalendar">
                <Icon icon="solar:calendar-date-linear" class="text-lg text-black" />
              </div>
              <div class="flex flex-col gap-[2px]">
                <input type="date" id="date" v-model="date" @input="handleInput"
                  class="text-black py-[6px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
              </div>
              <div v-if="!this.invalidDate && this.dateTouched">
                <Icon icon="bi:check" class="text-lg text-green" />
              </div>
            </div>
          </div>

          <div class="flex gap-[8px] mt-[84px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button @click="skipDatePickerComponent" type="button"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all">
              {{ $t(`skip_for_now`) }}
            </button>
            <button type="submit" :class="!this.dateTouched
              ? 'bg-transparent text-black'
              : this.dateTouched && invalidDate
                ? 'bg-transparent text-black'
                : 'bg-orange text-white'
              "
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
  data() {
    return {
      date: '' as string,
      invalidDate: false as boolean,
      dateTouched: false as boolean
    }
  },
  emits: ['skipDatePickerComponent', 'nextGenderPickerComponent'],
  methods: {
    skipDatePickerComponent() {
      this.$emit('skipDatePickerComponent')
    },
    handleSubmit() {
      this.dateTouched = true
      this.validateDate()
      this.validateDateMessage()

      if (!this.invalidDate) {
        const dateParts = this.date.split('-')
        const month = parseInt(dateParts[1], 10)
        const day = parseInt(dateParts[2], 10)
        const year = parseInt(dateParts[0], 10)
        const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year.toString().padStart(4, '0')}`
        this.date = formattedDate
        this.$emit('nextGenderPickerComponent', this.date)
      }
    },
    datePickerCalendar(e: Event) {
      const target = e.target as Element
      if (target.closest('.form-controll').querySelector('input')) {
        target.closest('.form-controll').querySelector('input').focus()
      }
    },
    handleInput() {
      // Reset error messages
      this.validateDate()
    },
    validateDate() {
      this.invalidDate = false

      // Validate the date
      const dateParts = this.date.split('-')
      const month = parseInt(dateParts[1], 10)
      const day = parseInt(dateParts[2], 10)
      const year = parseInt(dateParts[0], 10)

      this.dateTouched = true
      if (
        isNaN(month) ||
        isNaN(day) ||
        isNaN(year) ||
        month < 1 ||
        month > 12 ||
        day < 1 ||
        day > 31 ||
        year < 1900 ||
        year > new Date().getFullYear() ||
        new Date().getFullYear() - year > 200
      ) {
        this.invalidDate = true
      } else {
        const formattedDate = `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
        this.date = formattedDate
      }
    },
    validateDateMessage() {
      if (this.invalidDate) {
        this.$notify({
          title: this.$t('please_choose_valid_Date'),
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
</script>
