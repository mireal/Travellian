<script setup>
import { TripCard } from '@/entities'
defineProps({
  cards: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="trip-planner-cards">
    <TripCard
      v-for="(card, index) in cards"
      :key="index"
      :name="card.name"
      :days="card.days"
      :price="card.price"
      :rating="card.rating"
      :type="card.type"
      :image-src="card.imageSrc"
    />
  </div>
</template>
