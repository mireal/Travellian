<script setup>
import { ref } from 'vue'
import { SectionTitle, ArrowButtons, swapCards } from '@/shared'
import { DestinationCards } from '@/features'

const galleryPlaceholder = ref([
  {
    place: 'Monument of Berlin',
    location: 'Berlin, Germany',
    src: './src/assets/images/destinations/monument-of-berlin.jpg',
  },
  {
    place: 'Millennium Bridge',
    location: 'London, United Kingdom',
    src: './src/assets/images/destinations/millenium-bridge.jpg',
  },
  {
    place: 'Rialto Bridge',
    location: 'Venice, Italy',
    src: './src/assets/images/destinations/rialto-bridge.jpg',
  },
  {
    place: 'Sea of Orange Tiles',
    location: 'Lisbon, Portugal',
    src: './src/assets/images/destinations/orange-tiles.jpg',
  },
])

</script>

<template>
  <section class="popular-destinations">
    <SectionTitle class="popular-destinations__header" accent-line-class="popular-destinations__header__accent-line"
      title="Popular Destinations"
      text="Most popular destinations around the world, from historical places to natural wonders." />

    <ArrowButtons class="popular-destinations__buttons" :click-left="() => {
        swapCards.left(cards)
      }
      " :click-right="() => {
          swapCards.right(cards)
        }
        " />

    <DestinationCards :cards="galleryPlaceholder" class="popular-destinations__cards" />
  </section>
</template>
