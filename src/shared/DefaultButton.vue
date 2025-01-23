<script setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: '#',
  },
})
</script>

<template>
  <button class="button-default" :href="href">
    {{ text }}
  </button>
</template>
