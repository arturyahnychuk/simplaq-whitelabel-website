<template>
    <LiteHeader/>

    <LiteReceiptsComponent v-if="authorized"/>

    <LiteHeroComponent v-if="!authorized" />
    <LiteCardsComponent />
    <LiteMyRewardsComponent v-if="authorized"/>
    <LiteFooterComponent />
    <!-- <UploadReceiptComponent /> -->
</template>

<script lang="ts">
import LiteHeader from '@/components/lite-pages/layouts/LiteHeader.vue';
import LiteHeroComponent from '@/components/lite-pages/LiteHeroComponent.vue';
import LiteCardsComponent from '@/components/lite-pages/cards/LiteCardsComponent.vue';
import LiteFooterComponent from '@/components/lite-pages/layouts/LiteFooterComponent.vue';
import LiteReceiptsComponent from '@/components/lite-pages/LiteReceiptsComponent.vue';
import UploadReceiptComponent from '@/components/lite-pages/UploadReceiptComponent.vue';
import LiteMyRewardsComponent from '@/components/lite-pages/cards/LiteMyRewardsComponent.vue';

/* vue use head */
import { useHead } from '@vueuse/head'

export default {
    name: "Lite",
    data() {
        return {
            authorized: true as boolean,
        }
    },
    setup() {
        useHead({
    title: 'Receipts and Rewards - Galerie Harfa Mall',
    meta: [
      {
        name: 'description',
        content: 'View and manage your receipts on the Galerie Harfa Mall Lite Page. Filter receipts by status (All, Approved, Rejected, Pending Approval) and upload your receipt. Explore the rewards section to redeem your rewards.'
      },
      {
        property: 'og:title',
        content: 'Galerie Harfa Mall Lite Page - Receipts and Rewards'
      },
      {
        property: 'og:description',
        content: 'View and manage your receipts on the Galerie Harfa Mall Lite Page. Filter receipts by status (All, Approved, Rejected, Pending Approval) and upload your receipt. Explore the rewards section to redeem your rewards.'
      },
      {
        property: 'og:image',
        content: 'image.jpg'
      }
    ]
  });
    },
    components: {
        LiteHeader,
        LiteHeroComponent,
        LiteCardsComponent,
        LiteFooterComponent,
        UploadReceiptComponent,
        LiteReceiptsComponent,
        LiteMyRewardsComponent,
    }
}
</script>