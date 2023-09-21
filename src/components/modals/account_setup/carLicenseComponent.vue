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
        <form class="relative w-full h-full flex flex-col justify-between">
          <div @click="previousLocationPickerComponent"
            class="cursor-pointer z-[999] absolute top-0 left-0 w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center group hover:bg-graylight transition-all">
            <Icon icon="fluent:chevron-left-16-filled" class="text-lg text-black" />
          </div>

          <div class="relative w-full flex flex-col gap-[20px]">
            <div class="flex flex-col max-w-[360px] w-full mx-auto">
              <div class="flex items-center justify-center pb-[16px]">
                <div class="w-[76px] h-[76px] rounded-full flex items-center bg-gray justify-center cursor-pointer">
                  <p class="text-black font-bold text-base2 leading-[26px]">
                    6 <sup class="text-grayDark font-semibold text-xs leading-[16px]"> / 6</sup>
                  </p>
                </div>
              </div>

              <h6 class="font-bold text-black text-xl mb-[8px] text-center capitalize">{{ $t(`enter_car_licence_plate`) }}
              </h6>

              <p class="font-medium text-sm text-grayDark text-center leading-[24px]">
                {{ $t(`enter_car_licence_plate_text`) }}
              </p>
            </div>

            <div class="w-full items-center flex justify-center max-w-[360px] mx-auto">
              <div
                class="w-full items-center gap-[12px] border-[1px] border-transparent bg-gray grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]">
                <div>
                  <Icon icon="ion:car-sport-outline" class="text-lg text-black" />
                </div>
                <div class="flex flex-col gap-[2px]">
                  <label for="phone" class="text-s text-grayDark leading-[16px] font-medium">{{
                    $t('car_license_plate_number') }}</label>
                  <input type="text" id="phone" :placeholder="$t('enter_car_license_plate_number')" value="AB6041AA"
                    class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
                </div>
                <div>
                  <Icon icon="bi:check" class="text-lg text-green" />
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-[8px] mt-[67px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button type="button"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all">
              {{ $t(`skip_for_now`) }}
            </button>
            <button type="submit"
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
  name: 'CarLicense',
  emits: ['previousLocationPickerComponent'],
  methods: {
    previousLocationPickerComponent() {
      this.$emit('previousLocationPickerComponent')
    }
  }
}
</script>
