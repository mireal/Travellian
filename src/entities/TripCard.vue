<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="trip-card">
    <div class="trip-card__image-box">
      <img :src="imageSrc" alt="" />
    </div>

    <div class="trip-card__info">
      <div class="trip-card__row">
        <div class="trip-card__type">
          {{ type }}
        </div>

        <div class="trip-card__price">€{{ price }}/Day</div>
      </div>

      <div class="trip-card__name">
        {{ name }}
      </div>

      <div class="trip-card__row">
        <div class="trip-card__stars">
          <div
            class="trip-card__stars__star-icon icon icon__star"
            v-for="i in rating"
            v-bind:key="i"
          />
        </div>

        <div class="trip-card__days">{{ days }} Days tour</div>
      </div>
    </div>
  </div>
</template>
