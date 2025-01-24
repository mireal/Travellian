<script setup>
import { OfferCard } from '@/entities'

defineProps({
  cards: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="offer-cards">
    <OfferCard
      v-if="cards.length > 0"
      :title="cards[0].title"
      :description="cards[0].description"
      :rating="cards[0].rating"
      :price="cards[0].price"
      :link="cards[0].link"
      :image-src="cards[0].imageSrc"
    />
    <OfferCard
      v-if="cards.length > 1"
      :title="cards[1].title"
      :description="cards[1].description"
      :rating="cards[1].rating"
      :price="cards[1].price"
      :link="cards[1].link"
      :image-src="cards[1].imageSrc"
    />
    <OfferCard
      v-if="cards.length > 2"
      :title="cards[2].title"
      :description="cards[2].description"
      :rating="cards[2].rating"
      :price="cards[2].price"
      :link="cards[2].link"
      :image-src="cards[2].imageSrc"
    />
  </div>
</template>
