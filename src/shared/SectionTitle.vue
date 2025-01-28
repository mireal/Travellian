<script setup>
defineProps({
  accentLineClass: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="section-title">
    <h2>
      {{ title }}
    </h2>
    <div :class="accentLineClass" class="section-title__accent-line"></div>
    <h3 class="section-title__subtitle">
      {{ text }}
    </h3>
  </div>
</template>
