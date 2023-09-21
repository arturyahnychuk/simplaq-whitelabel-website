<template>
  <div v-if="!receipts" class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('my_receipts') }}</h6>

    <div class="w-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <div class="w-full h-full flex flex-col items-center justify-center py-[80px]">
        <div
          class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
        >
          <img class="w-full max-w-[136px]" src="@/assets/imgs/receipts.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t(`no_receipts_found`) }}</p>
          <p class="text-grayDark text-sm font-regular leading-[24px] text-center tracking-[-0.1px] max-w-[324px]">
            {{ $t('no_receipts_found_text') }}
          </p>
        </div>
        <div class="flex items-center gap-[8px]">
          <button @click="openUploadReceiptComponent"
            class="text-sm mt-[24px] font-semibold text-blac bg-transparent border border-graylight hover:border-transparent transition-all hover:text-white leading-[20px] capitalize tracking-[-0.2px] hover:bg-orange rounded-[16px] px-[40px] py-[18px] cursor-pointer"
          >
            {{ $t('upload_my_receipt') }}
          </button>
          <button
            class="text-sm mt-[24px] font-semibold text-blac bg-transparent border border-graylight hover:border-transparent transition-all hover:text-white leading-[20px] capitalize tracking-[-0.2px] hover:bg-orange rounded-[16px] px-[40px] py-[18px] cursor-pointer"
          >
            {{ $t('download_app') }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <ReceiptsTab v-else/>

  <UploadReceipt v-if="uploadReceipt" @closeUploadReceiptComponent="closeUploadReceiptComponent"/>
</template>

<script lang="ts">
import EarnedPoints from '@/components/dashboard/points/EarnedPoints.vue'
import UploadReceipt from '@/components/lite-pages/UploadReceiptComponent.vue'
import ReceiptsTab from '@/components/dashboard/my_receipts/MyReceipts.vue'
export default {
  name: 'PointsTab',
  data() {
    return {
      receipts: false as boolean,
      uploadReceipt: false as boolean,
    }
  },
  components: {
    EarnedPoints,
    UploadReceipt,
    ReceiptsTab,
  },
  methods: {
    closeUploadReceiptComponent() {
        this.uploadReceipt = false
    },
    openUploadReceiptComponent() {
        this.uploadReceipt = true
    }
  }
}
</script>
