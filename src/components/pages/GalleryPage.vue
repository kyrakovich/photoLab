<template>
  <div class="c54">
    <PhotoFrame v-for="(photo, index) in photos" :key="index" :image="photo.url" :index="index" />
  </div>
</template>

<script setup lang="ts">
import PhotoFrame from '../photos.vue'

const photos = [
  { url: '/photos/photo_2025-12-29_03-23-34.jpg' },
  { url: '/photos/photo_2026-04-02_19-06-04.jpg' },
  { url: '/photos/1234.jpg' }
]
</script>

<style scoped>
.c54 {
  column-count: 3;
  column-gap: 15px;
  width: 80%;
  margin: 40px auto;
  background-color: bisque;
}
</style>