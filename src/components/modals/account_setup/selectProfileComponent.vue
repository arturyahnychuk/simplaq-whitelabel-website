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
          <div @click="previousInterestsPickerComponent"
            class="cursor-pointer z-[999] absolute top-0 left-0 w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center group hover:bg-graylight transition-all">
            <Icon icon="fluent:chevron-left-16-filled" class="text-lg text-black" />
          </div>

          <div class="relative w-full flex flex-col gap-[20px]">
            <div class="flex flex-col max-w-[360px] w-full mx-auto">
              <div class="flex items-center justify-center pb-[16px]">
                <div class="w-[76px] h-[76px] rounded-full flex items-center bg-gray justify-center cursor-pointer">
                  <p class="text-black font-bold text-base2 leading-[26px]">
                    4 <sup class="text-grayDark font-semibold text-xs leading-[16px]">/ 6</sup>
                  </p>
                </div>
              </div>

              <h6 class="font-bold text-black text-xl mb-[8px] text-center capitalize">{{ $t(`select_profile_picture`) }}
              </h6>

              <p class="font-medium text-sm text-grayDark text-center leading-[24px]">
                {{ $t(`select_profile_picture_text`) }}
              </p>
            </div>

            <div class="w-full items-center flex justify-center">
              <div
                class="relative group flex items-center flex justify-center gap-[8px] w-[112px] h-[112px] border border-graylight rounded-full transition-all">
                <Icon v-if="!isUploaded" icon="teenyicons:user-circle-solid" class="text-2.5xl text-black" />
                <img v-else id="profile-image-update" class="w-full h-full object-coveer rounded-full" :src="isUploaded"
                  alt="" />
                <div v-if="!isUploaded"
                  class="absolute right-[-5px] hover:bg-yellowLight transition-all cursor-pointer bottom-[-10px] w-[40px] h-[40px] cursor-pointer bg-gray rounded-full flex items-center justify-center">
                  <Icon icon="icon-park-solid:add-one" class="text-base text-orange cursor-pointer" />
                  <div
                    class="absolute invisible group-hover:visible transition-all top-[calc(100%+10px)] delay-100 group-hover:top-[calc(100%+4px)] left-[0px] w-[221px] py-[8px] flex flex-col gap-[8px] bg-white border border-gray rounded-[16px] shadow-md">
                    <div
                      class="flex items-center gap-[12px] pb-[8px] border-b border-gray hover:bg-graylight py-[8px] transitiona-all px-[16px]">
                      <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
                        <Icon icon="solar:camera-outline" class="text-lg text-black cursor-pointer" />
                      </div>
                      <p class="text-black font-bold leading-[20px]">{{ $t('camera') }}</p>
                    </div>
                    <div
                      class="relative flex items-center gap-[12px] pb-[8px] border-b border-gray hover:bg-graylight py-[8px] transitiona-all px-[16px]">
                      <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
                        <Icon icon="solar:gallery-outline" class="text-lg text-black cursor-pointer" />
                      </div>
                      <p class="text-black font-bold leading-[20px]">{{ $t('gallery') }}</p>
                      <input @change="handleFileChange"
                        class="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer" type="file" />
                    </div>
                  </div>
                </div>
                <div v-else @click="removeFile"
                  class="absolute right-[-5px] hover:bg-red transition-all cursor-pointer bottom-[-10px] w-[40px] h-[40px] cursor-pointer bg-gray rounded-full flex items-center justify-center">
                  <Icon icon="fluent:delete-12-regular"
                    class="text-base text-black group-hover:text-white cursor-pointer" />

                </div>

              </div>
            </div>
          </div>

          <div class="flex gap-[8px] mt-[67px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button @click="skipProfileSelectComponent" type="button"
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
  name: 'SelectProfile',
  data() {
    return {
      isUploaded: null as null | string
    }
  },
  emits: ['previousInterestsPickerComponent', 'nextLocationPickerComponent', 'skipProfileSelectComponent'],
  methods: {
    previousInterestsPickerComponent() {
      this.$emit('previousInterestsPickerComponent')
    },
    skipProfileSelectComponent() {
      this.$emit('skipProfileSelectComponent')
    },
    removeFile(e) {
      this.isUploaded = null
    },
    async handleFileChange(e) {
  try {
    const target = e.target as HTMLInputElement;
    const file = target.files[0];

    if (file) {
      if (!file.type.startsWith('image/')) {
        this.$notify({
          title: this.$t('please_choose_valid_image'),
          component: {
            template: `
              <div class="flex items-center gap-[12px]">
                <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
                <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px']">{{$t('invalid_password_confirmation')}}</p>
              </div>
              <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
            `
          }
        });
        return;
      }

      const reader = new FileReader();

      reader.onload = (event) => {
        const e = event as ProgressEvent<FileReader>;
        const imageElement = document.getElementById('profile-image-update') as HTMLImageElement;
        if (e.target && typeof e.target.result === 'string') {
          const imageUrl = URL.createObjectURL(file);
          imageElement.src = imageUrl;
          // Remember to release the object URL when it's no longer needed.
          // URL.revokeObjectURL(imageUrl);
          console.log(e.target.result);
        }
      };

      reader.onerror = () => {
        console.error('Error occurred while reading the file.');
      };

      await new Promise((resolve) => {
        reader.onloadend = resolve;
        reader.readAsDataURL(file);
      });
    }
  } catch (error) {
    console.error('An error occurred while handling the file:', error);
  }
},
    handleSubmit() {
      if (this.isUploaded) {
        this.$emit('nextLocationPickerComponent')
      } else {
        this.$notify({
          title: this.$t('please_upload_profile_image'),
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
