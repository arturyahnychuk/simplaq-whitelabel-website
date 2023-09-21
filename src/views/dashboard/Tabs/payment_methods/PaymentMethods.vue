<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('my_receipts') }}</h6>

    <div class="w-full h-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <div v-if="!payment_methods" class="w-full h-full flex flex-col items-center justify-center py-[80px]">
        <div
          class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
        >
          <img class="w-full max-w-[136px]" src="@/assets/imgs/payment.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t(`you_haven't_added_any_cards_yet`) }}</p>
          <p class="text-grayDark text-sm font-regular max-w-[272px] leading-[24px] text-center tracking-[-0.1px] max-w-[324px]">
            {{ $t('your_added_payment_methods_will_be_displayed_here') }}
          </p>
        </div>
        <div class="flex items-center gap-[8px]">
          <button
            @click="openAddNewCard"
            class="text-sm mt-[24px] font-semibold bg-orange border border-graylight transition-all text-white leading-[20px] capitalize tracking-[-0.2px] hover:bg-orange rounded-[16px] px-[40px] py-[18px] cursor-pointer"
          >
            {{ $t('add_1st_card') }}
          </button>
        </div>
      </div>
      <div v-else>
        <div class="w-full grid grid-cols-3 gap-[24px]">
          <!--Card Item-->
          <div class="relative w-full py-[18px] px-[20px] border border-graylight rounded-[20px] overflow-hidden">
            <div class="relative z-[9] w-full h-full flex flex-col gap-[18px]">
              <div class="w-full flex items-center justify-between">
                <p class="font-nekst font-bold text-base leading-[140%] tracking-[0.2px] text-white">My card</p>
                <div
                  @click="openDeleteCardModal"
                  class="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-graylight"
                >
                  <Icon icon="fluent:delete-28-regular" class="text-md text-black" />
                </div>
              </div>
              <div class="w-full flex flex-col gap-[12px]">
                <p class="text-2xl text-white font-bold leading-[38px] tracking-[-0.4px]">•••• •••• •••• 1234</p>
                <div class="w-full flex items-center justify-between">
                  <div class="flex items-center gap-[18px]">
                    <div class="flex flex-col items-start gap-[4px]">
                      <p class="font-semibold text-xs leading-[16px] tracking-[-0.1px] text-white">{{ $t('card_holder_name') }}</p>
                      <p class="font-medium text-xs leading-[20px] tracking-[-0.2px] text-white">Yehor Haiduk</p>
                    </div>
                    <div class="flex flex-col items-start gap-[4px]">
                      <p class="font-semibold text-xs leading-[16px] tracking-[-0.1px] text-white">{{ $t('expiry_date') }}</p>
                      <p class="font-medium text-xs leading-[20px] tracking-[-0.2px] text-white">09/22</p>
                    </div>
                  </div>
                  <div class="relative w-[35px]">
                    <img class="max-w-[35px] w-full" src="@/assets/imgs/mastercard.svg" alt="mastercard">
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute left-0 top-0 w-full h-full">
              <img class="w-full h-full object-cover" src="@/assets/imgs/bankcard.svg" alt="bankCard" />
            </div>
          </div>
          <!--Card Add-->
          <div class="relative w-full py-[18px] px-[20px] border border-graylight rounded-[20px] overflow-hidden">
            <div class="w-full h-full flex items-center justify-center">
              <button @click="openAddNewCard" class="py-[14px] px-[35px] rounded-[16px] bg-orange">
                <p class="text-white text-sm font-semibold leading-[20px] tracking-[-0.2px]">{{ $t('add_card') }}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AddNewCard v-if="addNewCardModal" @closeAddNewCard="closeAddNewCard" />
  <DeleteCard v-if="deleteCardModal" @deleteCard="deleteCard" @cancelDeleteCard="cancelDeleteCard"/>
</template>

<script lang="ts">
import AddNewCard from '@/components/modals/payments/addNewCard.vue'
import DeleteCard from '@/components/modals/payments/deleteCard.vue'
export default {
  name: 'Payment_methods',
  components: {
    AddNewCard,
    DeleteCard
  },
  data() {
    return {
      payment_methods: true as boolean,
      addNewCardModal: false as boolean,
      deleteCardModal: false as boolean,
    }
  },
  methods: {
    closeAddNewCard() {
      this.addNewCardModal = false
    },
    openAddNewCard() {
      this.addNewCardModal = true
    },
    openDeleteCardModal() {
      this.deleteCardModal = true
    },
    deleteCard() {
      alert('delete')
    },
    cancelDeleteCard() {
      this.deleteCardModal = false
    }
  }
}
</script>
