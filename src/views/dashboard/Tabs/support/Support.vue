<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('support') }}</h6>

    <div class="w-full h-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <div v-if="!isChat" class="min-h-[calc(100vh-325px)] flex flex-col items-center justify-center">
        <div
          class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
        >
          <img class="w-full max-w-[136px]" src="@/assets/imgs/support.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px] max-w-[328px]">
          <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t('welcome_to_support_center') }}</p>
          <p class="text-grayDark text-sm font-regular leading-[24px] text-center tracking-[-0.1px]">
            {{ $t('welcome_to_support_center_text') }}
          </p>
          <div
            @click="openSupportModal"
            class="mt-[16px] w-full py-[19px] px-[15px] bg-orange text-white font-semibold text-sm leading-[20px] tracking-[-0.2px] rounded-[20px] text-center cursor-pointer"
          >
            {{ $t('contact_support') }}
          </div>
        </div>
      </div>
      <div v-else class="h-full min-h-[calc(100vh-325px)]">
        <Chat />
      </div>
    </div>
  </div>
  <Contact_supportComponent @closeModal="closeSupportModal" v-if="contactSupportShow" />
</template>

<script lang="ts">
import Contact_supportComponent from '@/components/modals/contact_support/contact_supportComponent.vue'
import Chat from '@/components/dashboard/support/Chat.vue'

/* vue use head */
import { useHead } from '@vueuse/head'
export default {
  name: 'SupportTab',
  data() {
    return {
      isChat: true as boolean,
      contactSupportShow: false as boolean
    }
  },

  components: {
    Contact_supportComponent,
    Chat,
  },

  methods: {
    openSupportModal() {
      this.contactSupportShow = true
    },
    closeSupportModal() {
      this.contactSupportShow = false
    }
  },

  setup() {
    useHead({
      title: 'Support - Galerie Harfa Mall',
      meta: [
        {
          name: 'description',
          content:
            'Contact support for assistance and send messages to the Galerie Harfa Mall support team. Create a live chat session to get real-time help and resolve any queries or issues.'
        },
        {
          property: 'og:title',
          content: 'Support - Galerie Harfa Mall'
        },
        {
          property: 'og:description',
          content:
            'Contact support for assistance and send messages to the Galerie Harfa Mall support team. Create a live chat session to get real-time help and resolve any queries or issues.'
        },
        {
          property: 'og:image',
          content: 'image.jpg'
        }
      ]
    })
  }
}
</script>
