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
          <div @click="previousProfileSelectComponent"
            class="cursor-pointer z-[999] absolute top-0 left-0 w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center group hover:bg-graylight transition-all">
            <Icon icon="fluent:chevron-left-16-filled" class="text-lg text-black" />
          </div>

          <div class="relative w-full flex flex-col gap-[20px]">
            <div class="flex flex-col max-w-[360px] w-full mx-auto">
              <div class="flex items-center justify-center pb-[16px]">
                <div class="w-[76px] h-[76px] rounded-full flex items-center bg-gray justify-center cursor-pointer">
                  <p class="text-black font-bold text-base2 leading-[26px]">
                    5 <sup class="text-grayDark font-semibold text-xs leading-[16px]">/ 6</sup>
                  </p>
                </div>
              </div>

              <h6 class="font-bold text-black text-xl mb-[8px] text-center">{{ $t(`where_do_you_live`) }}?</h6>
            </div>

            <div class="w-full flex flex-col gap-[12px]">
              <div class="w-full grid grid-cols-[48px,auto] bg-gray rounded-[16px]">
                <div class="flex items-center justify-center">
                  <Icon icon="ri:search-2-line" class="text-lg text-black" />
                </div>
                <input type="text" :placeholder="$t('search')" v-model="searchQuery"
                  class="py-[14px] bg-transparent text-xs leading-[20px] tracking-[-0.2px] text-black outline-none placeholder:text-grayDark" />
              </div>

              <div @click="getLocation" id="useMyLocation"
                class="cursor-pointer group hover:bg-yellowLight px-[12px] transition-all w-full py-[8px] border-[1px] border-gray rounded-[16px] flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] bg-gray rounded-full group-hover:bg-white flex items-center justify-center">
                  <Icon icon="fluent:my-location-16-regular"
                    class="select-icon text-lg text-black group-hover:text-orange" />
                </div>
                <p class="text-sm font-bold text-black leading-[20px] group-hover:text-orange">{{ $t('use_my_location') }}
                </p>
              </div>

              <GoogleMap class="rounded-[16px] overflow-hidden w-full h-[165px]"
                api-key="AIzaSyDOFlx7_zAF2nBL2D8rdhJTREPgnGgvtKk" :center="center" :zoom="15">
                <Marker :options="{ position: center }" />
              </GoogleMap>
            </div>
          </div>

          <div class="flex gap-[8px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button @click="skipLocationComponent" type="button"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all">
              {{ $t(`skip_for_now`) }}
            </button>
            <button @click="nextCarLicenseComponent" type="submit"
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
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  name: 'LocationPicker',
  data() {
    return {
      searchQuery: '' as string,
    }
  },
  components: { GoogleMap, Marker },
  emits: ['previousProfileSelectComponent', 'nextCarLicenseComponent', 'skipLocationComponent'],
  mounted() { },
  methods: {
    previousProfileSelectComponent() {
      this.$emit('previousProfileSelectComponent')
    },
    nextCarLicenseComponent() {
      this.$emit('nextCarLicenseComponent')
    },
    skipLocationComponent() {
      this.$emit('skipLocationComponent')
    },
    getLocation(): void {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const latitude: number = position.coords.latitude;
          const longitude: number = position.coords.longitude;

          // Use the latitude and longitude to display or process the location
          alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error: GeolocationPositionError) => {
          console.error('Error getting location:', error);
        }
      );
    }
  },
}
</script>
