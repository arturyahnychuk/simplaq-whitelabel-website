import { defineStore } from 'pinia'
import axios from 'axios'
// Define your interface for News data
export interface RewardsData {
  data: Record<string, any> | null;
}

// Define your Pinia store
export const useRewardsStore = defineStore('rewards', {
  state: (): RewardsData => ({
    data: null
  }),

  actions: {
    async fetchRewards() {
      try {
        const response = await axios.get('api/web-app/v1/rewards')
        this.data = response.data.data.data        
      } catch (err) {
        console.error(`Error fetching news ${err}`)
      }
    }
  }
})
