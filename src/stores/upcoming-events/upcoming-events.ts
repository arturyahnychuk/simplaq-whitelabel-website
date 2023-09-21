import { defineStore } from 'pinia'
import axios from 'axios'
// Define your interface for News data
export interface UpcomingEventsData {
  data: Record<string, any> | null;
}

// Define your Pinia store
export const useUpcomingEventsStore = defineStore('upcoming-events', {
  state: (): UpcomingEventsData => ({
    data: null
  }),

  actions: {
    async fetchUpcomingEvents() {
      try {
        const response = await axios.get('api/web-app/v1/events')
        this.data = response.data.data.data        
      } catch (err) {
        console.error(`Error fetching events ${err}`)
      }
    }
  }
})
