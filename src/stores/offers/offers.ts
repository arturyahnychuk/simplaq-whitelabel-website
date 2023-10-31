import { defineStore } from 'pinia'
import axios from 'axios'
// Define your interface for News data
export interface OffersData {
  data: Record<string, any> | null
}

// Define your Pinia store
export const useOffersStore = defineStore('offers', {
  state: (): OffersData => ({
    data: null
  }),

  actions: {
    async fetchOffers() {
      try {
        const response = await axios.get('api/web-app/v1/offers')
        this.data = response.data.data.data
      } catch (err) {
        console.error(`Error fetching news ${err}`)
      }
    }
  }
})
