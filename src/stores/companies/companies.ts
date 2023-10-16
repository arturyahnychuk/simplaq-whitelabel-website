import { defineStore } from 'pinia'
import axios from 'axios'

export interface CompaniesData {
  data: Record<string, any> | null;
}

// Define your Pinia store
export const useCompaniesStore = defineStore('companies', {
  state: (): CompaniesData => ({
    data: null
  }),

  actions: {
    async fetchCompanies() {
      try {
        const response = await axios.get('api/web-app/v1/companies')
        this.data = response.data.data.data
      } catch (err) {
        console.error(`Error fetching news ${err}`)
      }
    }
  }
})