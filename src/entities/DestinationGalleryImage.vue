<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="gallery-image__container">
    <img :src="src" :alt="alt" />
  </div>
</template>
