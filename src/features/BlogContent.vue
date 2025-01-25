<script setup>
import { LinkArrow } from '@/shared';

defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="blog-content">
    <div class="blog-content__bordered-image">
      <img :src="content.imageSrc" alt="" />
    </div>

    <div class="blog-content__info">
      <div class="blog-content__info__title">
        {{ content.title }}
      </div>

      <div class="blog-content__info__description">
        {{ content.description }}
      </div>

      <LinkArrow text="Read More" link="#" />

    </div>
  </div>
</template>
