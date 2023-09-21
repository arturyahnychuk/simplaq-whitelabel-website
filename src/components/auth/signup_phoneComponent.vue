<template>
  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('create_an_account') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px]">{{ $t('enter_your_mobile_phone_number') }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-[8px] w-full max-w-[360px]">
      <div class="items-center gap-[0px] grid grid-cols-[20px,auto,20px] px-[20px] gap-[12px] bg-gray rounded-[16px]">
        <div>
          <Icon icon="ph:phone-light" class="text-lg text-black" />
        </div>
        <div class="relative flex items-center gap-[12px]" id="phoneSelect">
          <vue-multiselect
            v-model="selectedCountry"
            :options="countries"
            :searchable="true"
            placeholder="Type to search"
            :allow-empty="false"
            :option-height="60"
            track-by="code"
            :custom-label="customLabel"
          >
            <template #option="{ option }">
              <div class="country-option flex items-center gap-[12px] py-[8px] px-[6px] rounded-[16px]">
                <img :src="option.image" class="country-flag w-[24px] h-[24px] rounded-full" :alt="option.country" />
                <div class="country-details flex w-full items-center justify-between">
                  <p class="country-name text-sm text-black font-medium leading-[20px] tracking-[-0.2px]">{{ option.country }}</p>
                  <p class="country-code text-grayBlack text-sm font-medium leading-[20px] tracking-[-0.2px]">{{ option.code }}</p>
                </div>
              </div>
            </template>

            <template #noResult>
              <div class="w-full flex flex-col items-center justify-center">
                <img src="@/assets/imgs/noresult.svg" class="max-w-[136px] mt-[40px] mb-[24px]" alt="" />
                <h6 class="text-lg text-black font-bold leading-[26px] tracking-[-0.4px]">{{ $t('search') }}</h6>
                <p class="text-center mt-[12px] text-grayDark text-sm leading-[24px] tracking-[0.1px]">
                  {{ $t('unfortunately_nothing_was_found_Try_changing_your_request') }}
                </p>
              </div>
            </template>
          </vue-multiselect>
          <div class="flex flex-col gap-[2px]">
            <input
              type="text"
              id="phone"
              v-model="phone"
              :placeholder="$t('phone_number')"
              class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
            />
          </div>
        </div>
        <div>
          <Icon icon="bi:check" class="text-lg text-green" />
        </div>
      </div>

      <div class="flex flex-col gap-[12px]">
        <button
          @click="handleSubmit"
          class="bg-gray py-[16px] rounded-[16px] text-grayDark3 text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
          {{ $t('continue') }}
        </button>
      </div>
    </div>

    <p class="text-center text-grayDark text-xs font-normal mt-[60px] leading-[20px] tracking-[0.2px]">
      {{ $t('already_a_member?') }}
      <router-link
        :to="{ name: $Routes.LOGIN }"
        class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end"
        >{{ $t('login') }}</router-link
      >
    </p>
  </div>
</template>

<script lang="ts">
import VueMultiselect from 'vue-multiselect'

interface Countries {
  country: string,
  code: string,
  image: string,
}
export default {
  name: 'signUpWithPhone',
  components: {
    VueMultiselect
  },
  data() {
    return {
      countries: [
        {
          country: 'Ukraine',
          code: '+380',
          image: '../src/assets/imgs/ua.svg'
        },
        {
          country: 'United Kingdom',
          code: '+44',
          image: '../src/assets/imgs/uk.svg'
        },
        {
          country: 'Indonesia',
          code: '+62',
          image: '../src/assets/imgs/in.svg'
        }
      ] as Countries[],
      selectedCountry: null as Countries | null,
      phone: '',
    }
  },
  mounted() {
    this.changeSearchInputPlace()
    this.selectedCountry = this.countries[0]
  },
  methods: {
    changeSearchInputPlace() {
      let searchInput = document.querySelector('#phoneSelect .multiselect__input')
      let searchInputParent = document.querySelector('#phoneSelect .multiselect__content-wrapper')
      searchInputParent.prepend(searchInput)
    },
    customLabel({ country, code }) {
      return `${country} – ${code}`
    },
    handleSubmit() {
      console.log('Continue')
    }
  },
  watch: {
    selectedCountry(newSelectedCountry) {
      if (this.selectedCountry) {
        // Do something when the value of selectedCountry changes
        let selected = `<div class="flex items-center gap-[8px]">
          <img class="w-[20px] h-[20px] rounded-full" src="${newSelectedCountry.image}"/>
          <p class="text-base leading-[20px] tracking-[-0.2px] text-black">${newSelectedCountry.code}</p>
      </div>`
        let selectedEl = document.createElement('div')
        selectedEl.classList.add('phone-selected')
        selectedEl.innerHTML = selected

        if (document.querySelector('.multiselect__tags .phone-selected')) {
          document.querySelector('.multiselect__tags').removeChild(document.querySelector('.multiselect__tags .phone-selected'))
        }
        document.querySelector('.multiselect__tags').appendChild(selectedEl)
      } else {
        if (document.querySelector('.multiselect__tags .phone-selected')) {
          document.querySelector('.multiselect__tags').removeChild(document.querySelector('.multiselect__tags .phone-selected'))
        }
      }
    }
  }
}
</script>

<style>
#phoneSelect .multiselect__single {
  display: none;
}

#phoneSelect .multiselect__content-wrapper {
  position: absolute;
  left: -52px;
  top: 100%;
  min-width: 360px;
  background: theme('colors.white');
  border: 1px solid theme('colors.gray');
  padding: 16px 16px;
  border-radius: 16px;
  box-shadow: theme('boxShadow.md');
  overflow: auto;
}

#phoneSelect .multiselect__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
}

#phoneSelect .multiselect__input {
  width: 100%;
  padding: 10px;
  background: theme('colors.gray');
  outline: none;
  border-radius: 16px;
  font-size: 12px;
  padding: 14px 16px;
  margin-bottom: 8px;
}

.multiselect__option--highlight .country-option {
  background: theme('colors.gray');
}

.multiselect__option--selected .country-option .country-code {
  font-weight: bold;
}
</style>
