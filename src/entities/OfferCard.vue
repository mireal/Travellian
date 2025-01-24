<script setup>
import { DefaultButton } from '@/shared'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    default: '#',
  },
  imageSrc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="offer-card">
    <div class="offer-card__image-container">
      <img :src="imageSrc" alt="" />
    </div>

    <div class="offer-card__info">
      <div class="offer-card__info__section--vertical">
        <div class="offer-card__info__title">
          {{ title }}
        </div>

        <div class="offer-card__info__stars">
          <div class="offer-card__info__stars__star-icon icon icon__star" v-for="i in rating" v-bind:key="i" />
        </div>
      </div>

      <div class="offer-card__info__description">
        {{ description }}
      </div>

      <div class="offer-card__info__section--horizontal">
        <div class="offer-card__info__price-container">
          <span class="offer-card__info__price-container__text"> From &nbsp;</span>
          <span class="offer-card__info__price-container__price"> €{{ price }} </span>
        </div>

        <DefaultButton text="DETAILS" :href="link" />
      </div>
    </div>
  </div>
</template>
