<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <li>
    <RouterLink :to="href" exact-active-class="navbar-link--active" class="navbar-link">
      {{ name }}</RouterLink
    >
  </li>
</template>
