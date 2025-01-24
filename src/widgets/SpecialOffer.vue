<script setup>
import { ref } from 'vue'
import { SectionTitle, ArrowButtons, swapCards } from '@/shared'
import { OfferCards } from '@/features'

const cardsPlaceholder = ref([
  {
    title: 'Lisbon, Portugal',
    description: `5 nights and 4 days in 5-star hotel, breakfast and lunch included. Very popular during
      the renaissance.Passage and going through the cites of the world in classical
      literature.`,
    rating: 5,
    price: 500,
    link: '#',
    imageSrc: './src/assets/images/special-offer/lisbon.jpg',
  },
  {
    title: 'Athens, Greece',
    description: `5 nights and 4 days in 5-star hotel, breakfast and lunch included. Very popular during
      the renaissance.Passage and going through the cites of the world in classical
      literature.`,
    rating: 5,
    price: 800,
    link: '#',
    imageSrc: './src/assets/images/special-offer/athens.png',
  },
  {
    title: 'Rome, Italy',
    description: `5 nights and 4 days in 5-star hotel, breakfast and lunch included. Very popular during
      the renaissance.Passage and going through the cites of the world in classical
      literature.`,
    rating: 5,
    price: 750,
    link: '#',
    imageSrc: './src/assets/images/special-offer/rome.jpg',
  },
])
</script>

<template>
  <section class="special-offer">
    <ArrowButtons class="special-offer__buttons" :click-left="() => { swapCards.left(cardsPlaceholder) }"
      :click-right="() => { swapCards.right(cardsPlaceholder) }" />

    <SectionTitle class="special-offer__title" title="Special Offer" text="Check out our special offer and discounts"
      accent-line-class="special-offer__title__accent-line" />

    <OfferCards class="special-offer__cards" :cards="cardsPlaceholder" />
  </section>
</template>
