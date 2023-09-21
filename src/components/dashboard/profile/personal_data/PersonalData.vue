<template>
  <notifications #body="props" position="bottom center" :duration="5000" :max="4">
    <div class="flex items-center justify-between max-w-[360px] w-full bg-white rounded-[20px] p-[16px] shadow-md">
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

  <div class="w-full">
    <form class="w-full flex flex-col gap-[8px] w-full">
      <div v-if="editMode" class="pt-[20px] pl-[60px]">
        <div
          class="relative flex items-end flex justify-center gap-[8px] w-[64px] h-[64px] bg-gray rounded-full transition-all">
          <img id="profile-image-update" class="w-full max-h-full rounded-full" src="@/assets/imgs/profile.svg" alt="" />
          <div
            class="absolute right-[-15px] cursor-pointer bottom-[-15px] w-[40px] h-[40px] overflow-hidden cursor-pointer bg-gray rounded-full flex items-center justify-center">
            <Icon icon="fluent:edit-20-regular" class="text-md text-black cursor-pointer" />
            <input @change="handleFileChange" class="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
              type="file" />
          </div>
        </div>
      </div>

      <div class="w-full grid grid-cols-2 gap-[12px] pt-[20px] pb-[25px] pl-[60px]">
        <!---->
        <div :class="editMode ? 'bg-gray' : ''"
          class="items-center gap-[12px] border-[1px] border-transparent grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]">
          <div>
            <Icon icon="mdi-light:email" class="text-lg text-black" />
          </div>
          <div v-if="editMode" class="flex flex-col gap-[2px]">
            <label for="email" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('email') }}</label>
            <input type="text" id="email" :placeholder="$t('enter_your_email')" value="Gaydukegors@gmail.com"
              class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
          </div>
          <div v-else class="flex flex-col gap-[2px]">
            <p class="text-s text-grayDark leading-[16px] font-medium">{{ $t('email') }}</p>
            <p class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]">
              Gaydukegors@gmail.com</p>
          </div>
          <div v-if="editMode">
            <Icon icon="bi:check" class="text-lg text-green" />
          </div>
        </div>
        <!---->
        <div :class="editMode ? 'bg-gray' : ''"
          class="items-center gap-[12px] border-[1px] border-transparent grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]">
          <div>
            <Icon icon="ph:phone-light" class="text-lg text-black" />
          </div>
          <div v-if="editMode" class="flex flex-col gap-[2px]">
            <label for="phone" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('phone_number') }}</label>
            <input type="number" id="phone" :placeholder="$t('enter_phone_number')" value="380939412641"
              class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
          </div>
          <div v-else class="flex flex-col gap-[2px]">
            <p class="text-s text-grayDark leading-[16px] font-medium">{{ $t('phone_number') }}</p>
            <p class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]">380939412641</p>
          </div>
          <div v-if="editMode">
            <Icon icon="bi:check" class="text-lg text-green" />
          </div>
        </div>

        <!---->
        <div :class="editMode ? 'bg-gray' : ''"
          class="items-center gap-[12px] border-[1px] border-transparent grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]">
          <div>
            <Icon icon="solar:shield-user-outline" class="text-lg text-black" />
          </div>
          <div v-if="editMode" class="flex flex-col gap-[2px]">
            <label for="full_name" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('full_name') }}</label>
            <input type="text" id="full_name" :placeholder="$t('enter_full_name')" value="Ann Haiduk"
              class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
          </div>
          <div v-else class="flex flex-col gap-[2px]">
            <p class="text-s text-grayDark leading-[16px] font-medium">{{ $t('full_name') }}</p>
            <p class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]">Ann Haiduk</p>
          </div>
          <div v-if="editMode">
            <Icon icon="bi:check" class="text-lg text-green" />
          </div>
        </div>

        <!---->
        <div :class="editMode ? 'bg-gray' : ''"
          class="form-controll relative items-center gap-[12px] border-[1px] border-transparent grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]">
          <div @mouseenter="datePickerCalendar">
            <Icon icon="solar:calendar-date-linear" class="text-lg text-black" />
          </div>
          <div v-if="editMode" class="flex flex-col gap-[2px]">
            <label for="birthday" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('birthday') }}</label>
            <input type="date" id="birthday" value="02/10/1991"
              class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
          </div>
          <div v-else class="flex flex-col gap-[2px]">
            <p class="text-s text-grayDark leading-[16px] font-medium">{{ $t('birthday') }}</p>
            <p class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]">08/10/1991</p>
          </div>
          <div v-if="editMode">
            <Icon icon="bi:check" class="text-lg text-green" />
          </div>
        </div>

        <!---->
        <div :class="editMode ? 'bg-gray' : ''"
          class="relative items-center border-[1px] border-transparent multiselect-focus-orange gap-[0px] grid grid-cols-[20px,auto] px-[20px] gap-[12px] rounded-[16px]">
          <Icon v-if="!editMode" icon="ph:gender-male-light" class="text-lg text-black" />
          <div v-if="editMode">
            <Icon v-if="selectedGender.gender === 'Male'" icon="ph:gender-male-light" class="text-lg text-black" />
            <Icon v-if="selectedGender.gender === 'Female'" icon="ph:gender-female-light" class="text-lg text-black" />
          </div>
          <div v-if="editMode" class="flex items-center gap-[12px] py-[17px]" id="genderSelect">
            <div class="flex flex-col gap-[2px] w-full">
              <label for="genderSelect" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('gender') }}</label>
              <vue-multiselect v-model="selectedGender" :options="genders" :searchable="false" :option-height="60"
                :allow-empty="false" @open="selectOnOpen" @close="selectOnClose" track-by="gender" label="gender"
                class="w-full cursor-pointer">
                <template #option="{ option }">
                  <div class="gender-details flex w-full items-center justify-between hover:bg-gray cursor-pointer">
                    <div class="gender-option w-full flex px-[20px]">
                      <div class="flex items-center w-full justify-between border-b-[1px] py-[16px] border-gray">
                        <p class="gender text-sm text-black font-bold leading-[20px] tracking-[-0.2px]">
                          {{ option.gender }}
                        </p>
                        <Icon icon="bi:check" class="check text-lg text-orange hidden" />
                      </div>
                    </div>
                  </div>
                </template>
              </vue-multiselect>
            </div>
            <Icon v-if="editMode" icon="octicon:chevron-down-24" class="select-icon text-lg text-black" />
          </div>
          <div v-else class="flex flex-col gap-[2px]">
            <p class="text-s text-grayDark leading-[16px] font-medium">{{ $t('gender') }}</p>
            <p class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]">Male</p>
          </div>
        </div>

        <!---->
        <div :class="editMode ? 'bg-gray' : ''"
          class="relative items-center multiselect-focus-orange border-[1px] border-transparent gap-[0px] grid grid-cols-[20px,auto] px-[20px] gap-[12px] rounded-[16px]">
          <div>
            <Icon icon="system-uicons:location" class="text-lg text-black" />
          </div>
          <div v-if="editMode" class="flex items-center gap-[12px] py-[17px]" id="countrySelect">
            <div @click="openShareLocation" id="useMyLocation"
              class="cursor-pointer group hover:bg-yellowLight px-[12px] my-[16px] w-[90%] mx-auto py-[8px] border-[1px] border-gray rounded-[16px] flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] bg-gray rounded-full group-hover:bg-white flex items-center justify-center">
                <Icon icon="fluent:my-location-16-regular"
                  class="select-icon text-lg text-black group-hover:text-orange" />
              </div>
              <p class="text-sm font-bold text-black leading-[20px] group-hover:text-orange">{{ $t('use_my_location') }}
              </p>
            </div>
            <div class="flex flex-col gap-[2px] w-full">
              <label for="phone" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('adress') }}</label>
              <vue-multiselect v-model="selectedCountries" :options="countries" :searchable="true"
                :placeholder="$t('search_adress')" :option-height="60" track-by="country" :custom-label="customLabel">
                <template #option="{ option }">
                  <div class="country-option flex items-center gap-[12px]">
                    <div
                      class="country-details flex w-full items-center justify-between px-[20px] border-b-[1px] py-[16px] border-gray">
                      <p class="country-name text-sm text-black font-bold leading-[20px] tracking-[-0.2px]">{{
                        option.country }}</p>
                      <Icon icon="bi:check" class="check text-lg text-orange hidden" />
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
            </div>
            <Icon v-if="editMode" icon="octicon:chevron-down-24" class="select-icon text-lg text-black" />
          </div>
          <div v-else class="flex flex-col gap-[2px]">
            <p class="text-s text-grayDark leading-[16px] font-medium">{{ $t('adress') }}</p>
            <p class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]">Ukraine</p>
          </div>
        </div>

        <!---->
        <div :class="editMode ? 'bg-gray' : ''"
          class="items-center gap-[12px] border-[1px] border-transparent grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] rounded-[16px]">
          <div>
            <Icon icon="ion:car-sport-outline" class="text-lg text-black" />
          </div>
          <div v-if="editMode" class="flex flex-col gap-[2px]">
            <label for="carPlate" class="text-s text-grayDark leading-[16px] font-medium">{{
              $t('car_license_plate_number') }}</label>
            <input type="text" id="carPlate" :placeholder="$t('enter_car_license_plate_number')" value="AB6041AA"
              class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]" />
          </div>
          <div v-else class="flex flex-col gap-[2px]">
            <p class="text-s text-grayDark leading-[16px] font-medium">{{ $t('car_license_plate_number') }}</p>
            <p class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]">380939412641</p>
          </div>
          <div v-if="editMode">
            <Icon icon="bi:check" class="text-lg text-green" />
          </div>
        </div>
      </div>

      <div v-if="!editMode" class="w-full pt-[16px] pb-[24px] pl-[60px] border-t-[1px] border-gray">
        <button type="button" @click="editPersonalData"
          class="py-[17px] px-[69px] border-[1px] border-orange rounded-[20px] group hover:bg-orange transition-all cursor-pointer">
          <p
            class="text-pink text-sm font-semibold leading-[20px] tracking-[-0.2px] group-hover:text-white transition-all">
            {{ $t('edit') }}
          </p>
        </button>
      </div>

      <div v-else class="w-full pt-[16px] pb-[24px] pl-[60px] border-t-[1px] border-gray">
        <div class="flex gap-[8px] items-center">
          <button type="button"
            class="py-[17px] px-[69px] border-[1px] border-graylight rounded-[20px] group hover:bg-orange transition-all cursor-pointer">
            <p
              class="text-black text-sm font-semibold leading-[20px] tracking-[-0.2px] group-hover:text-white transition-all">
              {{ $t('save') }}
            </p>
          </button>

          <button type="button" @click="canelEditPersonalData"
            class="py-[17px] px-[69px] border-[1px] border-graylight rounded-[20px] group hover:bg-pink transition-all cursor-pointer">
            <p
              class="text-black text-sm font-semibold leading-[20px] tracking-[-0.2px] group-hover:text-white transition-all">
              {{ $t('cancel') }}
            </p>
          </button>
        </div>
      </div>
    </form>
  </div>

  <shareLocationComponent v-if="activeShareLocation" @closeShareLocation="closeShareLocation" />
</template>

<script lang="ts">
import VueMultiselect from 'vue-multiselect'
import shareLocationComponent from '@/components/modals/shareLocationComponent.vue'
interface Country {
  country: string;
}

interface Gender {
  gender: string;
}

export default {
  name: 'PersonalData',
  components: {
    VueMultiselect,
    shareLocationComponent
  },
  data() {
    return {
      activeShareLocation: false as boolean,

      editMode: false as boolean,

      countries: [
        {
          country: 'Ukraine'
        },
        {
          country: 'United Kingdom'
        },
        {
          country: 'Indonesia'
        }
      ],
      selectedCountries: null as Country | null,

      genders: [
        {
          gender: 'Male'
        },
        {
          gender: 'Female'
        }
      ],
      selectedGender: null as Gender | null,
    }
  },
  mounted() {
    this.selectedCountries = this.countries[0]
    this.selectedGender = this.genders[0]
  },
  updated() {
    this.updateSelectedCountries(this.selectedCountries)

    this.appendUseMyLocationToCountrySelect()
  },
  methods: {
    async handleFileChange(e) {
      try {
        const target = e.target as HTMLInputElement;
        const file = target.files[0];

        if (file) {
          if (!file.type.startsWith('image/')) {
            this.$notify({
              title: this.$t('please_choose_valid_image'),
              component: {
                template: `
                  <div class="flex items-center gap-[12px]">
                    <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
                    <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px']">{{$t('invalid_password_confirmation')}}</p>
                  </div>
                  <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
                `
              }
            });
            return;
          }

          const reader = new FileReader();

          reader.onload = (event) => {
            const e = event as ProgressEvent<FileReader>;
            const imageElement = document.getElementById('profile-image-update') as HTMLImageElement;
            if (e.target && typeof e.target.result === 'string') {
              imageElement.src = e.target.result;
              console.log(e.target.result);
            }
          };

          reader.onerror = () => {
            console.error('Error occurred while reading the file.');
          };

          await new Promise((resolve) => {
            reader.onloadend = resolve;
            reader.readAsDataURL(file);
          });
        }
      } catch (error) {
        console.error('An error occurred while handling the file:', error);
      }
    },
    openShareLocation() {
      this.activeShareLocation = true
    },
    closeShareLocation() {
      this.activeShareLocation = false
    },
    datePickerCalendar(e: Event) {
      const target = e.target as Element
      if (target.closest('.form-controll').querySelector('input')) {
        target.closest('.form-controll').querySelector('input').focus()

      }
    },
    selectOnOpen() {
      let active = document.querySelector('.multiselect--active')
    },
    selectOnClose() { },
    editPersonalData() {
      this.editMode = true
    },
    canelEditPersonalData() {
      this.editMode = false
    },
    appendUseMyLocationToCountrySelect() {
      if (this.editMode) {
        const countrySelect = document.querySelector('#countrySelect .multiselect__content-wrapper')
        const useMyLocation = document.getElementById('useMyLocation')
        countrySelect.prepend(useMyLocation)
      }
    },
    changeSearchInputPlace() {
      let searchInput = document.querySelector('#countrySelect .multiselect__input')
      let searchInputParent = document.querySelector('#countrySelect .multiselect__content-wrapper')
      searchInputParent.prepend(searchInput)
    },
    updateSelectedCountries(newSelectedCountries) {
      if (this.editMode) {
        if (newSelectedCountries) {
          // Do something when the value of selectedCountries changes
          let selected = `<div class="flex items-center gap-[8px]">
          <p class="text-sm leading-[20px] tracking-[-0.2px] text-black">${newSelectedCountries.country}</p>
      </div>`
          let selectedEl = document.createElement('div')
          selectedEl.classList.add('country-selected')
          selectedEl.innerHTML = selected

          if (document.querySelector('.multiselect__tags .country-selected')) {
            document
              .querySelector('#countrySelect .multiselect__tags')
              .removeChild(document.querySelector('.multiselect__tags .country-selected'))
          }
          document.querySelector('#countrySelect .multiselect__tags').appendChild(selectedEl)
        } else {
          if (document.querySelector('.multiselect__tags .country-selected')) {
            document
              .querySelector('#countrySelect .multiselect__tags')
              .removeChild(document.querySelector('.multiselect__tags .country-selected'))
          }
        }
      }
    },

    customLabel({ country }) {
      return `${country}`
    }
  },
}
</script>

<style>
.multiselect-focus-orange:has(.multiselect--active) {
  border-color: theme('colors.orange');
}

.multiselect-focus-orange:has(.multiselect--active) .select-icon {
  color: theme('colors.orange');
  transform: rotate(180deg);
}

#genderSelect .multiselect__single {
  outline: none;
  color: theme('colors.black');
  font-size: 14px;
}

#countrySelect .multiselect__single,
#placeSelect .multiselect__single {
  display: none;
}

#genderSelect .multiselect__content-wrapper,
#countrySelect .multiselect__content-wrapper,
#placeSelect .multiselect__content-wrapper {
  position: absolute;
  left: 0px;
  top: calc(100% + 8px);
  width: 100%;
  background: theme('colors.white');
  border: 1px solid theme('colors.gray');
  border-radius: 16px;
  box-shadow: theme('boxShadow.md');
  z-index: 999;
  overflow: auto;
}

#genderSelect .multiselect__content,
#countrySelect .multiselect__content,
#countrySelect .multiselect__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
}

#countrySelect .multiselect--active .country-selected,
#placeSelect .multiselect--active .country-selected {
  display: none;
}

#countrySelect .multiselect__input,
#placeSelect .multiselect__input {
  outline: none;
  background: transparent;
}

#placeSelect .multiselect__content {
  width: 100%;
}

.multiselect__option--selected .gender-option .check {
  display: block;
}

.multiselect__option--selected .gender-option .gender {
  font-weight: bold;
}

.multiselect__option--selected .country-option .check {
  display: block;
}

.multiselect__option--selected .country-option .gender {
  font-weight: bold;
}

input[type='file'] {
  cursor: pointer;
}
</style>
