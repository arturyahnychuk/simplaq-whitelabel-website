<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full max-w-[664px] p-[40px] bg-white rounded-[24px]">
        <div class="w-full h-full hidden" id="step-01">
          <div class="flex items-center justify-between pb-[16px] border-b-[1px] border-gray">
            <div class="flex flex-col gap-[4px]">
              <h6 class="font-bold leading-[26px] tracking-[-0.4px] text-black text-lg">Upload my receipt</h6>
              <p class="text-normal text-sm text-grayDark leading-[24px] tracking-[0.1px]">
                Here you can upload receipts in order to get reward points
              </p>
            </div>
            <div @click="closeUploadReceiptComponent"
              class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
            </div>
          </div>

          <div
            class="flex flex-col relative w-full p-[24px] border-[1px] border-gray rounded-[16px] flex items-center justify-center gap-[10px]">
            <div class="flex w-[72px] h-[72px] bg-gray flex items-center justify-center rounded-full">
              <Icon icon="ph:receipt-thin" class="text-xl text-black transition-all" />
            </div>
            <div class="flex flex-col gap-[6px]">
              <div class="flex items-center justify-center gap-[6px]">
                <p class="font-base text-black leading-[22px] tracking-[-0.3px] font-medium">Drag and drop an receipt, or
                </p>
                <div
                  class="relative overflow-hidden font-base cursor-pointer text-pink leading-[22px] tracking-[-0.3px] font-medium">
                  Browse
                  <input class="absolute left-0 opacity-0 cursor-pointer" type="file" name="" id="" />
                </div>
              </div>
              <p class="text-xs font-grayDark leading-[20px] font-normal tracking-[0.2px]">
                Maxiumum file size 20 Mb. Allowed formats: jpg, png, pdf
              </p>
            </div>
          </div>
        </div>

        <div class="w-full h-full hidd" id="step-02">
          <div class="flex items-center justify-between pb-[16px]">
            <div class="flex flex-col gap-[4px]">
              <h6 class="font-bold leading-[26px] tracking-[-0.4px] text-black text-lg">Upload my receipt</h6>
              <p class="text-normal text-sm text-grayDark leading-[24px] tracking-[0.1px]">
                Here you can upload receipts in order to get reward points
              </p>

              <div class="flex gap-[8px] mt-[16px]">
                <button
                  class="bg-orange rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-white">Receipt</button>
                <button class="bg-gray rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-black">Visualized
                  Data</button>
              </div>
            </div>

            <div @click="closeUploadReceiptComponent"
              class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
            </div>
          </div>

          <div
            class="flex relative w-full p-[24px] border-[1px] max-h-[361px] overflow-y-scroll border-gray rounded-[16px] flex items-start justify-center gap-[10px]">
            <img class="w-full max-w-[350px]" src="@/assets/imgs/receipt.svg" alt="" />
          </div>

          <div class="flex gap-[8px] mt-[16px] grid grid-cols-2">
            <button class="border-[1px] border-gray rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black">
              Delete receipt
            </button>
            <button
              class="border-[1px] border-orange bg-orange rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['closeUploadReceiptComponent'],
  methods: {
    closeUploadReceiptComponent() {
      this.$emit('closeUploadReceiptComponent')
    }
  }
}
</script>
