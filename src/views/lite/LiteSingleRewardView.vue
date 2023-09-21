<template>
    <HeaderComponent/>
    <BreadcrumbComponent :pagesArr="pagesArr" currentPage="Gift Card Sturbucks"/>

    <SingleRewardCardComponent />
    <SignleRewardCardsComponent />
    <SubscribeComponent  />
    <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from '@/components/layouts/HeaderComponent.vue';
import FooterComponent from '@/components/layouts/FooterComponent.vue';
import SingleRewardCardComponent from '@/components/lite-pages/SingleRewardCardComponent.vue';
import SignleRewardCardsComponent from '@/components/lite-pages/SignleRewardCardsComponent.vue';
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'


import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'

/* vue use head */
import { useHead } from '@vueuse/head'

interface PagesArr {
  page: string,
  routeName: string,
}

export default {
    name: "Lite",
    components: {
        HeaderComponent,
        BreadcrumbComponent,
        FooterComponent,
        SingleRewardCardComponent,
        SignleRewardCardsComponent,
        SubscribeComponent ,
    },
    data() {
      return {
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
    title: 'My Rewards - Galerie Harfa Mall',
    meta: [
      {
        name: 'description',
        content: 'View your current reward on the Galerie Harfa Mall - My Rewards page. Check the terms and conditions associated with the reward and discover other rewards you may also like.'
      },
      {
        property: 'og:title',
        content: 'Galerie Harfa Mall - My Rewards'
      },
      {
        property: 'og:description',
        content: 'View your current reward on the Galerie Harfa Mall - My Rewards page. Check the terms and conditions associated with the reward and discover other rewards you may also like.'
      },
      {
        property: 'og:image',
        content: 'image.jpg'
      }
    ]
  });
    }
}
</script>