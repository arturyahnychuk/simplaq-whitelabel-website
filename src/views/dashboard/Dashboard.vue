<template>
  <HeaderComponent />

  <div class="bg-gray">
    <div class="w-full relative flex py-[16px] max-w-[1600px] mx-auto px-[25px] gap-[40px]">
      <DashboardSidebar />
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import DashboardSidebar from '@/components/dashboard/sidebar/Sidebar.vue'
import LoaderComponenent from '@/components/loader/Loader.vue'
import { useLoaderStore } from '@/stores/loader'
/* vue use head */
import { useHead } from '@vueuse/head'
export default {
  name: 'Profile',
  data() {
    return {}
  },
  components: {
    HeaderComponent,
    DashboardSidebar,
    LoaderComponenent
  },
  computed: {
    loader(): boolean {
      return useLoaderStore().isLoading
    }
  },
  setup() {
    useHead({
      title: 'Galerie Harfa Mall - My Profile',
      meta: [
        {
          name: 'description',
          content: 'Manage your profile on the Galerie Harfa Mall platform.'
        },
        {
          property: 'og:title',
          content: 'Galerie Harfa Mall - My Profile'
        },
        {
          property: 'og:description',
          content: 'Manage your profile on the Galerie Harfa Mall platform.'
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
