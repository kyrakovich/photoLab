<template>
  <div class="box">
    <img :src="props.image" alt="" class="photo" />
  </div>
</template>

<style scoped>
.box {
  break-inside: avoid;
  margin-bottom: 15px;
  background-color: #FF006E;
  overflow: hidden;
  border-radius: 10px;
  display: inline-block;
  width: 100%; /* Вместо фиксированной 400px */
}

.photo {
  width: 100%;
  height: auto; /* Автоматическая высота */
  display: block;
  object-fit: cover;
}
</style>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})
</script>