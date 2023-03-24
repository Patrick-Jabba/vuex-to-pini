import { defineStore } from 'pinia'
import EventService from '../services/EventService'

export const useEventStore = defineStore('EventStore', {
  state(){
    return {
      events: [],
      event: {}
    }
  },
  getters: {
    numberOfEvents: state => state.events.length
  },
  actions: {
    async fetchEvents() {
      return EventService.getEvents()
        .then(response => {
          this.events = response.data
        })
        .catch(error => {
          throw error
        })
    },
    async fetchEventById(eventId){
      return EventService.getEvent(eventId)
        .then(response => {
          this.event = response.data
        })
        .catch(error => {
          throw error
        })
    },
    async createEvent(event) {
      return EventService.postEvent(event)
        .then(() => {
          this.events.push(event)
        })
        .catch(error => {
          throw error
        })
    }
  }
})