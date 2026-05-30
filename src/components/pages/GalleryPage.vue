<template>
  <div class="c55">
    <div class="c54">
      <PhotoFrame v-for="(photo, index) in photoStore.photos" :key="index" :image="photo.url" :index="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PhotoFrame from '../photos.vue'
import { usePhotoStore } from '@/stores/photoStore'

const photoStore = usePhotoStore()
</script>

<style scoped>
.c55 {
  align-items: center;
  background: linear-gradient(135deg,#667eea 0%, #110f13 100%);
  position: relative;
  overflow: hidden;
  padding-top: 4vh;
}

.c54 {
  column-count: 3;
  column-gap: 15px;
  width: 80%;
  margin: 40px auto;
}
</style>