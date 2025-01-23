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
  <div>
    <h2>
      {{ title }}
    </h2>
    <div :class="accentLineClass" class="accent-line"></div>
    <h3>
      {{ text }}
    </h3>
  </div>
</template>
