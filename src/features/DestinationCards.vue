<script setup>
import { DestinationImageCard } from '@/entities'

defineProps({
  cards: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="destination-cards">
    <DestinationImageCard
      v-for="(card, index) in cards"
      :key="index"
      :place="card.place"
      :location="card.location"
      :image-src="card.src"
    />
  </div>
</template>
