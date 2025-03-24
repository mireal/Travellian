<script setup>
import { ref } from 'vue'
import { SectionTitle, ArrowButtons, swapCards } from '@/shared'
import { DestinationImageGallery } from '@/features'

const imageSourcesPlaceholder = ref([
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpeg',
  '/images/gallery/3.png',
  '/images/gallery/4.jpeg',
])
</script>

<template>
  <section class="destination-gallery">
    <SectionTitle
      class="destination-gallery__title"
      accent-line-class="destination-gallery__accent-line"
      title="Destination Gallery"
      text="Our photo gallery on trip"
    />

    <ArrowButtons
      class="destination-gallery__buttons"
      :click-left="() => swapCards.left(imageSourcesPlaceholder)"
      :click-right="() => swapCards.right(imageSourcesPlaceholder)"
    />

    <DestinationImageGallery
      class="destination-gallery__gallery"
      :images="imageSourcesPlaceholder"
    />
  </section>
</template>
