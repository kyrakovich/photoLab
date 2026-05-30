import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePhotoStore = defineStore('photo', () => {
  // Массив с фотографиями
  const photos = ref([
    { url: '/photos/kart1.jpg' },
    { url: '/photos/kart.jpg' },
    { url: '/photos/kart2.jpg' },
    { url: '/photos/kart3.jpg' },
    { url: '/photos/kart4.jpg' },
    { url: '/photos/kart5.jpg' },
    { url: '/photos/kart6.jpg' },
    { url: '/photos/booker.jpg' },
    { url: '/photos/pogoda.jpg' },
    { url: '/photos/vaib.jpg' },
    { url: '/photos/vaib1.jpg' },
    { url: '/photos/vaib2.jpg' },
    { url: '/photos/vaib3.jpg' },
    { url: '/photos/vaib4.jpg' },
    { url: '/photos/vaib5.jpg' },
    { url: '/photos/vaib7.jpg' },
    { url: '/photos/vaib6.jpg' },
  ])  

  // Функция для добавления фото
  const addPhoto = (url: string) => {
    photos.value.push({ url })
  }

  return { photos, addPhoto }
})