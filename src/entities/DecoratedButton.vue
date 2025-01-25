<script setup>
import { DefaultButton } from '@/shared'
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
  <div class="decorated-button">
    <div class="decorated-button__square decorated-button__square--left" />
    <DefaultButton class="decorated-button__button" :text="text" :href="href" />
    <div class="decorated-button__square decorated-button__square--right" />
  </div>
</template>
