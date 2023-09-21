<template>
  <div class="w-full h-full grid grid-cols-[323px,auto]">
    <div class="w-full flex flex-col h-full justify-between pr-[20px] border-r border-r-graylight">
      <div class="flex flex-col">
        <div class="w-full grid grid-cols-[50px,auto] bg-gray rounded-[16px] place-items-center mb-[12px]">
          <Icon icon="ri:search-2-line" class="text-xl text-black" />
          <input
            type="text"
            class="w-full h-full py-[14px] bg-transparent outline-none placeholder:text-grayDark text-xs leading-[20px] tracking-[-0.2px]"
            placeholder="Search"
          />
        </div>
        <div class="w-full flex flex-col gap-[12px]">
          <div @click="chatOpened = true" class="w-full flex items-start justify-between pb-[12px] border-b border-b-gray cursor-pointer group transition-all">
            <div class="flex items-center gap-[12px]">
              <div
                :class="chatOpened ? 'bg-yellowLight' : ''"
                class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center group-hover:bg-yellowLight transition-all"
              >
                <Icon
                  icon="tabler:message"
                  :class="chatOpened ? 'text-orange' : ''"
                  class="group-hover:text-orange transition-all text-xl text-black"
                />
              </div>
              <div class="flex flex-col gap-[4px]">
                <p class="font-bold text-black text-sm leading-[20px] transition-all">{{ $t('support') }}</p>
                <p class="font-normal text-grayDark text-xs leading-[20px] tracking-[0.2px]">Can you help me?</p>
              </div>
            </div>
            <p class="font-normal text-grayDark text-xs leading-[20px] tracking-[0.2px]">2 {{ $t('m_ago') }}</p>
          </div>
          <div @click="chatOpened = true" class="w-full flex items-start justify-between pb-[12px] border-b border-b-gray cursor-pointer group transition-all">
            <div class="flex items-center gap-[12px]">
              <div
                class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center group-hover:bg-yellowLight transition-all"
              >
                <Icon icon="tabler:message" class="group-hover:text-orange transition-all text-xl text-black" />
              </div>
              <div class="flex flex-col gap-[4px]">
                <p class="font-bold text-black text-sm leading-[20px] transition-all">{{ $t('support') }}</p>
                <p class="font-normal text-grayDark text-xs leading-[20px] tracking-[0.2px]">Can you help me?</p>
              </div>
            </div>
            <p class="font-normal text-grayDark text-xs leading-[20px] tracking-[0.2px]">2 {{ $t('m_ago') }}</p>
          </div>
        </div>
      </div>
      <button @click="openSupportModal"
        class="w-full bg-orange flex items-center justify-center text-white font-semibold text-sm leading-[20px] tracking-[-0.2px] rounded-[24px] py-[18px]"
      >
        {{ $t('contact_support') }}
      </button>
    </div>
    <div class="w-full h-full">
      <div v-if="!chatOpened" class="w-full h-full flex flex-col items-center justify-center">
        <div
          class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
        >
          <img class="w-full max-w-[136px]" src="@/assets/imgs/notification.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center gap-[8px]">
          <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t('select_chat_to_see_conversation') }}</p>
        </div>
      </div>
      <div v-else class="w-full flex flex-col">
        <div class="w-full">
          <div class="w-full flex flex-col gap-[4px] pb-[20px] border-b border-b-graylight px-[24px]">
            <p class="font-bold text-base text-black leading-[130%]">{{ $t('support') }}</p>
            <p class="font-semibold text-xs text-grayDark leading-[16px]">{{ $t('online') }}</p>
          </div>
          <div class="h-full w-full px-[25px] py-[12px] h-[calc(100vh - 398px)] border-b border-graylight overflow-auto custom-scrollbar">
            <div class="w-full flex items-center justify-center mb-[16px]">
              <div class="py-[4px] px-[16px] rounded-[30px] bg-gray text-s font-normal text-black leading-[16px]">{{ $t('today') }}</div>
            </div>
            <div class="w-full mb-[12px] support">
              <div class="w-full flex justify-start">
                <div class="w-max max-w-[332px] bg-gray rounded-e-[12px] rounded-tl-[12px] bg-gray py-[10px] px-[14px] mb-[8px]">
                  <p class="text-black text-xs font-medium leading-[20px] tracking-[-0.2px]">Hello, good morning</p>
                </div>
              </div>
              <div class="w-full flex justify-start">
                <div class="w-max max-w-[332px] bg-gray rounded-e-[12px] rounded-tl-[12px] bg-gray py-[10px] px-[14px] mb-[8px]">
                  <p class="text-black text-xs font-medium leading-[20px] tracking-[-0.2px]">
                    I am a Customer Service, is there anything I can help you with? 😄
                  </p>
                </div>
              </div>
              <div class="text-grayDark leading-[16px] text-s">12:32</div>
            </div>
            <div class="w-full mb-[12px] client">
              <div class="w-full flex justify-end">
                <div class="w-max max-w-[332px] bg-orange rounded-l-[12px] rounded-tr-[12px] bg-gray py-[10px] px-[14px] mb-[8px]">
                  <p class="text-white text-xs font-medium leading-[20px] tracking-[-0.2px]">Hi, I'm having problems with my rewards</p>
                </div>
              </div>
              <div class="w-full flex justify-end">
                <div class="w-max max-w-[332px] bg-orange rounded-l-[12px] rounded-tr-[12px] bg-gray py-[10px] px-[14px] mb-[8px]">
                  <p class="text-white text-xs font-medium leading-[20px] tracking-[-0.2px]">Can you help me?</p>
                </div>
              </div>

              <div class="text-end text-grayDark leading-[16px] text-s">12:32</div>
            </div>
            <div class="w-full mb-[12px] support">
              <div class="w-full flex justify-start">
                <div class="w-max max-w-[332px] bg-gray rounded-e-[12px] rounded-tl-[12px] bg-gray py-[10px] px-[14px] mb-[8px]">
                  <p class="text-black text-xs font-medium leading-[20px] tracking-[-0.2px]">Of course...</p>
                </div>
              </div>
              <div class="w-full flex justify-start">
                <div class="w-max max-w-[332px] bg-gray rounded-e-[12px] rounded-tl-[12px] bg-gray py-[10px] px-[14px] mb-[8px]">
                  <p class="text-black text-xs font-medium leading-[20px] tracking-[-0.2px]">
                    Can you tell me the problem you are having? so I can help solve it 😁
                  </p>
                </div>
              </div>
              <div class="text-grayDark leading-[16px] text-s">12:32</div>
            </div>
          </div>
        </div>
        <div class="w-full px-[25px] mt-[11px] grid grid-cols-[auto,24px] gap-[12px]">
          <div class="w-full bg-gray grid grid-cols-[50px,auto,50px] rounded-[12px] py-[4px]">
            <div class="cursor-pointer flex items-center justify-center">
              <Icon icon="gridicons:add" class="text-black text-lg" />
            </div>
            <textarea
              :placeholder="$t('type_your_message')"
              @input="adjustTextareaHeight"
              rows="1"
              class="py-[11px] bg-transparent resize-none outline-none text-xs font-normal text-black placeholder:text-grayDark tracking-[0.2px] leading-[20px]"
            ></textarea>
            <div class="cursor-pointer flex items-center justify-center">
              <Icon icon="uil:smile-beam" class="text-grayDark4 text-lg" />
            </div>
          </div>
          <button>
            <Icon icon="iconamoon:send-fill" class="text-xl text-orange"/>
          </button>
        </div>
      </div>
    </div>
  </div>
  <Contact_supportComponent @closeModal="closeSupportModal" v-if="contactSupportShow" />
</template>

<script lang="ts">
import Contact_supportComponent from '@/components/modals/contact_support/contact_supportComponent.vue'

export default {
  name: 'Chat',
  data() {
    return {
      chatOpened: false as boolean,
      message: '' as string,
      contactSupportShow: false as boolean
    }
  },
  components: {
    Contact_supportComponent,
  },
  methods: {
    adjustTextareaHeight(e) {
      const textarea = e.target
      const messageInputMaxHeight = 80
      if (textarea.scrollHeight <= messageInputMaxHeight) {
        textarea.style.height = ''
        textarea.style.height = textarea.scrollHeight + 'px'
      }
    },
    openSupportModal() {
      this.contactSupportShow = true
    },
    closeSupportModal() {
      this.contactSupportShow = false
    }
  }
}
</script>
