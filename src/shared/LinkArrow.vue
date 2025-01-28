<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a class="link-arrow" :href="link">
    <span class="link-arrow__text">
      {{ text }}
    </span>
    <span class="link-arrow__icon icon icon__arrow-right--orange" />
  </a>
</template>
