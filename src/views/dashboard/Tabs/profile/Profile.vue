<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px]">
    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('profile') }}</h6>

    <div class="w-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <Accordion :activeIs="activeAccordionIs" @accordionClicked="accordionClicked" icon="solar:user-linear" :title="$t('personal_data')">
        <ProfilePersonalData v-if="activeAccordionIs && activeAccordionIs === `${$t('personal_data')}`" />
      </Accordion>

      <Accordion
        :activeIs="activeAccordionIs"
        @accordionClicked="accordionClicked"
        icon="solar:lock-keyhole-minimalistic-linear"
        :title="$t('change_password')"
      >
        <ProfilePasswordChange
          @cancelBtn="cancelBtn"
          v-if="activeAccordionIs && activeAccordionIs === `${$t('change_password')}`"
        />
      </Accordion>

      <Accordion
        :activeIs="activeAccordionIs"
        @accordionClicked="accordionClicked"
        icon="clarity:notification-line"
        :title="$t('notifications')"
      >
        <ProfileNotificationsToggle v-if="activeAccordionIs && activeAccordionIs === `${$t('notifications')}`" />
      </Accordion>

      <Accordion :activeIs="activeAccordionIs" @accordionClicked="accordionClicked" icon="carbon:user-avatar" :title="$t('interests')">
        <ProfileInterests v-if="activeAccordionIs && activeAccordionIs === `${$t('interests')}`" />
      </Accordion>

      <Accordion
        :activeIs="activeAccordionIs"
        @accordionClicked="accordionClicked"
        icon="icons8:add-user"
        :title="$t('connected_accounts')"
      >
        <ProfileConnectedAccounts v-if="activeAccordionIs && activeAccordionIs === `${$t('connected_accounts')}`" />
      </Accordion>

      <div
        @click="deleteAccount"
        class="w-full flex items-center justify-between rounded-[16px] border-[1px] border-gray pl-[12px] py-[8px] pr-[20px] cursor-pointer"
      >
        <div class="flex items-center gap-[12px]">
          <div class="icon flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all">
            <Icon icon="fluent:delete-28-regular" class="text-lg text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px] capitalize">{{ $t('delete_account') }}</p>
        </div>
      </div>
      <div
        @click="logout"
        class="w-full flex items-center justify-between rounded-[16px] border-[1px] border-gray pl-[12px] py-[8px] pr-[20px] cursor-pointer"
      >
        <div class="flex items-center gap-[12px]">
          <div class="icon flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all">
            <Icon icon="solar:logout-linear" class="text-lg text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px] capitalize">{{ $t('log_out') }}</p>
        </div>
      </div>
    </div>
  </div>

  <DeleteAccount @cancelDeleteAccount="cancelDeleteAccount" v-if="activeDeleteAccount" />
  <Logout @cancelLogout="cancelLogout" v-if="activeLogout" />
</template>

<script lang="ts">
import Accordion from '@/components/accordion/AccordionComponent.vue'
import ProfilePersonalData from '@/components/dashboard/profile/personal_data/PersonalData.vue'
import ProfilePasswordChange from '@/components/dashboard/profile/change_password/ChangePassword.vue'
import ProfileNotificationsToggle from '@/components/dashboard/profile/notifications/Notifications.vue'
import ProfileInterests from '@/components/dashboard/profile/interests/Interests.vue'
import ProfileConnectedAccounts from '@/components/dashboard/profile/connected_accounts/ConnectedAccounts.vue'
import DeleteAccount from '@/components/dashboard/profile/delete/DeleteAccount.vue'
import Logout from '@/components/modals/logoutComponent.vue'

/* vue use head */
import { useHead } from '@vueuse/head'
export default {
  name: 'ProfileTab',
  data() {
    return {
      activeDeleteAccount: false as boolean,
      activeLogout: false as boolean,

      activeAccordionIs: this.$t('connected_accounts') as string
    }
  },
  components: {
    Accordion,
    ProfilePersonalData,
    ProfilePasswordChange,
    ProfileNotificationsToggle,
    ProfileInterests,
    ProfileConnectedAccounts,
    DeleteAccount,
    Logout
  },
  methods: {
    accordionClicked(activeAccordion) {
      if (this.activeAccordionIs === activeAccordion) {
        this.activeAccordionIs = ''
      } else {
        this.activeAccordionIs = activeAccordion
      }
    },
    cancelBtn() {
      this.activeAccordionIs = ''
    },
    deleteAccount() {
      this.activeDeleteAccount = true
    },
    cancelDeleteAccount() {
      this.activeDeleteAccount = false
    },
    logout() {
      this.activeLogout = true
    },
    cancelLogout() {
      this.activeLogout = false
    }
  },
  setup() {
    useHead({
      title: 'Profile settings - Galerie Harfa Mall',
      meta: [
        {
          name: 'description',
          content:
            'Manage your profile on the Galerie Harfa Mall platform. Update your personal data, change your password, manage notifications and interests, connect accounts, and perform actions like deleting your account or logging out.'
        },
        {
          property: 'og:title',
          content: 'Galerie Harfa Mall - My Profile'
        },
        {
          property: 'og:description',
          content:
            'Manage your profile on the Galerie Harfa Mall platform. Update your personal data, change your password, manage notifications and interests, connect accounts, and perform actions like deleting your account or logging out.'
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
