<template>
  <CompleteProfileComponent v-if="completeProfileModal" @closeCompleteProfileComponent="closeCompleteProfileComponent"
    @nextDatePickerComponent="nextDatePickerComponent" />
  <DatePickerComponent v-if="datePickerModal" @skipDatePickerComponent="skipDatePickerComponent"
    @nextGenderPickerComponent="nextGenderPickerComponent" />
  <GenderPickerComponent v-if="genderPickerModal" @previousDatePickerComponent="previousDatePickerComponent"
    @skipGenderPickerComponent="skipGenderPickerComponent" @nextInterestsPickerComponent="nextInterestsPickerComponent" />

  <InterestsPickerComponent v-if="interestsPickerModal" @previousGenderPickerComponent="previousGenderPickerComponent"
    @nextSelectProfileComponent="nextSelectProfileComponent" @skipSelectProfileComponent="skipSelectProfileComponent" />

  <SelectProfileComponent v-if="profileSelectModal" @previousInterestsPickerComponent="previousInterestsPickerComponent"
    @skipProfileSelectComponent="skipProfileSelectComponent" @nextLocationPickerComponent="nextLocationPickerComponent" />

  <LocationPickerComponent v-if="locationPickerModal" @previousProfileSelectComponent="previousProfileSelectComponent"
    @skipLocationComponent="skipLocationComponent" @nextCarLicenseComponent="nextCarLicenseComponent" />

  <CarLicenseComponent v-if="carLicenseModal" @previousLocationPickerComponent="previousLocationPickerComponent" />
</template>

<script lang="ts">
import CompleteProfileComponent from '@/components/modals/account_setup/completeProfileComponent.vue'
import DatePickerComponent from '@/components/modals/account_setup/datePickerComponent.vue'
import GenderPickerComponent from '@/components/modals/account_setup/genderPickerComponent.vue'
import InterestsPickerComponent from '@/components/modals/account_setup/interestsPickerComponent.vue'
import SelectProfileComponent from '@/components/modals/account_setup/selectProfileComponent.vue'
import LocationPickerComponent from '@/components/modals/account_setup/locationPickerComponent.vue'
import CarLicenseComponent from '@/components/modals/account_setup/carLicenseComponent.vue'

export default {
  name: 'Home',
  components: {
    CompleteProfileComponent,
    DatePickerComponent,
    GenderPickerComponent,
    InterestsPickerComponent,
    SelectProfileComponent,
    LocationPickerComponent,
    CarLicenseComponent
  },
  data() {
    return {
      /* Complete Account Setup Modals Variables*/
      completeProfileModal: true as boolean,
      datePickerModal: false as boolean,
      genderPickerModal: false as boolean,
      interestsPickerModal: false as boolean,
      profileSelectModal: false as boolean,
      locationPickerModal: false as boolean,
      carLicenseModal: false as boolean
    }
  },
  emits: ['closeCompleteProfileComponent'],
  methods: {
    closeCompleteProfileComponent() {
      this.completeProfileModal = false
      this.$emit('closeCompleteProfileComponent')
    },
    nextDatePickerComponent() {
      this.completeProfileModal = false
      this.datePickerModal = true
    },
    nextGenderPickerComponent() {
      // has Date Data
      this.datePickerModal = false
      this.genderPickerModal = true
    },
    skipDatePickerComponent() {
      // has not Date data
      this.datePickerModal = false
      this.genderPickerModal = true
    },
    previousDatePickerComponent() {
      this.genderPickerModal = false
      this.datePickerModal = true
    },
    nextInterestsPickerComponent() {
      this.genderPickerModal = false
      this.interestsPickerModal = true
    },
    skipGenderPickerComponent() {
      this.genderPickerModal = false
      this.interestsPickerModal = true
    },
    previousGenderPickerComponent() {
      this.genderPickerModal = true
      this.interestsPickerModal = false
    },
    nextSelectProfileComponent() {
      this.interestsPickerModal = false
      this.profileSelectModal = true
    },
    skipSelectProfileComponent() {
      this.interestsPickerModal = false
      this.profileSelectModal = true
    },
    previousInterestsPickerComponent() {
      this.interestsPickerModal = true
      this.profileSelectModal = false
    },
    skipProfileSelectComponent() {
      this.profileSelectModal = false
      this.locationPickerModal = true
    },
    nextLocationPickerComponent() {
      this.locationPickerModal = true
      this.profileSelectModal = false
    },
    previousProfileSelectComponent() {
      this.locationPickerModal = false
      this.profileSelectModal = true
    },
    nextCarLicenseComponent() {
      this.locationPickerModal = false
      this.carLicenseModal = true
    },
    skipLocationComponent() {
      this.locationPickerModal = false
      this.carLicenseModal = true
    },
    previousLocationPickerComponent() {
      this.carLicenseModal = false
      this.locationPickerModal = true
    }
  }
}
</script>
