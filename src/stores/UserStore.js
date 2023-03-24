import { defineStore } from 'pinia'

export const userUseStore = defineStore('UserStore', {
  state: () => ({
      user: 'Patrick Monteiro',
  }),
  getters: {
    firstName() {
      return this.user.split(' ')[0]
    }
  }
})