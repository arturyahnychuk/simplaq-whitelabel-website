<template>
  <notifications #body="props" position="bottom center" :duration="5000" :max="2">
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

  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex overflow-auto md:py-[20px] bg-white md:bg-transparent">
      <div class="w-full max-w-[664px] h-full md:min-h-[446px] md:h-max m-auto px-[40px] pt-[40px] pb-[40px] bg-white md:rounded-[24px]">
        <form v-if="cardAdded" @submit.prevent="handleSubmit" method="POST" class="relative w-full h-full flex flex-col justify-between">
          <div class="w-full">
            <div class="flex w-full justify-between border-b pb-[16px] border-b-graylight">
              <div class="flex flex-col">
                <h6 class="font-bold text-black text-xl mb-[8px] capitalize">{{ $t(`add_new_card`) }}</h6>

                <p class="font-medium text-sm text-grayDark text-center leading-[24px]">
                  {{ $t(`enter_your_card_information`) }}
                </p>
              </div>

              <div @click="closeAddNewCard"
                class="cursor-pointer w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center group hover:bg-graylight transition-all"
              >
                <Icon icon="majesticons:close" class="text-xl text-black" />
              </div>
            </div>

            <div class="relative w-full flex flex-col gap-[8px] my-[16px]">
              <div class="w-full items-center">
                <div
                  :class="
                    cardNumberTouched && validCardNumber
                      ? 'border-green'
                      : cardNumberTouched && !validCardNumber
                      ? 'border-red'
                      : 'border-transparent'
                  "
                  class="w-full items-center gap-[12px] border-[1px] bg-gray grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]"
                >
                  <div>
                    <Icon icon="iconoir:credit-cards" class="text-lg text-black" />
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <input
                      @input="inputFormat"
                      v-model="cardNumber"
                      type="text"
                      maxlength="19"
                      id="cardNumber"
                      :placeholder="$t('card_number')"
                      class="text-black py-[10px] font-medium bg-transparent outline-none text-sm leading-[20px]"
                    />
                  </div>
                  <div v-if="validCardNumber">
                    <Icon icon="bi:check" class="text-lg text-green" />
                  </div>
                </div>
              </div>
              <div class="w-full items-center">
                <div
                  :class="
                    cardHolderTouched && validCardHolder
                      ? 'border-green'
                      : cardHolderTouched && !validCardHolder
                      ? 'border-red'
                      : 'border-transparent'
                  "
                  class="w-full items-center gap-[12px] border-[1px] bg-gray grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]"
                >
                  <div>
                    <Icon icon="solar:shield-user-outline" class="text-lg text-black" />
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <input
                      type="text"
                      id="carHolder"
                      v-model="cardHolder"
                      @input="handleCardHolder"
                      :placeholder="$t('card_holder')"
                      class="text-black py-[10px] font-medium bg-transparent outline-none text-sm leading-[20px]"
                    />
                  </div>
                  <div v-if="cardHolder.length !== 0">
                    <Icon icon="bi:check" class="text-lg text-green" />
                  </div>
                </div>
              </div>
              <div class="w-full items-center grid sm:grid-cols-2 gap-[8px]">
                <div
                  :class="
                    expiryTouched && validExpire ? 'border-green' : expiryTouched && !validExpire ? 'border-red' : 'border-transparent'
                  "
                  class="w-full items-center gap-[12px] border-[1px] bg-gray grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]"
                >
                  <div>
                    <Icon icon="ic:round-event-note" class="text-lg text-black" />
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <input
                      class="text-black py-[10px] font-medium bg-transparent outline-none text-sm leading-[20px]"
                      type="text"
                      id="expiry"
                      v-model="expiry"
                      @keydown="expiryMask"
                      maxLength="5"
                      :placeholder="$t('expiry_date')"
                      @input="splitDate"
                    />
                  </div>
                  <div v-if="validExpire">
                    <Icon icon="bi:check" class="text-lg text-green" />
                  </div>
                </div>
                <div
                  :class="cvvTouched && validCVV ? 'border-green' : cvvTouched && !validCVV ? 'border-red' : 'border-transparent'"
                  class="w-full items-center gap-[12px] border-[1px] bg-gray grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]"
                >
                  <div>
                    <Icon icon="iconoir:credit-cards" class="text-lg text-black" />
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <input
                      @input="handleCVV"
                      type="text"
                      id="cvv"
                      :placeholder="$t('cvv')"
                      v-model="cvv"
                      class="text-black py-[10px] font-medium bg-transparent outline-none text-sm leading-[20px]"
                    />
                  </div>
                  <div v-if="validCVV">
                    <Icon icon="bi:check" class="text-lg text-green" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-[8px] mt-[0px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button @click="closeAddNewCard"
              type="button"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
            >
              {{ $t(`cancel`) }}
            </button>
            <button
              type="submit"
              :class="readyForSubmit ? 'bg-orange text-white' : 'bg-gray text-black'"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold transition-all"
            >
              {{ $t('continue') }}
            </button>
          </div>
        </form>
        <div v-else class="max-w-[343px] mx-auto min-h-[400px] flex flex-col items-center h-full justify-center">
          <div class="flex relative w-full mb-[24px] rounded-[16px] flex items-start justify-center gap-[10px]">
            <img class="w-full max-w-[136px]" src="@/assets/imgs/payment_successfull.svg" alt="" />
          </div>

          <h6 class="font-bold text-black text-xl mb-[8px] text-center">{{ $t('successfully_adding_a_card') }}</h6>

          <p class="font-medium text-sm text-grayDark max-w-[380px] mx-auto text-center leading-[24px]">
            {{ $t('you_can_now_use_the_card_to_pay_for_parking_or_other_services') }}
          </p>

          <button
            class="w-full text-sm font-semibold mt-[24px] bg-orange tracking-[-0.2px] leading-[20px] text-white py-[18px] w-full rounded-[20px]"
          >
            {{ $t('done') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Add-new-card',
  data() {
    return {
      regx: [
        { name: 'Visa', re: '^4' },
        { name: 'Hipercard', re: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/ },
        {
          name: 'MasterCard',
          re: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/
        },
        {
          name: 'Discover',
          re: /^(6011|65|64[4-9]|622)/
        },
        {
          name: 'Elo',
          re: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/
        },
        {
          name: 'American Express',
          re: /^3[47]\d{13,14}$/
        }
      ],
      cardAdded: true as boolean,

      cardNumber: '' as string,
      validCardNumber: false as boolean,
      cardNumberTouched: false as boolean,

      cardHolder: '' as string,
      cardHolderTouched: false as boolean,

      cvv: '' as string,
      cvvTouched: false as boolean,

      expiry: '' as string,
      expiryTouched: false as boolean,
      expiryMonth: '' as string,
      expiryYear: '' as string
    }
  },
  computed: {
    validCVV(): boolean {
      return this.cvv.length !== 0 && this.cvv.length <= 4
    },
    validCardHolder(): boolean {
      return this.cardHolder.length !== 0
    },
    validExpire(): boolean {
      if (this.expiryMonth && this.expiryYear) {
        return true
      } else {
        return false
      }
    },
    readyForSubmit(): boolean {
      if (this.validCVV && this.validCardHolder && this.validExpire && this.validCardNumber) {
        return true
      } else {
        return false
      }
    }
  },
  emits: ['closeAddNewCard'],
  methods: {
    closeAddNewCard() {
        this.$emit('closeAddNewCard')
    },
    expiryMask() {
      const allowedKeys = [8]
      if (allowedKeys.indexOf(event.keyCode) !== -1) {
        return
      }
      this.expiry = this.expiry
        .replace(/^([1-9]\/|[2-9])$/g, '0$1/')
        .replace(/^(0[1-9]|1[0-2])$/g, '$1/')
        .replace(/^([0-1])([3-9])$/g, '0$1/$2')
        .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2')
        .replace(/^([0]+)\/|[0]+$/g, '0')
        .replace(/[^\d\/]|^[\/]*$/g, '')
        .replace(/\/\//g, '/')
    },
    splitDate() {
      this.expiryTouched = true
      const regExp = /(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)/
      const matches = regExp.exec(this.expiry)
      this.expiryMonth = matches ? matches[1] : ''
      this.expiryYear = matches ? matches[2] : ''
    },
    handleCardHolder() {
      this.cardHolderTouched = true
    },
    handleCVV() {
      this.cvvTouched = true
      if (/^\d+$/.test(this.cvv) && this.cvv.length <= 4) {
        return this.cvv
      } else {
        this.cvv = this.cvv.slice(0, -1)
      }
    },
    inputFormat() {
      this.cardNumberTouched = true
      let text = this.cardNumber.split(' ').join('')
      this.cardVadid = text
      if (text.length > 0) {
        text = text
          .match(new RegExp(/.{1,4}/, 'g'))
          .join(' ')
          .replace(new RegExp(/[^\d]/, 'ig'), ' ')
      }
      this.cardNumber = text
      this.GetCardType(this.cardVadid)
    },
    validCreditCard(value) {
      let inputValidate = document.getElementById('cardNumber')
      // luhn algorithm
      let numCheck = 0,
        bEven = false
      value = value.toString().replace(new RegExp(/\D/g, ''))
      for (let n = value.length - 1; n >= 0; n--) {
        let cDigit = value.charAt(n),
          digit = parseInt(cDigit, 10)

        if (bEven && (digit *= 2) > 9) digit -= 9
        numCheck += digit
        bEven = !bEven
      }
      let len = value.length
      if (numCheck % 10 === 0 && len === 16 && this.cardType) {
        this.validCardNumber = true
      }
      //false: return not valid number
      else if (!numCheck % 10 === 0 && len === 16) {
        this.validCardNumber = false

        //if not have number on input
      } else {
        this.validCardNumber = false
      }
    },
    GetCardType(number) {
      this.regx.forEach(item => {
        if (number.match(item.re) != null) {
          this.cardType = item.name.toLowerCase()
        } else if (!number) {
          this.cardType = ''
        }
      })
      // after choose a cardtype return the number for the luhn algorithm
      this.validCreditCard(number)
    },
    handleSubmit() {
      this.cardNumberTouched = true
      this.cardHolderTouched = true
      this.cvvTouched = true
      this.expiryTouched = true

      if (this.cardNumber.length === 0 || this.cvv.length === 0 || this.expiry.length === 0 || this.cardHolder.length === 0) {
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
      } else if (!this.validCardNumber) {
        this.$notify({
          title: this.$t('card_number_is_invalid'),
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
        alert('card is added')
      }
    }
  }
}
</script>
