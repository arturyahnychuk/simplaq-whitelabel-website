<template>
  <HeaderComponent />
  <BreadcrumbComponent :pagesArr="pagesArr" />
  <RewardsCatalogComponent />
  <SubscribeComponent />
  <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import RewardsCatalogComponent from '@/components/dashboard/rewards/RewardsCatalog.vue'
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'
/* vue use head */
import { useHead } from '@vueuse/head'

interface PagesArr {
  page: string,
  routeName: string,
}

export default {
  name: 'Lite',
  data() {
    return {
      authorized: true as boolean,
      
      pagesArr: [
        {
          page: this.$t('rewards'),
          routeName: this.$Routes.REWARDS
        }
      ] as PagesArr[]
    }
  },
  setup() {
    useHead({
      title: 'Rewards - Galerie Harfa Mall',
      meta: [
        {
          name: 'description',
          content:
            'Explore and discover exclusive offers and weekly updates on the rewards page of Galerie Harfa Mall. Filter rewards by different categories such as all, with payment, and without payment.'
        },
        {
          property: 'og:title',
          content: 'Rewards - Galerie Harfa Mall'
        },
        {
          property: 'og:description',
          content:
            'Explore and discover exclusive offers and weekly updates on the rewards page of Galerie Harfa Mall. Filter rewards by different categories such as all, with payment, and without payment.'
        },
        {
          property: 'og:image',
          content: 'image.jpg'
        }
      ]
    })
  },
  components: {
    HeaderComponent,
    BreadcrumbComponent,
    RewardsCatalogComponent,
    SubscribeComponent,
    FooterComponent,
  }
}
</script>
