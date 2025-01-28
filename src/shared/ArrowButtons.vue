<script setup>
defineProps({
  clickLeft: {
    type: Function,
    default() {
      console.log('left click')
    },
  },
  clickRight: {
    type: Function,
    default() {
      console.log('right click')
    },
  },
})
</script>

<template>
  <div class="arrow-buttons">
    <div class="arrow-buttons__button">
      <img @click="clickLeft" src="../assets/icons/button-left.svg" alt="" />
    </div>

    <div class="arrow-buttons__button">
      <img @click="clickRight" src="../assets/icons/button-right.svg" alt="" />
    </div>
  </div>
</template>
