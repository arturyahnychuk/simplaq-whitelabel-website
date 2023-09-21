<template>
  <HeaderComponent />
  <BreadcrumbComponent :pagesArr="pagesArr" />

  <div class="relative max-w-[1600px] px-[25px] mx-auto mb-[100px]">
    <div class="w-full flex items-center justify-between mt-[32px] mb-[20px]">
      <h6 class="text-black font-bold text-2xl leading-[28px] tracking-[-0.4px] capitalize">{{ $t('frequently_asked_questions') }}</h6>

      <div class="flex items-center justify-end flex-1 gap-[4px]">
        <div
          @click="openSearch"
          :class="
            searchable
              ? 'w-full max-w-[500px] grid grid-cols-[40px,auto,20px] items-center px-[16px]'
              : 'max-w-[48px] w-[48px] items-center justify-center'
          "
          class="h-[48px] bg-gray rounded-full flex transition-all"
          id="searchToggle"
        >
          <Icon icon="ri:search-2-line" class="text-xl h-full cursor-pointer text-black" />
          <input
            v-if="searchable"
            v-model="searchVal"
            @input="searchQuestion"
            id="search"
            ref="searchInput"
            type="text"
            class="w-full h-full bg-transparent outline-none text-xs text-black font-medium leading-[20px] tracking-[-0.2px] placeholder:text-grayDark"
          />
          <Icon
            @click="clearSearchInput"
            v-if="searchable && searchVal.length !== 0"
            icon="zondicons:close-solid"
            class="text-sm h-full cursor-pointer text-black"
          />
        </div>
      </div>
    </div>
    <div class="w-full grid grid-cols-[300px,auto] gap-[40px] place-items-baseline">
      <FAQSidebar @handleFAQTab="handleFAQTab" />
      <FAQQuestions :questions="dynamicQuestionsArr" />
    </div>
  </div>

  <FAQSupport />
  <FooterComponentVue />
</template>

<script lang="ts">
/* Enums */
import { FaqTabs } from '@/enums/faq/faqTabs'
/* Components */
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import FAQSidebar from '@/components/faq/faqSidebar.vue'
import FAQQuestions from '@/components/faq/questions.vue'
import FAQSupport from '@/components/faq/FAQSupport.vue'
import FooterComponentVue from '@/components/layouts/FooterComponent.vue'

/* vue use head */
import { useHead } from '@vueuse/head'
interface Questions {
  id: number
  title: string
  text: string
  type: string
}

interface PagesArr {
  page: string,
  routeName: string,
}
export default {
  name: 'FAQ',
  components: {
    HeaderComponent,
    BreadcrumbComponent,
    FAQSidebar,
    FAQQuestions,
    FAQSupport,
    FooterComponentVue,
  },
  data() {
    return {
      searchable: false as boolean,
      searchVal: '' as string,
      faqTabs: FaqTabs,

      staticQuestionsArr: [
        {
          id: 0,
          title: 'Mohu používat mobilní aplikaci i bez registrace?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.GENERAL
        },
        {
          id: 1,
          title: 'Mohu používat mobilní aplikaci i bez registrace?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.GENERAL
        },
        {
          id: 2,
          title: 'Mohu používat ?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.GENERAL
        },
        {
          id: 3,
          title: 'Jak proměním body v odměny?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.GENERAL
        },
        {
          id: 4,
          title: 'Jak dlouho platí nasbírané body na mém účtu?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.GENERAL
        },
        {
          id: 5,
          title: 'Jak se mohu zaregistrovat do věrnostního programu OC Novo Plaza?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.GENERAL
        },
        {
          id: 6,
          title: 'Jak se mohu zaregistrovat do věrnostního programu OC Novo Plaza?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.GENERAL
        },

        {
          id: 7,
          title: 'Jak dlouho platí nasbírané body na mém účtu?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.APP_GUIDE
        },
        {
          id: 8,
          title: 'Jak se mohu zaregistrovat do věrnostního programu OC Novo Plaza?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.APP_GUIDE
        },
        {
          id: 9,
          title: 'Jak se mohu zaregistrovat do věrnostního programu OC Novo Plaza?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.APP_GUIDE
        },

        {
          id: 10,
          title: 'Jak dlouho platí nasbírané body na mém účtu?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.ACCOUNT
        },
        {
          id: 11,
          title: 'Jak se mohu zaregistrovat do věrnostního programu OC Novo Plaza?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.ACCOUNT
        },
        {
          id: 12,
          title: 'Jak se mohu zaregistrovat do věrnostního programu OC Novo Plaza?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.ACCOUNT
        },
        {
          id: 13,
          title: 'Jak se mohu zaregistrovat do věrnostního programu OC Novo Plaza?',
          text: 'Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.Aplikaci Novoapka je možné používat i bez registrace, ovšem pouze v omezeném režimu. Zejména nebudete moci využívat výhody věrnostního programu, sbírat body za své nákupy a čerpat odměny na nasbírané body.',
          type: FaqTabs.ACCOUNT
        }
      ] as Questions[],
      dynamicQuestionsArr: [] as Questions[],
      dynamicQuestionsArr2: [] as Questions[],

      pagesArr: [
        {
          page: this.$t('faq'),
          routeName: this.$Routes.FAQ
        }
      ] as PagesArr[]
    }
  },
  mounted() {
    this.dynamicQuestionsArr = this.staticQuestionsArr
    this.dynamicQuestionsArr2 = this.staticQuestionsArr
    document.addEventListener('click', e => {
      const target = e.target as Element
      if (!target.closest('#searchToggle')) {
        this.searchable = false
      }
    })
  },
  methods: {
    searchQuestion() {
      const searchVal = this.searchVal.toLowerCase()

      this.dynamicQuestionsArr = this.dynamicQuestionsArr2.filter((item: { title: string }) => {
        if (item.title.toLowerCase().includes(searchVal)) {
          return item
        }
      })
    },
    handleFAQTab(id: string) {
      this.dynamicQuestionsArr = this.staticQuestionsArr.filter((item: { type: string }) => {
        if (item.type === id) {
          return item
        }
      })
      this.dynamicQuestionsArr2 = this.dynamicQuestionsArr
    },
    clearSearchInput() {
      this.searchVal = ''
      this.dynamicQuestionsArr = this.dynamicQuestionsArr2
    },
    openSearch() {
      this.searchable = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    }
  },
  setup() {
    useHead({
      title: 'FAQ - Galerie Harfa Mall',
      meta: [
        {
          name: 'description',
          content:
            'Frequently Asked Questions about Galerie Harfa Mall. Find answers to general inquiries, app usage guide, account-related queries, loyalty program, receipts, and rewards.'
        },
        {
          property: 'og:title',
          content: 'FAQ - Galerie Harfa Mall'
        },
        {
          property: 'og:description',
          content:
            'Frequently Asked Questions about Galerie Harfa Mall. Find answers to general inquiries, app usage guide, account-related queries, loyalty program, receipts, and rewards.'
        }
      ]
    })
  }
}
</script>
