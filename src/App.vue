  <template>

    <template v-if="route.path !== '/'">
      <button class="back text-back" @click="router.push('/')">
        Лицо
      </button>
      <header>
        <button class="card text" @click="GoToGallery">Галерея</button>
        <button class="card text" @click="GoToWebsite">О сайте</button>
        <button class="card text" @click="GoToWaterfallPage">Водопад</button>
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
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
  width: 100%;
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
  transition: all 0.3s ease;
}

.card:hover,
.back:hover {
  transform: scale(1.05);
  background-color: #5fdfb4;
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
  transition: all 0.3s ease;
}
</style>