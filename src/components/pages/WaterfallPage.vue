<template>
  <div class="waterfall-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { usePhotoStore } from '@/stores/photoStore'

const photoStore = usePhotoStore()
let intervalId: number

function getWaterfallPhoto() {
  if (photoStore.photos.length === 0) return

  const randomPhoto = photoStore.photos[Math.floor(Math.random() * photoStore.photos.length)]

  const photoContainer = document.createElement('div')
  photoContainer.className = 'waterfall-photo'

  const img = document.createElement('img')
  img.src = randomPhoto.url
  img.style.width = '100%'
  img.style.height = '100%'
  img.style.objectFit = 'cover'

  photoContainer.appendChild(img)

  const startX = Math.random() * 100
  const lifetime = 5 + (Math.random() * 6)
  const randomSize = 80 + Math.random() * 120
  const randomRotation = -15 + Math.random() * 30

  photoContainer.style.cssText = `
    position: fixed;
    top: -20vh;
    left: ${startX}vw;
    width: ${randomSize}px;
    height: ${randomSize}px;
    transition: all ${lifetime}s linear;
    z-index: 1;
    opacity: ${0.6 + Math.random() * 0.4};
    transform: rotate(${randomRotation}deg);
    border-radius: ${Math.random() * 20}px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    overflow: hidden;
    pointer-events: none;
  `

  document.querySelector('.waterfall-container')?.appendChild(photoContainer)

  setTimeout(() => {
    photoContainer.style.top = '105vh'
    photoContainer.style.left = `${startX + (Math.random() - 0.5) * 20}vw`
    photoContainer.style.transform = `rotate(${randomRotation + (Math.random() - 0.5) * 30}deg)`
  }, 50)

  setTimeout(() => {
    photoContainer.remove()
  }, lifetime * 1000)
}

onMounted(() => {
  intervalId = setInterval(getWaterfallPhoto, 350)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.waterfall-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

.waterfall-photo {
  pointer-events: none;
  filter: brightness(0.9) contrast(1.1);
}

.waterfall-photo img {
  display: block;
}
</style>