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
    <div class="w-full h-full flex justify-center overflow-auto sm:py-[30px] bg-white sm:bg-transparent">
      <div
        class="w-full max-w-[664px] min-h-[542px] flex items-center h-full sm:h-max px-[40px] py-[40px] my-auto bg-white sm:rounded-[24px]"
      >
        <div v-if="!formSended" class="w-full h-full">
          <div class="flex items-center justify-between pb-[16px]">
            <div class="flex flex-col gap-[4px]">
              <h6 class="text-lg font-bold leading-[26px] tracking-[-0.4px] text-black">{{ $t('contact_support') }}</h6>
              <p class="text-grayDark text-sm leading-[24px] tracking-[0.1px] font-normal">{{ $t('please_describe_the_issue_below') }}</p>
            </div>

            <div
              @click="this.$emit('closeModal')"
              class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer"
            >
              <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />

            </div>
          </div>

          <form class="flex flex-col gap-[8px] w-full" id="my-dropzone">
            <div v-if="!userStore.token" class="grid sm:grid-cols-2 gap-[8px]">
              <div
                :class="!isEmailTouched ? 'border-transparent' : isEmailTouched && validateEmail ? 'border-green' : 'border-orange'"
                class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]"
              >
                <div>
                  <Icon icon="tabler:mail" class="text-lg text-black" />
                </div>
                <div class="flex flex-col gap-[2px]">
                  <input
                    @input="emailTouched"
                    type="text"
                    id="email"
                    :placeholder="$t('email')"
                    v-model="userData.email"
                    @keydown.enter.prevent="handleSubmit"
                    class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
                  />
                </div>
                <div>
                  <Icon v-if="validateEmail" icon="bi:check" class="text-lg text-green" />
                </div>
              </div>

              <div
                :class="!isNameTouched ? 'border-transparent' : isNameTouched && validateName ? 'border-green' : 'border-orange'"
                class="items-center gap-[12px] grid border-[1px] grid-cols-[20px,auto,20px] px-[20px] bg-gray rounded-[16px]"
              >
                <div>
                  <Icon icon="solar:shield-user-outline" class="text-lg text-black" />
                </div>
                <div class="flex flex-col gap-[2px]">
                  <input
                    @input="nameTouched"
                    type="text"
                    id="full_name"
                    :placeholder="$t('full_name')"
                    @keydown.enter.prevent="handleSubmit"
                    v-model="userData.name"
                    class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
                  />
                </div>
                <div>
                  <Icon v-if="validateName" icon="bi:check" class="text-lg text-green" />
                </div>
              </div>
            </div>

            <div
              :class="!isMessageTouched ? 'border-transparent' : isMessageTouched && validateMessage ? 'border-green' : 'border-orange'"
              class="items-start gap-[12px] py-[22px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]"
            >
              <div>
                <Icon icon="majesticons:comment-text-line" class="text-lg text-black" />
              </div>
              <div class="flex flex-col gap-[2px]">
                <textarea
                  maxlength="150"
                  @input="messageTouched"
                  type="text"
                  @keydown.enter.prevent="handleSubmit"
                  id="email"
                  :placeholder="$t('message')"
                  v-model="userData.message"
                  class="h-[100px] text-black font-medium resize-none bg-transparent outline-none text-sm leading-[20px]"
                ></textarea>
              </div>
              <div>
                <Icon v-if="validateMessage" icon="bi:check" class="text-lg text-green" />
              </div>
            </div>
            <div class="w-max rounded-full bg-gray px-[6px] py-[2px] font-medium text-black text-s leading-[16px]">
              {{ userData.message.length }}/150
            </div>

            <div class="flex gap-[12px]">
              <dropzone>
                <!-- Custom slot template for dropzone area -->
                <div class="custom-dropzone">
                  <!-- Add your custom design for the dropzone area -->
                </div>
              </dropzone>

              <DropzondeVideo>
                <!-- Custom slot template for dropzone area -->
                <div class="custom-dropzone">
                  <!-- Add your custom design for the dropzone area -->
                </div>
              </DropzondeVideo>
            </div>

            <div class="dropzone-previews flex flex-wrap gap-[12px] mt-[8px]"></div>

            <div class="flex gap-[8px] mt-[24px] w-full items-center justify-center">
              <button
                type="button"
                @click="this.$emit('closeModal')"
                class="border-[1px] w-full border-graylight bg-transparent rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black"
              >
                {{ $t('cancel') }}
              </button>
              <button
                @click="handleSubmit"
                type="submit"
                :class="readyForSubmit ? 'bg-orange text-white cursor-pointer' : 'bg-gray text-grayDark cursor-default'"
                class="border-[1px] border-transparent w-full rounded-[12px] px-[24px] py-[17px] text-sm font-semibold"
              >
                {{ $t('submit') }}
              </button>
            </div>
          </form>
        </div>
        <div v-else class="w-full h-full">
          <div class="flex flex-col items-center gap-[24px] justify-center h-full">
            <div class="w-full flex flex-col gap-[24px] items-center justify-center">
              <div class="flex flex-col">
                <div class="flex max-w-[136px] w-full">
                  <img src="@/assets/imgs/messageSent.svg" alt="" />
                </div>
              </div>
              <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
                <h6 class="text-black font-bold text-center text-xl capitalize">{{ $t('message_sent') }}</h6>
                <p class="font-normal text-sm text-grayDark2 leading-[24px] text-capitalize tracking-[0.1px] text-center">
                  {{ $t('thank_you_for_contacting_support_we_will_get_back_to_you_as_soon_as_possible') }}
                </p>
              </div>
            </div>

            <div class="flex flex-col gap-[8px] w-full max-w-[360px]">
              <div class="flex flex-col gap-[8px]">
                <button
                  class="bg-orange border-[1px] border-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
                >
                  {{ $t('done') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Dropzone from '@/components/dropzone/DropzoneComponent.vue'
import DropzondeVideo from '@/components/dropzone/DropzoneVideoComponent.vue'

import { useUserStore } from '@/stores/user/user'

interface UserData {
  name: string
  email: string
  message: string
}
export default {
  name: 'contact-support',
  data() {
    return {
      formSended: false,

      userData: {
        name: '',
        email: '',
        message: ''
      } as UserData,
      isNameTouched: false as boolean,
      isEmailTouched: false as boolean,
      isMessageTouched: false as boolean
    }
  },
  components: {
    Dropzone,
    DropzondeVideo
  },

  computed: {
    readyForSubmit(): boolean {
      if (this.userStore.token) {
        if (this.userData.message.length !== 0 && this.userData.message.length <= 150) {
          return true
        } else {
          return false
        }
      } else {
        if (
          this.userData.name.length === 0 ||
          this.userData.email.length === 0 ||
          (this.userData.message.length === 0 && this.userData.message.length <= 150)
        ) {
          return false
        } else {
          return true
        }
      }
    },
    userStore(): { data: any; token: string } {
      return useUserStore()
    },
    validateName(): boolean {
      const trimmedName = this.userData.name.trim() // trim() removes leading and trailing whitespace characters from a string.
      return trimmedName.length > 0
    },
    validateEmail(): boolean {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailPattern.test(this.userData.email)
    },
    validateMessage(): boolean {
      const trimmedMessage = this.userData.message.trim()
      return trimmedMessage.length > 0 && trimmedMessage.length <= 150
    }
  },
  emits: ['closeModal'],
  methods: {
    uploadedFile(e: Event) {
      console.log(e)
    },
    nameTouched() {
      this.isNameTouched = true
    },
    emailTouched() {
      this.isEmailTouched = true
    },
    messageTouched() {
      this.isMessageTouched = true
    },
    handleSubmit(e: Event) {
      e.preventDefault()
      this.isNameTouched = true
      this.isEmailTouched = true
      this.isMessageTouched = true

      if (this.userStore.token) {
        if (this.userData.message.length === 0) {
          this.$notify({
            title: this.$t('please_fill_message_field'),
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
          console.log('submit')
        }
      } else {
        if (this.userData.name.length === 0 || this.userData.email.length === 0 || this.userData.message.length === 0) {
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
        } else {
          if (!this.validateEmail) {
            this.$notify({
              title: this.$t('please_enter_valid_email'),
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
            console.log('submit')
          }
        }
      }
    }
  }
}
</script>
@/stores/user/user
