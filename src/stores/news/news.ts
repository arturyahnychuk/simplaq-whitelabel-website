import { defineStore } from 'pinia'
import axios from 'axios'
// Define your interface for News data
export interface NewsData {
  data: Record<string, any> | null;
}

// Define your Pinia store
export const useNewsStore = defineStore('news', {
  state: (): NewsData => ({
    data: null
  }),

  actions: {
    async fetchNews() {
      try {
        const response = await axios.get('api/web-app/v1/news')
        this.data = response.data.data.data        
      } catch (err) {
        console.error(`Error fetching news ${err}`)
      }
    }
  }
})
