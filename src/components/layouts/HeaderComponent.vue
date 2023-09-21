<template>
  <header class="w-full relative">
    <div class="max-w-[1600px] mx-auto px-[25px]">
      <div class="header_top py-[16px] border-b-[1px] border-gray flex items-center justify-between">
        <div class="header_top-left flex items-center gap-[40px]">
          <RouterLink :to="{ name: $Routes.HOME }" class="lg:flex brand hidden items-center">
            <img class="w-[112px]" src="@/assets/logo.svg" alt="logo" />
          </RouterLink>
          <div class="header_btns flex items-center gap-[8px]">
            <button
              class="flex lg:hidden items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all"
            >
              <Icon icon="ion:menu-outline" class="text-xl" />
            </button>
            <button
              class="flex items-center justify-center min-w-[48px] min-h-[48px] gap-[8px] lg:px-[24px] lg:py-[12px] bg-gray rounded-full lg:rounded-[16px] opacity-80 hover:opacity-100 transition-all"
            >
              <Icon icon="ri:search-2-line" class="text-xl text-black" />

              <p class="hidden lg:block text-sm text-black font-semibold">{{ $t('search') }}</p>
            </button>

            <button
              class="flex items-center justify-center min-w-[48px] min-h-[48px] gap-[8px] md:px-[24px] md:py-[12px] bg-gray rounded-full md:rounded-[16px] opacity-80 hover:opacity-100 transition-all"
            >
              <Icon icon="solar:streets-map-point-bold" class="text-xl text-pink" />

              <p class="hidden md:block text-sm text-black font-semibold">{{ $t('floorplan') }}</p>
            </button>
          </div>
        </div>
        <a href="#" class="lg:hidden brand flex items-center">
          <img class="w-[112px] hidden md:block" src="@/assets/logo.svg" alt="logo" />
          <img class="w-[38px] hidden sm:block md:hidden" src="@/assets/imgs/logo-notitle.svg" alt="logo" />
        </a>
        <div v-if="!userStore.token" class="header_top-right flex items-center gap-[8px]">
          <button
            class="hidden lg:flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all"
          >
            <Icon icon="ph:chats-circle-light" class="text-xl text-black" />
          </button>
          <button
            class="hidden lg:flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all"
          >
            <Icon icon="clarity:notification-line" class="text-xl text-black" />
          </button>

          <router-link
            :to="{ name: $Routes.LOGIN }"
            class="px-[26px] py-[13px] min-w-[120px] flex items-center justify-center rounded-[16px] transparent border-[1px] border-graylight text-sm font-semibold transition-all"
            >{{ $t('login') }}
          </router-link>
          <a
            @click.prevent="termsAndConditions"
            href="#"
            class="px-[26px] py-[13px] min-w-[120px] hidden md:flex items-center justify-center rounded-[16px] transparent border-[1px] border-transparent text-sm font-semibold bg-orange text-white transition-all"
            >{{ $t('create_account') }}</a
          >
        </div>
        <div v-else class="relative header_top-right flex items-center gap-[8px]">
          <button
            @click="openFavorites"
            :titleIs="$t('favorites')"
            :class="activeFavorites ? 'bg-yellowLight' : 'bg-gray'"
            class="header_notification_button relative hidden sm:flex items-center justify-center gap-[8px] w-[48px] h-[48px] rounded-full opacity-80 hover:opacity-100 transition-all before:content-[attr(titleIs)] before:absolute before:top-[calc(100%+14px)] before:z-50 before:bg-black before:px-[16px] before:py-[8px] before:text-white before:font-medium before:text-xs before:tracking-[-0.2px] before:rounded before:invisible after:absolute after:w-[12px] after:h-[12px] after:bg-black after:rotate-45 after:top-[calc(100%+12px)] after:invisible hover:after:visible hover:before:visible transition-all before:delay-300 after:delay-300 before:transition-all after:transition-all"
          >
            <Icon icon="iconamoon:heart-thin" :class="activeFavorites ? 'text-orange' : 'text-black'" class="text-xl" />
          </button>

          <button
            class="hidden sm:flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all"
          >
            <Icon icon="ph:chats-circle-light" class="text-xl text-black" />
          </button>

          <button
            @click="openNotifications"
            :titleIs="$t('notifications')"
            :class="activeNotifications ? 'bg-yellowLight' : 'bg-gray'"
            class="header_notification_button relative hidden sm:flex items-center justify-center gap-[8px] w-[48px] h-[48px] rounded-full transition-all before:content-[attr(titleIs)] before:absolute before:top-[calc(100%+14px)] before:z-50 before:bg-black before:px-[16px] before:py-[8px] before:text-white before:font-medium before:text-xs before:tracking-[-0.2px] before:rounded before:invisible after:absolute after:w-[12px] after:h-[12px] after:bg-black after:rotate-45 after:top-[calc(100%+12px)] after:invisible hover:after:visible hover:before:visible transition-all before:delay-300 after:delay-300 before:transition-all after:transition-all"
          >
            <Icon icon="clarity:notification-line" :class="activeNotifications ? 'text-orange' : 'text-black'" class="text-lg" />
            <div v-if="notification" class="w-[8px] h-[8px] bg-orange rounded-full absolute top-[11px] right-[11px]"></div>
          </button>

          <button @click="openProfileMenu" class="flex items-center gap-[8px] header_notification_button">
            <div class="flex items-end flex overflow-hidden justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full">
              <img class="w-[80%]" src="@/assets/imgs/profile.svg" alt="" />
            </div>
            <Icon
              :class="activeProfileMenu ? 'rotate-180' : ''"
              icon="octicon:chevron-down-24"
              class="text-lg text-grayDark2 transition-all"
            />
          </button>

          <HeaderNotifications v-if="activeNotifications" :showNotifications="notification" />
          <HeaderFavorites v-if="activeFavorites" :isFavorites="favorites" />
          <ProfileMenu v-if="activeProfileMenu" @closeProfileMenu="closeProfileMenu" />
        </div>
      </div>
      <div class="lg:flex hidden header_bot mt-[20px] pb-[22px] items-center justify-between">
        <nav class="relative nav">
          <ul class="nav-list flex items-center gap-[40px]">
            <li @click="handleNavDropdown" @mouseenter="handleNavItemMouseEnter" class="nav-item" :nav-menu-item="NavLinkTabs.SHOP">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="solar:bag-4-bold" class="text-xl text-pink" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('shop') }}</p>
                <Icon icon="octicon:chevron-down-24" class="chevron text-lg text-grayDark2 transition-all" />
              </a>
            </li>
            <li @click="handleNavDropdown" @mouseenter="handleNavItemMouseEnter" class="nav-item" :nav-menu-item="NavLinkTabs.DINE">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="bxs:dish" class="text-xl text-orange" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('dine') }}</p>
                <Icon icon="octicon:chevron-down-24" class="chevron text-lg text-grayDark2 transition-all" />
              </a>
            </li>
            <li @click="handleNavDropdown" @mouseenter="handleNavItemMouseEnter" class="nav-item" :nav-menu-item="NavLinkTabs.ENTERTAIN">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="solar:ticket-bold" class="text-xl text-green" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('entertain') }}</p>
                <Icon icon="octicon:chevron-down-24" class="chevron text-lg text-grayDark2 transition-all" />
              </a>
            </li>
            <li @click="handleNavDropdown" @mouseenter="handleNavItemMouseEnter" class="nav-item" :nav-menu-item="NavLinkTabs.SERVICES">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="fluent:vehicle-car-28-filled" class="text-xl text-yellow" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('services') }}</p>
                <Icon icon="octicon:chevron-down-24" class="chevron text-lg text-grayDark2 transition-all" />
              </a>
            </li>
            <li @click="handleNavDropdown" @mouseenter="handleNavItemMouseEnter" class="nav-item" :nav-menu-item="NavLinkTabs.REWARDS">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="ion:gift" class="text-xl text-purple" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('rewards') }}</p>
                <Icon icon="octicon:chevron-down-24" class="chevron text-lg text-grayDark2 transition-all" />
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-[8px]">
          <a href="#">
            <Icon icon="ri:app-store-fill" class="text-xl text-blue" />
          </a>
          <a href="#">
            <Icon icon="logos:google-play-icon" class="text-lg text-blue" />
          </a>
          <p class="text-sm text-black font-bold">{{ $t('download_mobile_app') }}</p>
        </div>
      </div>
    </div>
    <NavLinkDropdown :active="navMenuTab" v-if="navMenuTab !== null">
      <template #content>
        <ShopTabDropdown v-if="navMenuTab === NavLinkTabs.SHOP" />
        <DinetabDropdown v-if="navMenuTab === NavLinkTabs.DINE" />
        <EntertaintabDropdown v-if="navMenuTab === NavLinkTabs.ENTERTAIN" />
        <ServicestabDropdown v-if="navMenuTab === NavLinkTabs.SERVICES" />
        <RewardstabDropdown v-if="navMenuTab === NavLinkTabs.REWARDS" />
      </template>
    </NavLinkDropdown>
  </header>
  <TermsAndConditionsComponent :notificationsElement="true" @cancelTerms="cancelTerms" v-if="termsAndConditionsModal" />
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user/user'
import { NavLinkTabs } from '@/enums/navLink/navLinkTabs'
import HeaderNotifications from '@/components/popups/notifications/HeaderNotifications.vue'
import HeaderFavorites from '@/components/popups/favorites/FavoritesComponent.vue'
import ProfileMenu from '@/components/popups/profileMenuComponent.vue'
import NavLinkDropdown from '@/components/dropdowns/header/navLinkDropdown.vue'
import ShopTabDropdown from '@/components/dropdowns/header/tabs/shopTabDropdown.vue'
import DinetabDropdown from '@/components/dropdowns/header/tabs/dineTabDropdown.vue'
import EntertaintabDropdown from '@/components/dropdowns/header/tabs/entertainTabDropdown.vue'
import ServicestabDropdown from '@/components/dropdowns/header/tabs/servicesTabDropdown.vue'
import RewardstabDropdown from '@/components/dropdowns/header/tabs/rewardsTabDropdown.vue'

import TermsAndConditionsComponent from '@/components/modals/terms&conditions/termsAndConditionsComponent.vue'

export default {
  name: 'Header',
  components: {
    HeaderNotifications,
    HeaderFavorites,
    ProfileMenu,

    TermsAndConditionsComponent,
    NavLinkDropdown,
    ShopTabDropdown,
    DinetabDropdown,
    EntertaintabDropdown,
    ServicestabDropdown,
    RewardstabDropdown
  },
  data() {
    return {
      userStore: useUserStore(),
      NavLinkTabs: NavLinkTabs,
      navMenuTab: null as null | string,
      activeNotifications: false as boolean,
      activeFavorites: false as boolean,
      activeProfileMenu: false as boolean,

      notification: false as boolean,
      favorites: true as boolean,

      termsAndConditionsModal: false as boolean
    }
  },
  methods: {
    handleNavItemMouseEnter(e: Event) {
      if(this.navMenuTab !== null) {
        const target = e.target
        const currentDropdown = target.closest('[nav-menu-item]').getAttribute('nav-menu-item')
        this.toggleActiveOnNavLinks(target)
        this.navMenuTab = currentDropdown
      }
    },
    toggleActiveOnNavLinks: (target: Element)=> {
      document.querySelectorAll('[nav-menu-item]').forEach((item) => {
        item.classList.remove('active')
      })
      target.closest('[nav-menu-item]').classList.add('active')
    },
    handleNavDropdown(e: Event) {
      const target = e.target as Element
      const currentDropdown = target.closest('[nav-menu-item]').getAttribute('nav-menu-item')
      if (this.navMenuTab !== currentDropdown) {
        this.navMenuTab = currentDropdown
        this.toggleActiveOnNavLinks(target)
      } else {
        document.getElementById('dropdown').style.height = '0px'
        // setTimeout(() => {
        //   this.navMenuTab = null
        // }, 300)
        this.$nextTick(()=> {
          this.navMenuTab = null
        })
        document.querySelectorAll('[nav-menu-item]').forEach((item) => {
        item.classList.remove('active')
      })
      }
    },
    cancelTerms() {
      this.termsAndConditionsModal = false
    },
    openNotifications() {
      this.activeNotifications = !this.activeNotifications
      // close other Notifications
      this.activeFavorites = false
      this.activeProfileMenu = false
    },
    openFavorites() {
      this.activeFavorites = !this.activeFavorites
      // close other NotificationsAnd
      this.activeNotifications = false
      this.activeProfileMenu = false
    },
    openProfileMenu() {
      this.activeProfileMenu = !this.activeProfileMenu
      // close other Notifications
      this.activeNotifications = false
      this.activeFavorites = false
    },
    closeProfileMenu() {
      this.activeProfileMenu = false
    },
    termsAndConditions() {
      this.termsAndConditionsModal = true
    }
  },
  mounted() {
    document.addEventListener('click', (e: Event) => {
      const target = e.target as Element
      if (!target.closest('.header_notification_button') && !target.closest('.header_notifications_wrapper')) {
        this.activeNotifications = false
        this.activeFavorites = false
        this.activeProfileMenu = false
      }

      if(!e.target.closest('.nav-item') && !e.target.closest('#dropdown')) {
        if(document.getElementById('dropdown')) {
          document.getElementById('dropdown').style.height = '0px'
        setTimeout(() => {
          this.navMenuTab = null
        }, 300)
        document.querySelectorAll('[nav-menu-item]').forEach((item) => {
        item.classList.remove('active')
        })
        }
      }
    })
  },
  // computed: {
  //   userStore(): { data: any; token: string } {
  //     return useUserStore()
  //   }
  // }
}
</script>
