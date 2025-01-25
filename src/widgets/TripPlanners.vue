<script setup>
import { SectionTitle } from '@/shared'
import { DecoratedButton } from '@/entities'
import { TripPlannerCards } from '@/features'

const cardsPlaceholder = [
  {
    name: 'Rome City Tour',
    price: 99,
    type: 'GUIDED TOUR',
    days: 7,
    rating: 5,
    imageSrc: './src/assets/images/trip-planners/coliseum.jpg',
  },
  {
    name: 'Paris City Tour',
    price: 95,
    type: 'GUIDED TOUR',
    days: 7,
    rating: 5,
    imageSrc: './src/assets/images/trip-planners/eiffel-tower.jpg',
  },
  {
    name: 'Barcelona City Tour',
    price: 89,
    type: 'GUIDED TOUR',
    days: 7,
    rating: 5,
    imageSrc: './src/assets/images/trip-planners/madrid.png',
  },
  {
    name: 'Budapest City Tour',
    price: 89,
    type: 'GUIDED TOUR',
    days: 7,
    rating: 5,
    imageSrc: './src/assets/images/trip-planners/fishermans-bastion.jpg',
  },
]
</script>

<template>
  <section class="trip-planners">
    <div class="trip-planners__container">
      <SectionTitle
        title="Trip Planners"
        text="20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines."
        accent-line-class="trip-planners__accent-line"
      />
      <DecoratedButton text="View all trip plans" href="#" />
    </div>

    <TripPlannerCards :cards="cardsPlaceholder" />
  </section>
</template>
