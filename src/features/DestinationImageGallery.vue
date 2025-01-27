<script setup>
import { DestinationGalleryImage } from '@/entities'
defineProps({
  images: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="image-gallery">
    <DestinationGalleryImage
      v-for="(n, i) in 4"
      class="image-gallery__image"
      :key="n"
      :src="images[i]"
    />
  </div>
</template>
