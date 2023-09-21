<template>
  <div class="w-full bg-gray">
    <div class="relative w-full bg-gray">
      <div class="w-full max-w-[1600px] mx-auto px-[25px] py-[21px] flex items-center gap-[8px]">
        <RouterLink :to="{ name: $Routes.HOME }">
          <img src="@/assets/imgs/logo-notitle.svg" class="w-[29px]" alt="" />
        </RouterLink>

        <RouterLink :to="{name: item.routeName}" class="flex items-center gap-[16px]" v-for="(item, index) in pagesArr" :key="index">
          <Icon icon="octicon:chevron-right-24" class="text-lg text-grayDark2" />
          <p class="font-semibold text-sm text-black leading-[20px] tracking-[-0.2px]">{{ item.page }}</p>
        </RouterLink>

        <Icon v-if="currentPage" icon="octicon:chevron-right-24" class="text-lg text-grayDark2" />
        <p v-if="currentPage" class="font-semibold text-sm text-grayDark leading-[20px] tracking-[-0.2px]">{{ currentPage }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface PagesArr {
  page: string,
  routeName: string,
}
export default {
  props: {
    pagesArr: {
      required: true,
      type: Array as ()=> PagesArr[],
    },
    currentPage: {
      required: false,
      type: String
    },
    routerLink: {
      required: false,
      type: String,
    },
  },
}
</script>
