import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
  state: () => ({
    isLoading: false
  }),
  actions: {
    setLoading(isLoading: boolean) {
      this.isLoading = isLoading
    }
  }
})
