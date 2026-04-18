  <template>

    <template v-if="route.path !== '/'">
      <button class="back text-back" @click="router.push('/')">
        Лицо
      </button>
      <header>
        <button class="card text" @click="GoToGallery">Галерея</button>
        <button class="card text" @click="GoToWaterfallPage">Водопад</button>
        <button class="card text" @click="GoToWebsite">О сайте</button>
      </header>

    </template>
    <main>
      <router-view />
    </main>

  </template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function GoToWaterfallPage() {
  router.push('/Waterfall')
}
function GoToWebsite() {
  router.push('/Website')
}
function GoToGallery() {
  router.push('/Gallery')
}
</script>

<style>
/* Глобальные стили */
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh
}

main {
  column-count: 3;
  column-gap: 15px;
  width: 80%;
  margin: 40px auto;
  background-color: bisque;
}

#app {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}

@font-face {
  font-family: 'Rivervale';
  src: url(@/assets/fonts/RivervaleDemo.otf) format('opentype');
}

header {
  width: 100%;
  height: 8vh;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
}

.text {
  font-family: Rivervale, sans-serif;
  font-size: 32px;
  font-weight: 700;
}

.text-back {
  font-family: Rivervale, sans-serif;
  font-size: 16px;
  font-weight: 700;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  width: 400px;
  height: 5vh;
  border-radius: 10px;
  cursor: pointer;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  width: 100px;
  height: 5vh;
  border-radius: 10px;
  cursor: pointer;
  right: 10px;
  bottom: 10px;
  position: fixed;
}
</style>