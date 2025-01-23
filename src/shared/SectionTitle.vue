<script setup>
defineProps({
  parentClass: {
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
  <div :class="`${parentClass}__header`">
    <h2 :class="`${parentClass}__header__title`">
      {{ title }}
    </h2>
    <div :class="`${parentClass}__header__accent-line`" class="accent-line"></div>
    <h3 :class="`${parentClass}__header__subtitle`">
      {{ text }}
    </h3>
  </div>
</template>
