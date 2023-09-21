<template>
  <notifications #body="props" position="bottom center" :duration="5000" :max="1">
    <div class="flex items-center justify-between max-w-[360px] w-full bg-white rounded-[20px] p-[16px] drop-shadow-md">
      <div class="flex items-center gap-[12px]">
        <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
        <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px]">
          {{ props.item.title }}
        </p>
      </div>

      <Icon @click="props.close()" icon="majesticons:close"
        class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
    </div>
  </notifications>

  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex overflow-auto md:py-[20px] bg-white md:bg-transparent">
      <div
        class="w-full max-w-[664px] h-full md:min-h-[640px] md:h-[640px] m-auto px-[40px] pt-[40px] pb-[40px] bg-white md:rounded-[24px]">
        <form @submit.prevent="handleSubmit" class="relative w-full h-full flex flex-col justify-between">
          <div @click="previousGenderPickerComponent"
            class="cursor-pointer z-[999] absolute top-0 left-0 w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center group hover:bg-graylight transition-all">
            <Icon icon="fluent:chevron-left-16-filled" class="text-lg text-black" />
          </div>

          <div class="relative w-full flex flex-col gap-[20px]">
            <div class="flex flex-col max-w-[360px] w-full mx-auto">
              <div class="flex items-center justify-center pb-[16px]">
                <div class="w-[76px] h-[76px] rounded-full flex items-center bg-gray justify-center cursor-pointer">
                  <p class="text-black font-bold text-base2 leading-[26px]">
                    3 <sup class="text-grayDark font-semibold text-xs leading-[16px]">/ 6</sup>
                  </p>
                </div>
              </div>

              <h6 class="font-bold text-black text-xl mb-[8px] text-center">{{ $t(`pick_your_interest`) }}?</h6>

              <p class="font-medium text-sm text-grayDark text-center leading-[24px]">
                {{ $t(`pick_your_interest_text`) }}
              </p>
            </div>

            <div class="w-full flex flex-col gap-[16px]">
              <div class="w-full grid grid-cols-[48px,auto] bg-gray rounded-[16px]">
                <div class="flex items-center justify-center">
                  <Icon icon="ri:search-2-line" class="text-lg text-black" />
                </div>
                <input @input="filter" type="text" v-model="search" :placeholder="$t('search')"
                  class="py-[14px] bg-transparent text-xs leading-[20px] tracking-[-0.2px] text-black outline-none placeholder:text-grayDark" />
              </div>

              <div class="w-full flex items-center flex-wrap gap-[8px] max-h-[145px] overflow-auto custom-scrollbar">
                <label v-for="(item, index) in dynamicInterestsArr" :key="index" class="flex items-center cursor-pointer">
                  <input type="checkbox" :value="item.interest" :checked="item.checked" @change="handleChange"
                    :name="item.interest" :id="index.toString()"
                    class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer" />
                  <div
                    class="px-[24px] border-graylight py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]">
                    {{ $t(`${item.interest}`) }}
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="flex gap-[8px] mt-[67px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button @click="skipSelectProfileComponent" type="button"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all">
              {{ $t(`skip_for_now`) }}
            </button>
            <button type="submit" :class="allChecked.length === 0 ? 'bg-transparent text-black' : 'bg-orange text-white'"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold transition-all">
              {{ $t('continue') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface StaticInterestsArr {
  interest: string,
  checked: boolean
}
export default {
  name: 'InterestsPicker',
  data() {
    return {
      staticInterestsArr: [
        {
          interest: 'sports_&_fitness',
          checked: false
        },
        {
          interest: 'film_&_entertainment',
          checked: false
        },
        {
          interest: 'music',
          checked: false
        },
        {
          interest: 'technology',
          checked: false
        },
        {
          interest: 'fashion',
          checked: false
        },
        {
          interest: 'tatoo',
          checked: false
        },
        {
          interest: 'sports_&_fitnes',
          checked: false
        },
        {
          interest: 'film_&_entertainment',
          checked: false
        },
        {
          interest: 'music',
          checked: false
        },
        {
          interest: 'technology',
          checked: false
        },
        {
          interest: 'fashion',
          checked: false
        },
        {
          interest: 'tatoo',
          checked: false
        },
        {
          interest: 'sports_&_fitnes',
          checked: false
        },
        {
          interest: 'film_&_entertainment',
          checked: false
        },
        {
          interest: 'music',
          checked: false
        },
        {
          interest: 'technology',
          checked: false
        },
        {
          interest: 'fashion',
          checked: false
        },
        {
          interest: 'tatoo',
          checked: false
        },
        {
          interest: 'sports_&_fitnes',
          checked: false
        },
        {
          interest: 'film_&_entertainment',
          checked: false
        },
        {
          interest: 'music',
          checked: false
        },
        {
          interest: 'technology',
          checked: false
        },
        {
          interest: 'fashion',
          checked: false
        },
        {
          interest: 'tatoo',
          checked: false
        }
      ] as StaticInterestsArr[],
      dynamicInterestsArr: [] as StaticInterestsArr[],
      search: '' as string,
      interestsVal: '' as string,
      allChecked: [] as StaticInterestsArr[],
    }
  },
  emits: ['previousGenderPickerComponent', 'nextSelectProfileComponent', 'skipSelectProfileComponent'],
  mounted() {
    this.dynamicInterestsArr = this.staticInterestsArr
  },
  methods: {
    handleSubmit() {
      this.allChecked = this.dynamicInterestsArr.filter((item: { checked: any }) => {
        if (item.checked) {
          return item
        }
      })
      if (this.allChecked.length === 0) {
        this.$notify({
          title: this.$t('please_pick_your_interests'),
          component: {
            template: `
    <div class="flex items-center gap-[12px]">
      <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
      <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px]">{{$t('invalid_password_confirmation')}}</p>
    </div>
    <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
  `
          }
        })
      } else {
        this.$emit('nextSelectProfileComponent')
      }
    },
    handleChange(e: Event) {
      const target = e.target as HTMLInputElement
      this.dynamicInterestsArr[target.id].checked = target.checked

      this.allChecked = this.dynamicInterestsArr.filter((item: { checked: any }) => {
        if (item.checked) {
          return item
        }
      })
    },
    skipSelectProfileComponent() {
      this.$emit('skipSelectProfileComponent')
    },
    filter() {
      const query = this.search.toLowerCase()
      const keywords = query.split(' ')

      this.dynamicInterestsArr = this.staticInterestsArr.filter((item: { interest: string }) => {
        const interest = item.interest.toLowerCase()
        return keywords.every((keyword: any) => interest.includes(keyword))
      })
    },
    previousGenderPickerComponent() {
      this.$emit('previousGenderPickerComponent')
    }
  }
}
</script>
