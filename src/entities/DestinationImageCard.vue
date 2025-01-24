<script setup>
defineProps({
  place: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="image-card">
    <img :src="imageSrc" alt="" />

    <div class="image-card__info">
      <div class="image-card__info__place">{{ place }}</div>

      <div class="image-card__info__location">
        <span class="image-card__info__location__icon icon icon__location"></span>
        <span class="image-card__info__location__name"> {{ location }} </span>
      </div>
    </div>
  </div>
</template>
