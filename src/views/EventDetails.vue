<script setup>
import { onMounted, defineProps } from 'vue'
import { useEventStore } from '../stores/EventStore'
  const props = defineProps({
    id: String
  })  

    const eventStore = useEventStore()
    onMounted(() => {
      eventStore.fetchEventById(props.id)
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: {error: error}
          })
        })
    })
</script>

<template>
  <div v-if="eventStore.event">
    <h1>{{ eventStore.event.title }}</h1>
    <p>{{ eventStore.event.time }} on {{ eventStore.event.date }} @ {{ eventStore.event.location }}</p>
    <p>{{ eventStore.event.description }}</p>
  </div>
</template>
